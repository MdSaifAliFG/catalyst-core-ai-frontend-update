import { Users, Phone, CheckCircle, Heart, Calendar, Clock, Upload, FileText, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Dashboard() {
  const router = useRouter();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showLeadPreview, setShowLeadPreview] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [objective, setObjective] = useState("");
  const [script, setScript] = useState("");
  const chartsMounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [tone, setTone] = useState("Professional");
  const [language, setLanguage] = useState("English");

  const kpiCards = [
    { label: "Total Leads", value: "2,450", icon: Users, color: "bg-blue-500" },
    { label: "Calls Today", value: "385", icon: Phone, color: "bg-green-500" },
    { label: "Connected Calls", value: "271", icon: CheckCircle, color: "bg-purple-500" },
    { label: "Interested Leads", value: "112", icon: Heart, color: "bg-pink-500" },
    { label: "Scheduled Follow-ups", value: "48", icon: Calendar, color: "bg-orange-500" },
    { label: "Avg Call Duration", value: "3m 42s", icon: Clock, color: "bg-indigo-500" },
  ];

  const callStatusData = [
    { name: "Completed", value: 271, color: "#22c55e" },
    { name: "Missed", value: 68, color: "#ef4444" },
    { name: "Busy", value: 46, color: "#f59e0b" },
  ];

  const leadStageData = [
    { name: "New", count: 450 },
    { name: "Contacted", count: 380 },
    { name: "Interested", count: 280 },
    { name: "Qualified", count: 150 },
    { name: "Closed Won", count: 90 },
  ];

  const dailyCallData = [
    { day: "Mon", calls: 320 },
    { day: "Tue", calls: 385 },
    { day: "Wed", calls: 410 },
    { day: "Thu", calls: 365 },
    { day: "Fri", calls: 420 },
    { day: "Sat", calls: 280 },
    { day: "Sun", calls: 190 },
  ];

  const recentActivities = [
    { id: 1, text: "AI successfully completed call with Rahul Sharma", time: "2 minutes ago", type: "success" },
    { id: 2, text: "Follow-up created for Priya Reddy", time: "15 minutes ago", type: "info" },
    { id: 3, text: "New lead file imported - 50 leads", time: "1 hour ago", type: "info" },
    { id: 4, text: "Call completed with Amit Patel - Interested", time: "2 hours ago", type: "success" },
    { id: 5, text: "AI campaign started for Villa Project", time: "3 hours ago", type: "info" },
  ];

  const upcomingFollowups = [
    { id: 1, name: "Rahul Sharma", date: "28 June 2026", time: "10:00 AM", interest: "High" },
    { id: 2, name: "Priya Reddy", date: "28 June 2026", time: "2:00 PM", interest: "Medium" },
    { id: 3, name: "Amit Patel", date: "29 June 2026", time: "11:30 AM", interest: "High" },
  ];

  const leadPreviewData = [
    { name: "Rahul Sharma", phone: "+91 9876543210", location: "Bangalore", source: "Website" },
    { name: "Priya Reddy", phone: "+91 9876543211", location: "Hyderabad", source: "Facebook Ads" },
    { name: "Amit Patel", phone: "+91 9876543212", location: "Mumbai", source: "Google Ads" },
    { name: "Sneha Kumar", phone: "+91 9876543213", location: "Chennai", source: "Referral" },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setShowLeadPreview(true);
    }
  };

  const handleStartCalling = () => {
    router.push("/call-processing");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">Monitor AI lead engagement activities.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-3 sm:gap-4">
        {kpiCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`${card.color} p-2 rounded-lg`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl sm:text-2xl sm:text-3xl font-bold mb-1 text-foreground">{card.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{card.label}</div>
            </div>
          );
        })}
      </div>

      {/* AI Campaign Setup */}
      <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-8 space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-xl sm:text-2xl font-bold text-foreground">AI Campaign Setup</h2>

        {/* Upload Lead File Section */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">Upload Lead File</h3>
          
          {!uploadedFile ? (
            <div className="border-2 border-dashed border-border rounded-lg sm:rounded-xl p-6 sm:p-12 text-center bg-accent/30">
              <Upload className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm sm:text-base text-foreground mb-2">Drag and drop your lead file here</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">Supported: Excel (.xlsx), CSV</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <label className="px-4 sm:px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm shadow-sm hover:bg-primary/90 transition-colors cursor-pointer inline-flex items-center justify-center">
                  Upload File
                  <input
                    type="file"
                    accept=".xlsx,.csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <button className="px-4 sm:px-6 py-2 border border-border rounded-lg hover:bg-accent transition-colors text-sm font-medium text-foreground">
                  Download Sample File
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                <FileText className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="flex-1 text-sm sm:text-base text-green-900 dark:text-green-100 break-all">{uploadedFile.name}</span>
                <button
                  onClick={() => {
                    setUploadedFile(null);
                    setShowLeadPreview(false);
                  }}
                  className="text-sm text-green-700 dark:text-green-300 hover:underline whitespace-nowrap"
                >
                  Remove
                </button>
              </div>

              {showLeadPreview && (
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-semibold text-foreground">Lead Preview</h4>
                  <div className="border border-border rounded-lg overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-accent">
                        <tr>
                          <th className="px-3 sm:px-4 py-3 text-left font-semibold text-foreground">Name</th>
                          <th className="px-3 sm:px-4 py-3 text-left font-semibold text-foreground hidden sm:table-cell">Phone</th>
                          <th className="px-3 sm:px-4 py-3 text-left font-semibold text-foreground hidden md:table-cell">Location</th>
                          <th className="px-3 sm:px-4 py-3 text-left font-semibold text-foreground">Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {leadPreviewData.map((lead, index) => (
                          <tr key={index} className="hover:bg-accent/50 transition-colors">
                            <td className="px-3 sm:px-4 py-3 text-foreground">{lead.name}</td>
                            <td className="px-3 sm:px-4 py-3 text-foreground hidden sm:table-cell text-sm">{lead.phone}</td>
                            <td className="px-3 sm:px-4 py-3 text-foreground hidden md:table-cell text-sm">{lead.location}</td>
                            <td className="px-3 sm:px-4 py-3 text-foreground text-sm">{lead.source}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* AI Script Configuration Section */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">AI Script Configuration</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 sm:gap-3 sm:gap-4 sm:gap-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="campaign-name" className="block text-sm font-medium text-foreground mb-2">Campaign Name</label>
                <input
                  id="campaign-name"
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="e.g., Villa Project Campaign"
                  className="w-full px-4 py-2 sm:py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                />
              </div>

              <div>
                <label htmlFor="objective" className="block text-sm font-medium text-foreground mb-2">Objective</label>
                <textarea
                  id="objective"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="Book site visits for villa projects."
                  rows={3}
                  className="w-full px-4 py-2 sm:py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-sm"
                />
              </div>

              <div>
                <label htmlFor="tone" className="block text-sm font-medium text-foreground mb-2">Conversation Tone</label>
                <select
                  id="tone"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-2 sm:py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                >
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Formal</option>
                </select>
              </div>

              <div>
                <label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">Primary Language</label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-2 sm:py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Tamil</option>
                  <option>Telugu</option>
                  <option>Kannada</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="script" className="block text-sm font-medium text-foreground mb-2">Conversation Script</label>
              <textarea
                id="script"
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Introduce company.&#10;Understand customer requirements.&#10;Ask suitable questions.&#10;Book follow-up if interested."
                rows={12}
                className="w-full px-4 py-2 sm:py-3 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-sm font-mono"
              />
            </div>
          </div>

          <button
            onClick={handleStartCalling}
            className="w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Start Calling Campaign
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 sm:gap-3 sm:gap-4 sm:gap-6">
        {/* Daily Calls Chart */}
        <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-lg sm:text-xl font-bold text-foreground mb-4">Daily Calls</h3>
          <div className="w-full h-64 sm:h-80">
            {chartsMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyCallData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="day" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                  <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                  <Bar dataKey="calls" fill="var(--primary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Call Status Chart */}
        <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-lg sm:text-xl font-bold text-foreground mb-4">Call Status</h3>
          <div className="w-full h-64 sm:h-80">
            {chartsMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={callStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}`}
                    outerRadius={80}
                    fill="var(--primary)"
                    dataKey="value"
                  >
                    {callStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* Lead Stage & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 sm:gap-3 sm:gap-4 sm:gap-6">
        {/* Lead Stage Chart */}
        <div className="lg:col-span-1 bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-lg sm:text-xl font-bold text-foreground mb-4">Lead Stage Distribution</h3>
          <div className="w-full h-64">
            {chartsMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={leadStageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} angle={-45} height={80} />
                  <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
                  <Line type="monotone" dataKey="count" stroke="var(--primary)" strokeWidth={2} dot={{ fill: "var(--primary)", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-1 bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-lg sm:text-xl font-bold text-foreground mb-4">Recent Activities</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-3 p-3 bg-accent/30 rounded-lg text-sm">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${activity.type === "success" ? "bg-green-500" : "bg-blue-500"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-foreground text-xs sm:text-sm leading-snug">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Follow-ups */}
        <div className="lg:col-span-1 bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-lg sm:text-xl font-bold text-foreground mb-4">Upcoming Follow-ups</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {upcomingFollowups.map((followup) => (
              <div key={followup.id} className="p-3 border border-border rounded-lg bg-accent/20">
                <p className="font-medium text-sm text-foreground">{followup.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{followup.date} at {followup.time}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    followup.interest === "High" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                    followup.interest === "Medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" :
                    "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                  }`}>
                    {followup.interest} Interest
                  </span>
                  <button className="text-xs text-primary hover:underline font-medium">Call</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
