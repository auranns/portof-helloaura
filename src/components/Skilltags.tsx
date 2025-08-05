// components/SkillsTags.jsx
import { Code, Palette, Settings, Zap, Target } from "lucide-react";

const SkillsTags = () => {
  const skills = [
    {
      icon: Code,
      label: "Full Stack Dev",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-200",
    },
    {
      icon: Palette,
      label: "UX Focused",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      borderColor: "border-blue-200",
    },
    {
      icon: Settings,
      label: "API Builder",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-200",
    },
    {
      icon: Zap,
      label: "React Expert",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-200",
    },
    {
      icon: Target,
      label: "Pixel Perfect",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-200",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div
            key={index}
            className={`
              ${skill.bgColor} ${skill.textColor} ${skill.borderColor}
              flex items-center px-6 py-3 rounded-2xl border-2
              transform hover:scale-105 transition-all duration-300
              shadow-md hover:shadow-lg cursor-pointer
              font-medium text-sm
            `}
          >
            <IconComponent size={18} className="mr-2" />
            {skill.label}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsTags;
