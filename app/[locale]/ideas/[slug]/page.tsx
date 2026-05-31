import { notFound } from "next/navigation";
import { IDEAS } from "@/lib/ideas";
import IdeaPageTemplate from "@/components/ideas/IdeaPageTemplate";

export function generateStaticParams() {
  const locales = ["en", "es"];
  return locales.flatMap((locale) =>
    IDEAS.map((idea) => ({ locale, slug: idea.slug }))
  );
}

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const idea = IDEAS.find((i) => i.slug === slug);
  if (!idea) notFound();
  return <IdeaPageTemplate idea={idea} />;
}
