import React from "react";
type Stat = {
  icon: string;
  text: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

const MarqueeStats = () => {
  const topRowStats = [
    { icon: "🏆", text: "40+ Clients", bgColor: "bg-amber-50", textColor: "text-amber-700", borderColor: "border-amber-200" },
    { icon: "🕐", text: "10+ Years in Dev", bgColor: "bg-slate-50", textColor: "text-slate-700", borderColor: "border-slate-200" },
    { icon: "📱", text: "15+ Live Apps", bgColor: "bg-green-50", textColor: "text-green-700", borderColor: "border-green-200" },
    { icon: "💻", text: "35+ Websites", bgColor: "bg-gray-50", textColor: "text-gray-700", borderColor: "border-gray-300" },
  ];

  const bottomRowStats = [
    { icon: "⚡", text: "Full Stack Dev", bgColor: "bg-purple-50", textColor: "text-purple-700", borderColor: "border-purple-200" },
    { icon: "🎨", text: "UX Focused", bgColor: "bg-blue-50", textColor: "text-blue-700", borderColor: "border-blue-200" },
    { icon: "📚", text: "API Builder", bgColor: "bg-emerald-50", textColor: "text-emerald-700", borderColor: "border-emerald-200" },
    { icon: "🚀", text: "React Expert", bgColor: "bg-red-50", textColor: "text-red-700", borderColor: "border-red-200" },
    { icon: "✨", text: "Pixel Perfect", bgColor: "bg-orange-50", textColor: "text-orange-700", borderColor: "border-orange-200" },
  ];

  const StatCard = ({ stat }: { stat: Stat }) => (
    <div className={`flex items-center space-x-4 px-8 py-5 rounded-xl ${stat.bgColor} ${stat.textColor} whitespace-nowrap shadow-sm ${stat.borderColor} border flex-shrink-0`}>
      <span className="text-2xl md:text-3xl">{stat.icon}</span>
      <span className="font-semibold text-lg md:text-xl">{stat.text}</span>
    </div>
  );
  

  return (
    <div className="w-full overflow-hidden bg-white py-8 relative">
      <div className="space-y-4">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>

        {/* Top row marquee */}
        <div className="flex animate-marquee-left gap-8">
          {/* Create multiple copies to ensure seamless loop */}
          {[...Array(4)].map((_, setIndex) => topRowStats.map((stat, index) => <StatCard key={`top-${setIndex}-${index}`} stat={stat} />))}
        </div>

        {/* Bottom row marquee (reverse direction) */}
        <div className="flex animate-marquee-right gap-8">
          {/* Create multiple copies to ensure seamless loop */}
          {[...Array(4)].map((_, setIndex) => bottomRowStats.map((stat, index) => <StatCard key={`bottom-${setIndex}-${index}`} stat={stat} />))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
          width: max-content;
        }

        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
          width: max-content;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Ensure smooth performance */
        .animate-marquee-left,
        .animate-marquee-right {
          will-change: transform;
        }

        /* Additional fade effect for better edge masking */
        .w-full.overflow-hidden.bg-white.py-8.relative::before,
        .w-full.overflow-hidden.bg-white.py-8.relative::after {
          content: "";
          position: absolute;
          top: 0;
          height: 100%;
          width: 60px;
          z-index: 30;
          pointer-events: none;
        }

        .w-full.overflow-hidden.bg-white.py-8.relative::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255, 255, 255, 0.8) 60%, transparent 100%);
        }

        .w-full.overflow-hidden.bg-white.py-8.relative::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, #ffffff 20%, rgba(255, 255, 255, 0.8) 60%, transparent 100%);
        }
      `}</style>
    </div>
  );
};

export default MarqueeStats;
