import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="h-screen flex overflow-hidden bg-slate-950 text-white">

      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 h-screen relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-sky-700 to-blue-950" />

        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">

          <div className="mb-6">
            <h1 className="text-5xl font-bold leading-tight text-white">
              AI Voice Agents
              <br />
              That Convert
            </h1>

            <p className="mt-4 text-base text-sky-100 max-w-lg">
              Human-like conversations that engage leads,
              qualify prospects and automate customer interactions.
            </p>
          </div>

          {/* Voice Wave */}
          <div className="flex items-end gap-1 h-16">
            {[18, 40, 28, 52, 24, 45, 30, 60, 25, 40, 20, 50].map(
              (height, i) => (
                <div
                  key={i}
                  className="w-2 rounded-full bg-gradient-to-t from-blue-500 to-purple-500 animate-pulse"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              )
            )}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-md p-3">
              <div className="text-lg sm:text-xl font-bold">24/7</div>
              <div className="text-xs sm:text-sm text-sky-200">Availability</div>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-md p-3">
              <div className="text-lg sm:text-xl font-bold">100+</div>
              <div className="text-xs sm:text-sm text-sky-200">Languages</div>
            </div>

            <div className="rounded-2xl border border-sky-400/20 bg-slate-900/40 backdrop-blur-md p-3">
              <div className="text-lg sm:text-xl font-bold">AI</div>
              <div className="text-xs sm:text-sm text-sky-200">Automation</div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-6 px-4 lg:px-8 h-screen bg-slate-950 overflow-hidden">

        <div className="w-full max-w-sm">

          {/* Branding */}
<div className="mb-6 text-center">

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Catalyst
            </h1>

            <p className="mt-2 text-xs uppercase tracking-[0.45em] font-semibold text-sky-300">
              AI PLATFORM
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl border border-blue-700/40 bg-slate-900/95 shadow-2xl p-5 max-h-[calc(100vh-6rem)] overflow-hidden">

            <div className="mb-5">
              <h2 className="text-2xl font-bold text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-sky-200">
                Sign in to continue to your workspace
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="text-sm mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="name@example.com"
                  className="w-full h-11 px-4 rounded-2xl border border-blue-700/50 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    placeholder="Enter password"
                    className="w-full h-11 px-4 rounded-2xl border border-blue-700/50 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full h-11 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white font-medium hover:from-blue-500 hover:via-sky-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                Sign In
              </button>

              <div className="relative py-1.5">

                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-card px-3 text-sm text-muted-foreground">
                    OR
                  </span>
                </div>

              </div>

              <button
                type="button"
                className="w-full h-11 rounded-2xl border border-border hover:bg-accent transition-colors"
              >
                Continue with Google
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}