// components/Navigation.jsx
import { Home, User, Folder, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: User, label: "About" },
    { icon: Folder, label: "Projects" },
    { icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-white/95 backdrop-blur-xl rounded-2xl px-3 py-3 shadow-2xl border border-gray-200/50">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <button
              key={index}
              className={`
                flex items-center justify-center w-14 h-14 rounded-xl mx-1 transition-all duration-300 ease-out
                ${item.active ? "bg-blue-500 text-white shadow-md scale-105" : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"}
              `}
              aria-label={item.label}
            >
              <IconComponent size={22} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
