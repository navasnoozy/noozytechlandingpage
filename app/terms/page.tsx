import { LegalDocument } from "@/components/ui/legal-document";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: terms.title,
  description: terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocument document={terms} />;
}
