import { TrendingUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted">
          <TrendingUp className="h-4 w-4 text-accent" />
          <span>PaperTownResearch Capital</span>
        </div>
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
