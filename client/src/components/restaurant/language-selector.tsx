import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
    setIsOpen(false);
    localStorage.setItem("preferredLanguage", code);
  };

  const current = languages.find(l => l.code === currentLanguage);

  return (
    <div className="relative" data-testid="container-language-selector">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
        data-testid="button-language-toggle"
      >
        <Globe className="w-4 h-4" />
        <span>{current?.flag} {current?.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-card border rounded-lg shadow-lg z-50 min-w-max" data-testid="dropdown-languages">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start rounded-none"
              onClick={() => handleLanguageChange(lang.code)}
              data-testid={`button-lang-${lang.code}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
