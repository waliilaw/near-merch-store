import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MarketplaceHeader } from "@/components/marketplace-header";
import { MarketplaceFooter } from "@/components/marketplace-footer";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const Route = createFileRoute("/_marketplace")({
  component: MarketplaceLayout,
});

function MarketplaceLayout() {
  return (
    <div className="bg-background min-h-screen w-full">
      <DisclaimerBanner />
      <MarketplaceHeader />

      <main>
        <Outlet />
      </main>

      <MarketplaceFooter />
    </div>
  );
}
