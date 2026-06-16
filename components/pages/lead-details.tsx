import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Phone, MapPin, Tag, TrendingUp, Calendar, Clock, Play, Pause, FileText } from "lucide-react";
import { useState } from "react";

export function LeadDetails() {
  const router = useRouter();
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);

  const leadInfo = {
    name: "Rahul Sharma",
    phone: "+91 9876543210",
    location: "Bangalore, Karnataka",
    source: "Website",
    stage: "Interested",
  };

  const callNotes = {
    summary: "Customer interested in villa project. Requested more information about the property location and pricing. Wants to visit next week. Conversation was conducted in Hindi as per customer's preference.",
    budget: "₹90 Lakhs",
    interestLevel: "High",
    requirements: ["Villa project", "Bangalore location", "Site visit needed"],
  };

  const followUp = {
    date: "28 June 2026",
    time: "10:00 AM",
    action: "Call Again",
    notes: "Schedule site visit and confirm availability",
  };

  const activityTimeline = [
    { id: 1, type: "call", text: "AI completed call - High interest", time: "2 hours ago", color: "bg-green-500" },
    { id: 2, type: "followup", text: "Follow-up scheduled for 28 June", time: "2 hours ago", color: "bg-blue-500" },
    { id: 3, type: "update", text: "Lead stage updated to Interested", time: "2 hours ago", color: "bg-purple-500" },
    { id: 4, type: "call", text: "AI initiated call", time: "2 hours ago", color: "bg-blue-500" },
    { id: 5, type: "import", text: "Lead imported from Website", time: "1 day ago", color: "bg-gray-500" },
  ];

  const transcript = [
    { speaker: "AI Agent", text: "नमस्ते, मैं Catalyst Core AI से बोल रहा हूँ। क्या आप रहुल शर्मा से बात कर रहे हैं?", time: "00:05" },
    { speaker: "Customer", text: "हाँ, मैं रहुल बोल रहा हूँ।", time: "00:12" },
    { speaker: "AI Agent", text: "रहुल जी, मैं आपको हमारे नए विला प्रोजेक्ट के बारे में बताना चाहता हूँ। क्या आप रियल एस्टेट में इन्वेस्ट करने में इंटरेस्टेड हैं?", time: "00:15" },
    { speaker: "Customer", text: "हाँ, मुझे थोड़ी जानकारी चाहिए। कहाँ है यह प्रोजेक्ट?", time: "00:25" },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-accent rounded-xl transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Lead Details</h1>
          <p className="text-muted-foreground mt-1">Comprehensive lead information and interaction history</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 sm:gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Lead Information */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Lead Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 sm:gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Name</div>
                <div className="font-medium text-lg">{leadInfo.name}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Phone Number</div>
                <div className="font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {leadInfo.phone}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {leadInfo.location}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Lead Source</div>
                <div className="font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {leadInfo.source}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Current Stage</div>
                <div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300 rounded-lg">
                    {leadInfo.stage}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call Notes */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Call Notes</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Automatically Generated Summary</div>
                <p className="leading-relaxed">{callNotes.summary}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Budget</div>
                  <div className="font-bold text-lg">{callNotes.budget}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Interest Level</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-bold text-green-600">{callNotes.interestLevel}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-2">Requirements</div>
                <div className="flex flex-wrap gap-2">
                  {callNotes.requirements.map((req, index) => (
                    <span key={index} className="px-3 py-1 bg-accent rounded-lg text-sm">
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call Recording */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Call Recording</h3>
            <div className="flex items-center gap-3 sm:gap-4 p-4 bg-accent rounded-xl">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="flex-1">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 transition-all" />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1:24</span>
                  <span>4:12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call Transcript */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Call Transcript</h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {transcript.map((entry, index) => (
                <div key={index} className={`flex gap-3 sm:gap-4 ${entry.speaker === 'AI Agent' ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs">
                    {entry.speaker === 'AI Agent' ? 'AI' : 'C'}
                  </div>
                  <div className={`flex-1 ${entry.speaker === 'AI Agent' ? 'text-right' : ''}`}>
                    <div className="text-xs text-muted-foreground mb-1">
                      {entry.speaker} • {entry.time}
                    </div>
                    <div className={`inline-block px-4 py-2 rounded-2xl ${
                      entry.speaker === 'AI Agent'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent'
                    }`}>
                      {entry.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prototype Actions */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Update Lead Stage</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors">
                Move to Interested
              </button>
              <button className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                Move to Site Visit
              </button>
              <button className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                Move to Closed
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Follow-up and Activity */}
        <div className="space-y-6">
          {/* Follow-up Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3>Upcoming Follow-up</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Date</div>
                <div className="font-bold">{followUp.date}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Time</div>
                <div className="font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {followUp.time}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Action</div>
                <div className="font-bold">{followUp.action}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Notes</div>
                <div className="text-sm">{followUp.notes}</div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Activity Timeline</h3>
            <div className="space-y-4">
              {activityTimeline.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
