import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Phone, Eye } from "lucide-react";

interface CallRecord {
  id: number;
  customerName: string;
  phoneNumber: string;
  date: string;
  duration: string;
  language: string;
  status: "Completed" | "Missed" | "Busy";
}

export function CallHistory() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const callRecords: CallRecord[] = [
    { id: 1, customerName: "Rahul Sharma", phoneNumber: "+91 9876543210", date: "10 June 2026", duration: "4m 12s", language: "Hindi", status: "Completed" },
    { id: 2, customerName: "Priya Reddy", phoneNumber: "+91 9876543211", date: "10 June 2026", duration: "3m 45s", language: "Telugu", status: "Completed" },
    { id: 3, customerName: "Amit Patel", phoneNumber: "+91 9876543212", date: "10 June 2026", duration: "5m 22s", language: "English", status: "Completed" },
    { id: 4, customerName: "Sneha Kumar", phoneNumber: "+91 9876543213", date: "10 June 2026", duration: "-", language: "Tamil", status: "Missed" },
    { id: 5, customerName: "Vikram Singh", phoneNumber: "+91 9876543214", date: "10 June 2026", duration: "2m 15s", language: "Hindi", status: "Completed" },
    { id: 6, customerName: "Anita Desai", phoneNumber: "+91 9876543215", date: "9 June 2026", duration: "-", language: "English", status: "Busy" },
    { id: 7, customerName: "Rajesh Gupta", phoneNumber: "+91 9876543216", date: "9 June 2026", duration: "6m 33s", language: "Hindi", status: "Completed" },
    { id: 8, customerName: "Meera Nair", phoneNumber: "+91 9876543217", date: "9 June 2026", duration: "4m 01s", language: "Malayalam", status: "Completed" },
    { id: 9, customerName: "Karthik Reddy", phoneNumber: "+91 9876543218", date: "9 June 2026", duration: "3m 28s", language: "Telugu", status: "Completed" },
    { id: 10, customerName: "Divya Iyer", phoneNumber: "+91 9876543219", date: "8 June 2026", duration: "-", language: "Tamil", status: "Missed" },
  ];

  const statusColors = {
    Completed: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
    Missed: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
    Busy: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
  };

  const filteredRecords = callRecords.filter((record) =>
    record.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.phoneNumber.includes(searchQuery)
  );

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Call History</h1>
          <p className="text-muted-foreground mt-1">View all AI-powered customer interactions</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 max-w-md pl-10 pr-4 py-3 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Call History Table */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-accent border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left">Customer Name</th>
                <th className="px-6 py-4 text-left">Phone Number</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Duration</th>
                <th className="px-6 py-4 text-left">Language</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record.id} className="border-b border-border hover:bg-accent/50 transition-colors">
                  <td className="px-6 py-4 font-medium">{record.customerName}</td>
                  <td className="px-6 py-4 text-muted-foreground">{record.phoneNumber}</td>
                  <td className="px-6 py-4 text-muted-foreground">{record.date}</td>
                  <td className="px-6 py-4 text-muted-foreground">{record.duration}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-accent rounded-lg text-sm">{record.language}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-lg text-sm ${statusColors[record.status]}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {record.status === "Completed" && (
                        <>
                          <button
                            onClick={() => router.push(`/call-summary/${record.id}`)}
                            className="p-2 hover:bg-accent rounded-lg transition-colors"
                            title="View Summary"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 hover:bg-accent rounded-lg transition-colors"
                            title="View Recording"
                          >
                            <Phone className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 hover:bg-accent rounded-lg transition-colors"
                            title="View Transcript"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
