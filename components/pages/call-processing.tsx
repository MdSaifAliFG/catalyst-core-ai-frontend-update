import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Loader2, Phone } from "lucide-react";

export function CallProcessing() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Lead Imported", completed: false },
    { label: "Script Loaded", completed: false },
    { label: "AI Calling Running", completed: false },
    { label: "Conversation Completed", completed: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleSimulateCompletion = () => {
    router.push("/call-summary/1");
  };

  return (
    <div className="min-h-full flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-background dark:to-background">
      <div className="max-w-2xl w-full">
        {/* AI Voice Card */}
        <div className="bg-card border border-border rounded-3xl p-12 text-center mb-8 shadow-xl">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center animate-pulse">
              <Phone className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-ping opacity-20" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-2">AI Voice Agent Active</h2>
          <p className="text-muted-foreground">Processing calls in real-time...</p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">24</div>
              <div className="text-sm text-muted-foreground">Calls Made</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600">18</div>
              <div className="text-sm text-muted-foreground">Connected</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">5</div>
              <div className="text-sm text-muted-foreground">Interested</div>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <div className="bg-card border border-border rounded-3xl p-8">
          <h3 className="mb-6">Status Timeline</h3>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCompleted = index <= currentStep;
              const isCurrent = index === currentStep;

              return (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted
                      ? 'bg-green-500 border-green-500'
                      : 'bg-background border-border'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-muted-foreground animate-spin" />
                    ) : (
                      <div className="w-3 h-3 rounded-full bg-muted" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className={`font-medium transition-colors ${
                      isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </div>
                  </div>

                  {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleSimulateCompletion}
            disabled={currentStep < steps.length - 1}
            className="w-full mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Simulate Call Completion
          </button>
        </div>
      </div>
    </div>
  );
}
