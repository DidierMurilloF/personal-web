import { collab, site } from "@/src/content/site";

// Email link with the consulting subject prefilled; falls back to LinkedIn.
export function contactHref() {
  const { email, linkedin } = site.links;
  return email ? `mailto:${email}?subject=${encodeURIComponent(collab.subject)}` : linkedin;
}
