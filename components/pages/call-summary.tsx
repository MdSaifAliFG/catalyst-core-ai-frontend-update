import { useRouter } from "next/navigation";
import { Clock, Globe, TrendingUp, Calendar, Phone, Play, Pause } from "lucide-react";
import { useState } from "react";

export function CallSummary() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  const transcript = [
    { speaker: "AI Agent", text: "नमस्ते, मैं Catalyst Core AI से बोल रहा हूँ। क्या आप रहुल शर्मा से बात कर रहे हैं?", time: "00:05" },
    { speaker: "Customer", text: "हाँ, मैं रहुल बोल रहा हूँ।", time: "00:12" },
    { speaker: "AI Agent", text: "रहुल जी, मैं आपको हमारे नए विला प्रोजेक्ट के बारे में बताना चाहता हूँ। क्या आप रियल एस्टेट में इन्वेस्ट करने में इंटरेस्टेड हैं?", time: "00:15" },
    { speaker: "Customer", text: "हाँ, मुझे थोड़ी जानकारी चाहिए। कहाँ है यह प्रोजेक्ट?", time: "00:25" },
    { speaker: "AI Agent", text: "यह प्रोजेक्ट बैंगलोर में है। क्या आप साइट विजिट के लिए आना चाहेंगे?", time: "00:30" },
    { speaker: "Customer", text: "हाँ, अगले हफ्ते चल सकता है। कितना बजट होगा?", time: "00:40" },
    { speaker: "AI Agent", text: "विला की कीमत ₹90 लाख से शुरू होती है। मैं आपके लिए अगले हफ्ते की विजिट बुक कर देता हूँ।", time: "00:48" },
    { speaker: "Customer", text: "ठीक है, धन्यवाद।", time: "00:58" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Call Summary</h1>
          <p className="text-muted-foreground mt-1">Detailed conversation analysis and insights</p>
        </div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-colors"
        >
          Back
        </button>
      </div>

      {/* Customer Info Card */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="mb-2">Rahul Sharma</h2>
            <div className="flex items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91 9876543210
              </span>
              <span>•</span>
              <span>Bangalore</span>
            </div>
          </div>
          <div className="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded-xl">
            High Interest
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-muted-foreground">Duration</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold">4m 12s</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-muted-foreground">Language</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold">Hindi</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm text-muted-foreground">Interest Level</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold">High</div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-muted-foreground">Follow-up</span>
          </div>
          <div className="text-lg sm:text-xl font-bold">28 June</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 sm:gap-6">
        {/* Left Column - Summary and Transcript */}
        <div className="lg:col-span-2 space-y-6">
          {/* Call Summary */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Call Summary</h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Customer interested in villa project. Requested more information about the property location and pricing. 
                Wants to visit next week. Conversation was conducted in Hindi as per customer&apos;s preference. 
                AI agent successfully gathered budget information and scheduled a follow-up visit. 
                Customer showed high interest and engagement throughout the call.
              </p>
            </div>
          </div>

          {/* Call Recording Player */}
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

          {/* Transcript */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Conversation Transcript</h3>
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
        </div>

        {/* Right Column - AI Notes and Actions */}
        <div className="space-y-6">
          {/* AI Notes */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">AI Notes</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Budget</div>
                <div className="font-bold text-lg">₹90 Lakhs</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Interest Level</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-4/5" />
                  </div>
                  <span className="text-sm font-medium">High</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Requirements</div>
                <div className="space-y-2">
                  <div className="px-3 py-2 bg-accent rounded-lg text-sm">Villa project</div>
                  <div className="px-3 py-2 bg-accent rounded-lg text-sm">Bangalore location</div>
                  <div className="px-3 py-2 bg-accent rounded-lg text-sm">Site visit needed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Follow-up */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3>Auto Follow-up Created</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Date</div>
                <div className="font-bold">28 June 2026</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Action</div>
                <div className="font-bold">Call Again</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Notes</div>
                <div className="text-sm">Schedule site visit and confirm availability</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.push("/lead/1")}
              className="w-full px-6 py-3 w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform"
            >
              View Lead Details
            </button>
            <button
              onClick={() => router.push("/pipeline")}
              className="w-full px-6 py-3 border border-border rounded-xl hover:bg-accent transition-colors"
            >
              Go To Pipeline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
