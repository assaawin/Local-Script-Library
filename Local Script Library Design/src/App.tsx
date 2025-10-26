import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { BrowsePage } from "./components/BrowsePage";
import { ScriptDetailPage } from "./components/ScriptDetailPage";
import { SubmitPage } from "./components/SubmitPage";
import { ProfilePage } from "./components/ProfilePage";
import { CommunityPage } from "./components/CommunityPage";
import { AuthDialog } from "./components/AuthDialog";
import { Toaster } from "./components/ui/sonner";

type Page = "home" | "browse" | "submit" | "profile" | "community" | "script-detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedScriptId, setSelectedScriptId] = useState<string | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const handleViewScript = (scriptId: string) => {
    setSelectedScriptId(scriptId);
    setCurrentPage("script-detail");
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={handleNavigate} onViewScript={handleViewScript} />;
      case "browse":
        return <BrowsePage onViewScript={handleViewScript} />;
      case "script-detail":
        return selectedScriptId ? (
          <ScriptDetailPage
            scriptId={selectedScriptId}
            onBack={() => setCurrentPage("browse")}
          />
        ) : (
          <LandingPage onNavigate={handleNavigate} onViewScript={handleViewScript} />
        );
      case "submit":
        return <SubmitPage onNavigate={handleNavigate} />;
      case "profile":
        return <ProfilePage onViewScript={handleViewScript} />;
      case "community":
        return <CommunityPage />;
      default:
        return <LandingPage onNavigate={handleNavigate} onViewScript={handleViewScript} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthDialogOpen(true)}
        isLoggedIn={isLoggedIn}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer />

      <AuthDialog
        open={isAuthDialogOpen}
        onOpenChange={setIsAuthDialogOpen}
        onLogin={handleLogin}
      />

      <Toaster />
    </div>
  );
}
