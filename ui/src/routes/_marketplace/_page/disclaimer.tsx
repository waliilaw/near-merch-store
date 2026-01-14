import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_marketplace/_page/disclaimer")({
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <>
      <h1 className="text-base font-normal mb-2">
        Important Notice – Pilot Use Only
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Please read this disclaimer carefully before using the Merch Store.
      </p>

      <section className="space-y-6">
        <p className="text-muted-foreground">
          This Merch Store is an early-stage pilot and is not intended for production use.
        </p>

        <p className="text-muted-foreground">
          Participation in this pilot is voluntary and at your own risk. The Merch Store is 
          provided on an "as is" and "as available" basis for testing and feedback only.
        </p>

        <p className="text-muted-foreground">
          To the fullest extent permitted by applicable law, NEAR Foundation disclaims all 
          responsibility and liability for any loss or damage related to the use of the store 
          during this pilot phase.
        </p>
      </section>

      <hr className="border-t border-border my-8" />

      <p className="text-muted-foreground">
        Questions or concerns? Contact us at{" "}
        <a
          href="mailto:merch@near.foundation"
          className="text-primary hover:underline"
        >
          merch@near.foundation
        </a>
      </p>
    </>
  );
}
