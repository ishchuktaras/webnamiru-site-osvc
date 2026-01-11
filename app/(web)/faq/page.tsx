import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Časté dotazy (FAQ) | webnamiru.site",
  description: "Odpovědi na nejčastější otázky ohledně tvorby webů.",
};

export default async function FAQPage() {
  // ZMĚNA: Předpokládáme, že v databázi jsou pole 'question' a 'answer'
  // Pokud toto zabere, karty se naplní textem.
  const faqs = await client.fetch(
    groq`*[_type == "faq"] | order(poradi asc) {
      _id,
      question,
      answer,
      kategorie
    }`
  );

  return (
    <main className="min-h-screen bg-white">
      <FAQ faqs={faqs} />
    </main>
  );
}