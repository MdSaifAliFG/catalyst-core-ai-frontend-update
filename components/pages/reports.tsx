import { useState } from "react";
import { useRouter } from "next/navigation";
import { Download, FileText, TrendingUp } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function Reports() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "calls" | "leads">("overview");

  const overviewCards = [
    { label: "Total Calls", value: "4,250", change: "+12%", color: "text-blue-600" },
    { label: "Connected Calls", value: "3,120", change: "+8%", color: "text-green-600" },
    { label: "Interested Leads", value: "1,040", change: "+15%", color: "text-purple-600" },
    { label: "Follow-ups Created", value: "520", change: "+10%", color: "text-orange-600" },
  ];

  const dailyCallsData = [
    { date: "1 Jun", calls: 380, connected: 280 },
    { date: "2 Jun", calls: 420, connected: 310 },
    { date: "3 Jun", calls: 390, connected: 290 },
    { date: "4 Jun", calls: 450, connected: 340 },
    { date: "5 Jun", calls: 410, connected: 300 },
    { date: "6 Jun", calls: 480, connected: 360 },
    { date: "7 Jun", calls: 440, connected: 320 },
  ];

  const conversionData = [
    { stage: "Contacted", count: 3120 },
    { stage: "Interested", count: 1040 },
    { stage: "Qualified", count: 520 },
    { stage: "Closed Won", count: 280 },
  ];

  const outcomeData = [
    { name: "Interested", value: 1040, color: "#22c55e" },
    { name: "Not Interested", value: 1200, color: "#ef4444" },
    { name: "Follow-up Needed", value: 880, color: "#f59e0b" },
  ];

  const leadSources = [
    { source: "Google Ads", leads: 1250, conversion: "28%" },
    { source: "Website", leads: 980, conversion: "24%" },
    { source: "Facebook", leads: 720, conversion: "19%" },
    { source: "Referral", leads: 580, conversion: "32%" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground mt-1">Analyze performance and generate insights</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Excel
          </button>
          <button className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
          <button
            onClick={() => router.push("/generated-report")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Generate Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "overview"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("calls")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "calls"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Call Reports
        </button>
        <button
          onClick={() => setActiveTab("leads")}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === "leads"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Lead Reports
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <>
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {overviewCards.map((card, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-6">
                <div className="text-sm text-muted-foreground mb-2">{card.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl sm:text-3xl font-bold">{card.value}</div>
                  <div className={`flex items-center gap-1 ${card.color}`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">{card.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 sm:gap-6">
            {/* Daily Calls Graph */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="mb-4">Daily Calls Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyCallsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={2} name="Total Calls" />
                  <Line type="monotone" dataKey="connected" stroke="#22c55e" strokeWidth={2} name="Connected" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Lead Conversion Graph */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="mb-4">Lead Conversion Funnel</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Call Outcome Pie Chart */}
            <div className="bg-card border border-border rounded-2xl p-6 lg:col-span-2">
              <h3 className="mb-4">Call Outcome Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={outcomeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {outcomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performing Lead Sources */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Top Performing Lead Sources</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left">Source</th>
                    <th className="px-4 py-3 text-left">Total Leads</th>
                    <th className="px-4 py-3 text-left">Conversion Rate</th>
                    <th className="px-4 py-3 text-left">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {leadSources.map((source, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-4 py-4 font-medium">{source.source}</td>
                      <td className="px-4 py-4">{source.leads}</td>
                      <td className="px-4 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded-lg">
                          {source.conversion}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-2 bg-muted rounded-full overflow-hidden w-full max-w-xs">
                          <div
                            className="h-full bg-primary"
                            style={{ width: source.conversion }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Call Reports Tab */}
      {activeTab === "calls" && (
        <div className="bg-card border border-border rounded-2xl p-8 text-center py-20">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="mb-2">Call Reports</h3>
          <p className="text-muted-foreground">Detailed call analytics and performance metrics</p>
        </div>
      )}

      {/* Lead Reports Tab */}
      {activeTab === "leads" && (
        <div className="bg-card border border-border rounded-2xl p-8 text-center py-20">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="mb-2">Lead Reports</h3>
          <p className="text-muted-foreground">Comprehensive lead analysis and insights</p>
        </div>
      )}
    </div>
  );
}
