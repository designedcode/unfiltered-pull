import { faqs } from "@/lib/faq";
import { visibleCategories, services, isCategoryVisible } from "@/lib/services";
import { site } from "@/lib/site";

export function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    sameAs: [site.instagramProfile],
    areaServed: "Worldwide",
    slogan: site.tagline,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function ServicesJsonLd() {
  const visibleServices = services.filter((service) => isCategoryVisible(service.category));
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Unfiltered Pull services",
    numberOfItems: visibleServices.length,
    itemListElement: visibleCategories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.title,
      url: `${site.url}/services/${category.slug}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
