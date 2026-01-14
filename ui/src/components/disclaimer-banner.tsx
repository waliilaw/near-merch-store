import { Link } from "@tanstack/react-router";

export function DisclaimerBanner() {
  return (
    <div className="bg-destructive text-white sticky top-0 z-50 px-4 py-2 text-center text-sm animate-in slide-in-from-top duration-500">
      <span className="font-medium">⚠️ Pilot Use Only</span>
      <span className="hidden sm:inline"> – This store is in early testing.</span>{" "}
      <Link to="/disclaimer" className="underline hover:no-underline">
        Learn more
      </Link>
    </div>
  );
}
