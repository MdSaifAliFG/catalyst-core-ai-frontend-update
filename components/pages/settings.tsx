import { useState } from "react";
import { Check, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<"general" | "integrations" | "appearance" | "security">("general");
  const [companyName, setCompanyName] = useState("Catalyst Core AI");
  const [companyEmail, setCompanyEmail] = useState("contact@catalystcore.ai");
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const sessions = [
    { id: 1, device: "Chrome on Windows", location: "Bangalore, India", lastActive: "Active now", current: true },
    { id: 2, device: "Safari on iPhone", location: "Mumbai, India", lastActive: "2 hours ago", current: false },
    { id: 3, device: "Chrome on MacOS", location: "Delhi, India", lastActive: "1 day ago", current: false },
  ];

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account and application preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border overflow-x-auto">
        <button
          onClick={() => setActiveTab("general")}
          className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "general"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          General
        </button>
        <button
          onClick={() => setActiveTab("integrations")}
          className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "integrations"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Integrations
        </button>
        <button
          onClick={() => setActiveTab("appearance")}
          className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "appearance"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Appearance
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "security"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Security
        </button>
      </div>

      {/* General Tab */}
      {activeTab === "general" && (
        <div className="max-w-2xl space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            <div>
              <label htmlFor="company-name" className="block mb-2">Company Name</label>
              <input
                id="company-name"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="company-email" className="block mb-2">Company Email</label>
              <input
                id="company-email"
                type="email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="timezone" className="block mb-2">Timezone</label>
              <select
                id="timezone"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                <option value="America/New_York">America/New York (EST)</option>
                <option value="Europe/London">Europe/London (GMT)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
              </select>
            </div>

            <button className="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform">
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === "integrations" && (
        <div className="max-w-2xl space-y-4">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>CRM API</h3>
                <p className="text-sm text-muted-foreground mt-1">Connect your CRM to sync leads automatically</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded-lg text-sm">
                  Connected
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 border border-destructive text-destructive rounded-xl hover:bg-destructive/10 transition-colors">
                Disconnect
              </button>
              <button className="px-6 py-2 border border-border rounded-xl hover:bg-accent transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>Exotel</h3>
                <p className="text-sm text-muted-foreground mt-1">Telephony service for making calls</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded-lg text-sm">
                  Connected
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 border border-destructive text-destructive rounded-xl hover:bg-destructive/10 transition-colors">
                Disconnect
              </button>
              <button className="px-6 py-2 border border-border rounded-xl hover:bg-accent transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>Google Calendar</h3>
                <p className="text-sm text-muted-foreground mt-1">Sync follow-up schedules with your calendar</p>
              </div>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-lg text-sm">
                Not Connected
              </span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform">
              Connect API
            </button>
          </div>
        </div>
      )}

      {/* Appearance Tab */}
      {activeTab === "appearance" && (
        <div className="max-w-2xl">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Theme</h3>
            <p className="text-sm text-muted-foreground mb-6">Choose how Catalyst Core AI looks to you</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={() => setTheme("light")}
                className={`p-6 border-2 rounded-xl transition-all ${
                  theme === "light"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Sun className="w-6 h-6" />
                  {theme === "light" && <Check className="w-5 h-5 text-primary" />}
                </div>
                <h4>Light Mode</h4>
                <p className="text-sm text-muted-foreground mt-1">Clean and bright interface</p>
              </button>

              <button
                onClick={() => setTheme("dark")}
                className={`p-6 border-2 rounded-xl transition-all ${
                  theme === "dark"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Moon className="w-6 h-6" />
                  {theme === "dark" && <Check className="w-5 h-5 text-primary" />}
                </div>
                <h4>Dark Mode</h4>
                <p className="text-sm text-muted-foreground mt-1">Reduced eye strain at night</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="max-w-2xl space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block mb-2">Current Password</label>
                <input
                  id="current-password"
                  type="password"
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="new-password" className="block mb-2">New Password</label>
                <input
                  id="new-password"
                  type="password"
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2">Confirm New Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform">
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3>Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security to your account</p>
              </div>
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  twoFactorEnabled ? "bg-primary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-4">Session History</h3>
            <div className="space-y-3">
              {sessions.map((session) => (
                <div key={session.id} className="flex items-start justify-between p-4 bg-accent rounded-xl">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {session.device}
                      {session.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300 rounded-lg text-xs">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{session.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{session.lastActive}</p>
                  </div>
                  {!session.current && (
                    <button className="p-2 hover:bg-background rounded-lg transition-colors text-destructive">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
