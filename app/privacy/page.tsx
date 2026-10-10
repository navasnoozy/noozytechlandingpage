import { LegalDocument } from "@/components/ui/legal-document";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: privacy.title,
  description: privacy.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalDocument document={privacy} />;
}
