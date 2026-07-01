import { useState } from "react";
import { useRouter } from "next/navigation";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Phone, Clock } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  phone: string;
  lastCallTime: string;
  interestLevel: "High" | "Medium" | "Low";
}

interface Stage {
  id: string;
  title: string;
  color: string;
  leads: Lead[];
}

function LeadCard({ lead, onView }: { lead: Lead; onView: (id: number) => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "LEAD",
    item: { id: lead.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const interestColors = {
    High: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
    Low: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <div
      ref={(node) => {
        drag(node);
      }}
      onClick={() => onView(lead.id)}
      className={`bg-card border border-border rounded-xl p-4 cursor-pointer hover:border-primary transition-all ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h4 className="mb-2">{lead.name}</h4>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Phone className="w-3 h-3" />
        <span>{lead.phone}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>{lead.lastCallTime}</span>
        </div>
        <div className={`px-2 py-1 rounded-lg ${interestColors[lead.interestLevel]}`}>
          {lead.interestLevel}
        </div>
      </div>
    </div>
  );
}

function StageColumn({ stage, onDrop, onViewLead }: { stage: Stage; onDrop: (leadId: number, stageId: string) => void; onViewLead: (id: number) => void }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "LEAD",
    drop: (item: { id: number }) => onDrop(item.id, stage.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="flex-1 min-w-[280px]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3>{stage.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{stage.leads.length} leads</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${stage.color}`} />
      </div>
      <div
        ref={(node) => {
          drop(node);
        }}
        className={`space-y-3 min-h-[600px] p-4 rounded-2xl border-2 border-dashed transition-colors ${
          isOver ? "border-primary bg-primary/5" : "border-border bg-accent/30"
        }`}
      >
        {stage.leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} onView={onViewLead} />
        ))}
      </div>
    </div>
  );
}

export function Pipeline() {
  const router = useRouter();

  const [stages, setStages] = useState<Stage[]>([
    {
      id: "new",
      title: "New Leads",
      color: "bg-blue-500",
      leads: [
        { id: 1, name: "Rahul Sharma", phone: "+91 9876543210", lastCallTime: "2 hours ago", interestLevel: "High" },
        { id: 2, name: "Priya Reddy", phone: "+91 9876543211", lastCallTime: "3 hours ago", interestLevel: "Medium" },
        { id: 3, name: "Amit Patel", phone: "+91 9876543212", lastCallTime: "5 hours ago", interestLevel: "High" },
      ],
    },
    {
      id: "contacted",
      title: "Contacted",
      color: "bg-purple-500",
      leads: [
        { id: 4, name: "Sneha Kumar", phone: "+91 9876543213", lastCallTime: "1 day ago", interestLevel: "Medium" },
        { id: 5, name: "Vikram Singh", phone: "+91 9876543214", lastCallTime: "1 day ago", interestLevel: "High" },
      ],
    },
    {
      id: "interested",
      title: "Interested",
      color: "bg-yellow-500",
      leads: [
        { id: 6, name: "Anita Desai", phone: "+91 9876543215", lastCallTime: "2 days ago", interestLevel: "High" },
        { id: 7, name: "Rajesh Gupta", phone: "+91 9876543216", lastCallTime: "2 days ago", interestLevel: "Medium" },
        { id: 8, name: "Meera Nair", phone: "+91 9876543217", lastCallTime: "3 days ago", interestLevel: "High" },
      ],
    },
    {
      id: "followup",
      title: "Follow-up Scheduled",
      color: "bg-orange-500",
      leads: [
        { id: 9, name: "Karthik Reddy", phone: "+91 9876543218", lastCallTime: "4 days ago", interestLevel: "High" },
        { id: 10, name: "Divya Iyer", phone: "+91 9876543219", lastCallTime: "5 days ago", interestLevel: "Medium" },
      ],
    },
    {
      id: "qualified",
      title: "Qualified",
      color: "bg-indigo-500",
      leads: [
        { id: 11, name: "Suresh Menon", phone: "+91 9876543220", lastCallTime: "1 week ago", interestLevel: "High" },
      ],
    },
    {
      id: "won",
      title: "Closed Won",
      color: "bg-green-500",
      leads: [
        { id: 12, name: "Lakshmi Prasad", phone: "+91 9876543221", lastCallTime: "1 week ago", interestLevel: "High" },
        { id: 13, name: "Arjun Mehta", phone: "+91 9876543222", lastCallTime: "2 weeks ago", interestLevel: "High" },
      ],
    },
    {
      id: "lost",
      title: "Closed Lost",
      color: "bg-red-500",
      leads: [
        { id: 14, name: "Pooja Sharma", phone: "+91 9876543223", lastCallTime: "2 weeks ago", interestLevel: "Low" },
      ],
    },
  ]);

  const handleDrop = (leadId: number, targetStageId: string) => {
    setStages((prevStages) => {
      // Find the lead and remove it from its current stage
      let movedLead: Lead | undefined;
      const updatedStages = prevStages.map((stage) => ({
        ...stage,
        leads: stage.leads.filter((lead) => {
          if (lead.id === leadId) {
            movedLead = lead;
            return false;
          }
          return true;
        }),
      }));

      // Add the lead to the target stage
      if (movedLead) {
        const targetStage = updatedStages.find((s) => s.id === targetStageId);
        if (targetStage) {
          targetStage.leads.push(movedLead);
        }
      }

      return updatedStages;
    });
  };

  const handleViewLead = (id: number) => {
    router.push(`/lead/${id}`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Pipeline</h1>
          <p className="text-muted-foreground mt-1">Drag and drop leads across stages to update their status</p>
        </div>

        <div className="flex gap-3 sm:gap-4 sm:gap-6 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <StageColumn
              key={stage.id}
              stage={stage}
              onDrop={handleDrop}
              onViewLead={handleViewLead}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
