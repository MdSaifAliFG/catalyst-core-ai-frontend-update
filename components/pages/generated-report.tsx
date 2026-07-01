import { useRouter } from "next/navigation";
import { Download, ArrowLeft, Calendar } from "lucide-react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function GeneratedReport() {
  const router = useRouter();

  const callStats = {
    totalCalls: 4250,
    connectedCalls: 3120,
    avgDuration: "3m 42s",
    successRate: "73.4%",
  };

  const conversionMetrics = {
    contacted: 3120,
    interested: 1040,
    qualified: 520,
    closedWon: 280,
    conversionRate: "8.9%",
  };

  const weeklyData = [
    { week: "Week 1", calls: 980, interested: 280 },
    { week: "Week 2", calls: 1050, interested: 320 },
    { week: "Week 3", calls: 1120, interested: 360 },
    { week: "Week 4", calls: 1100, interested: 340 },
  ];

  const languageData = [
    { name: "Hindi", value: 1450, color: "#3b82f6" },
    { name: "English", value: 1120, color: "#8b5cf6" },
    { name: "Telugu", value: 680, color: "#22c55e" },
    { name: "Tamil", value: 520, color: "#f59e0b" },
    { name: "Kannada", value: 480, color: "#ef4444" },
  ];

  return (
    <div className="p-8 space-y-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.push("/reports")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Reports
        </button>
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2">
          <Download className="w-5 h-5" />
          Download PDF
        </button>
      </div>

      {/* Report Container */}
      <div className="bg-card border border-border rounded-2xl p-12 max-w-5xl mx-auto">
        {/* Report Header */}
        <div className="text-center mb-12 pb-8 border-b border-border">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Catalyst Core AI</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Performance Report</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Generated on 10 June 2026</span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Reporting Period: 1 June 2026 - 10 June 2026
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-12">
          <h3 className="mb-4">Executive Summary</h3>
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              This report provides a comprehensive analysis of AI voice agent performance for the period of June 1-10, 2026. 
              Our AI agents successfully conducted 4,250 calls with a 73.4% connection rate, engaging with leads across 
              multiple languages and demographics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The campaign achieved an 8.9% conversion rate from contacted leads to closed won deals, with particularly 
              strong performance in the villa project vertical. Hindi and English remained the most commonly used languages, 
              accounting for over 60% of all conversations.
            </p>
          </div>
        </div>

        {/* Call Statistics */}
        <div className="mb-12">
          <h3 className="mb-6">Call Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 sm:gap-6">
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{callStats.totalCalls}</div>
              <div className="text-sm text-muted-foreground">Total Calls</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{callStats.connectedCalls}</div>
              <div className="text-sm text-muted-foreground">Connected Calls</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{callStats.avgDuration}</div>
              <div className="text-sm text-muted-foreground">Avg Duration</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">{callStats.successRate}</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Lead Conversion Metrics */}
        <div className="mb-12">
          <h3 className="mb-6">Lead Conversion Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-accent rounded-xl">
              <span>Contacted</span>
              <span className="font-bold">{conversionMetrics.contacted}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent rounded-xl">
              <span>Interested</span>
              <span className="font-bold">{conversionMetrics.interested}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent rounded-xl">
              <span>Qualified</span>
              <span className="font-bold">{conversionMetrics.qualified}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent rounded-xl">
              <span>Closed Won</span>
              <span className="font-bold text-green-600">{conversionMetrics.closedWon}</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-xl">
              <span>Overall Conversion Rate</span>
              <span className="font-bold text-xl">{conversionMetrics.conversionRate}</span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="mb-12">
          <h3 className="mb-6">Weekly Performance Trend</h3>
          <div className="bg-accent/50 rounded-xl p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} name="Total Calls" />
                <Line type="monotone" dataKey="interested" stroke="#22c55e" strokeWidth={2} name="Interested" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="mb-6">Language Distribution</h3>
          <div className="bg-accent/50 rounded-xl p-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Catalyst Core AI - AI Voice Agent Platform</p>
          <p className="mt-2">This report is automatically generated by our AI analytics engine</p>
        </div>
      </div>
    </div>
  );
}
