import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediLink — Hospital Records & Intelligent Referral System" },
      {
        name: "description",
        content:
          "Centralized hospital records, AI symptom guidance, referrals, risk scoring and analytics in one system.",
      },
      { property: "og:title", content: "MediLink — Hospital Records & Referral System" },
      {
        property: "og:description",
        content:
          "One patient, one record: symptoms, appointments, referrals, reports and risk analysis across every department.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/hospital/index.html"
      title="MediLink Hospital Records & Intelligent Referral System"
      allow="camera; microphone; fullscreen; display-capture; autoplay"
      style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
    />
  );
}
