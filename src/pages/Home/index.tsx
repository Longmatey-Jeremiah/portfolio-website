import { ArrowRight, Play, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

const Firefly: React.FC<{
  delay: number;
  duration: number;
  x: number;
  y: number;
  color: string;
  floatDuration: number;
}> = ({ delay, duration, x, y, color, floatDuration }) => {
  const floatKeyframes = `
    @keyframes float-${Math.random().toString(36).substr(2, 9)} {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(${Math.random() * 20 - 10}px, ${
    Math.random() * 20 - 10
  }px); }
      50% { transform: translate(${Math.random() * 30 - 15}px, ${
    Math.random() * 30 - 15
  }px); }
      75% { transform: translate(${Math.random() * 20 - 10}px, ${
    Math.random() * 20 - 10
  }px); }
    }
  `;

  return (
    <>
      <style>{floatKeyframes}</style>
      <div
        className="absolute w-1 h-1 rounded-full animate-pulse"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          backgroundColor: color,
          boxShadow: `0 0 6px 2px ${color}80`,
          animation: `pulse ${duration}s ease-in-out infinite ${delay}s, float-${Math.random()
            .toString(36)
            .substr(2, 9)} ${floatDuration}s ease-in-out infinite ${delay}s`,
        }}
      />
    </>
  );
};

const HeroSection: React.FC = () => {
  const fireflyColors = [
    "#06b6d4",
    "#3b82f6",
    "#10b981",
    "#0891b2",
    "#0ea5e9",
    "#14b8a6",
  ];

  const fireflies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: fireflyColors[Math.floor(Math.random() * fireflyColors.length)],
    floatDuration: 8 + Math.random() * 12, // 8-20 seconds for floating movement
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden w-full">
      {/* Firefly Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {fireflies.map((firefly) => (
          <Firefly
            key={firefly.id}
            delay={firefly.delay}
            duration={firefly.duration}
            x={firefly.x}
            y={firefly.y}
            color={firefly.color}
            floatDuration={firefly.floatDuration}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        {/* Additional vibrant elements */}
        <div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-200/30 to-red-300/30 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-32 pb-24">
        <div className="text-center mb-16">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-pulse">
              Inventory with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Streamline your business operations with intelligent inventory
            management. Reduce costs by 85% and boost efficiency with AI-powered
            insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Link to="/">
              <Button
                size="lg"
                className="text-base px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 text-white border-0"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-6 py-4 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              >
                Watch Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-32">
            <div className="flex items-center">
              <div className="flex -space-x-1 mr-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-cyan-500/25"
                  >
                    <Users className="h-3 w-3 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-gray-600">10,000+ users</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1 drop-shadow-lg" />
              <span className="text-gray-600">4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Safari Browser Preview - Centered Below */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Safari Browser Container */}
            <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden scale-125 shadow-2xl shadow-gray-200/50">
              {/* Safari Browser Header */}
              <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-3 flex items-center justify-between border-b border-gray-200">
                {/* Traffic Light Buttons */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                  </div>
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-2xl mx-4">
                  <div className="bg-white rounded-lg px-4 py-2 text-xs text-gray-700 border border-gray-300 flex items-center shadow-sm">
                    <div className="w-3 h-3 mr-2 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                    </div>
                    <span className="text-gray-600">
                      papermap.com/dashboard
                    </span>
                    <div className="ml-auto w-3 h-3 text-gray-400">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Safari Controls */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Screenshot Container */}
              <div className="relative bg-gray-50 h-[600px] flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg font-medium">
                      Dashboard Preview
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Interactive AI-powered interface
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
