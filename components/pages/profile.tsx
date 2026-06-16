'use client';

import { useState } from "react";
import { Camera, Phone, Mail, Briefcase, Building, Calendar } from "lucide-react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@catalystcore.ai",
    mobile: "+91 9876543210",
    designation: "Sales Manager",
    companyName: "Catalyst Core AI",
  });

  const recentActivities = [
    { id: 1, text: "Generated weekly performance report", time: "2 hours ago", icon: "📊" },
    { id: 2, text: "Reviewed call summary for Rahul Sharma", time: "4 hours ago", icon: "📞" },
    { id: 3, text: "Updated lead stage for 5 leads", time: "Yesterday", icon: "📋" },
    { id: 4, text: "Uploaded new lead file - 50 leads", time: "2 days ago", icon: "📁" },
    { id: 5, text: "Started AI calling campaign", time: "3 days ago", icon: "🤖" },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">My Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 sm:gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Avatar and Basic Info */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-start gap-3 sm:gap-4 sm:gap-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 text-3xl font-medium">
                  JD
                </div>

                <button className="absolute bottom-1 right-1 p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-200">
                  <Camera className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                </button>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{formData.fullName}</h2>
                <p className="text-muted-foreground mb-1">{formData.designation}</p>
                <p className="text-sm text-muted-foreground">{formData.companyName}</p>

                <div className="flex gap-3 mt-4">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:scale-102 transition-transform"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border border-border rounded-xl hover:bg-accent transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Profile Details</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block mb-2">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="designation" className="block mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Designation
                </label>
                <input
                  id="designation"
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-6">Account Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">385</div>
                <div className="text-sm text-muted-foreground mt-1">Calls Made</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-green-600">112</div>
                <div className="text-sm text-muted-foreground mt-1">Interested</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">48</div>
                <div className="text-sm text-muted-foreground mt-1">Follow-ups</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-xl">
                <div className="text-xl sm:text-2xl font-bold text-orange-600">15</div>
                <div className="text-sm text-muted-foreground mt-1">Closed Won</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Recent Activities */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex gap-3 p-3 hover:bg-accent rounded-xl transition-colors">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="mb-6">Account Information</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Member Since</div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 2026</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Plan</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-slate-950 to-slate-800 text-white rounded-lg text-sm">
                    Professional
                  </span>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
