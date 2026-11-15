import { site } from "@/src/content/site";
import { resume } from "@/src/content/resume";

// Page metadata with a canonical URL and og:url. Pages that set `openGraph`
// replace the layout's, so the shared fields are repeated here.
export function pageMetadata({ path, title, description }) {
  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: path,
      images: ["/didier-profile.jpeg"],
    },
  };
}

const abs = (path) => new URL(path, site.url).toString();

// schema.org Person: helps search engines connect the name to the role,
// education and profiles.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    url: site.url,
    image: abs("/didier-profile.jpeg"),
    jobTitle: resume.headline,
    description: site.description,
    worksFor: { "@type": "CollegeOrUniversity", name: "North Dakota State University" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Puerto Rico, Mayagüez" },
      { "@type": "CollegeOrUniversity", name: "University of Tolima" },
    ],
    address: { "@type": "PostalAddress", addressLocality: "Fargo", addressRegion: "ND", addressCountry: "US" },
    knowsAbout: [
      "Agricultural data science",
      "Genomic prediction",
      "Phenomic prediction",
      "Plant breeding",
      "Experimental design",
      "Linear mixed models",
      "Spatial analysis of field trials",
      "Satellite crop monitoring",
      "Machine learning",
      "R Shiny",
    ],
    sameAs: [site.links.linkedin, site.links.github],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": `${site.url}/#person` },
  };
}

export function articleJsonLd(post) {
  const url = abs(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    url,
    mainEntityOfPage: url,
    image: abs(post.cover ?? "/didier-profile.jpeg"),
    keywords: post.tags.join(", "),
    author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url },
  };
}

// Renders JSON-LD safely (no "</script>" breakouts).
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
