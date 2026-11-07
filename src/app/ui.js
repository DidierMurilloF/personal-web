// Shared class names so buttons, links and headings look the same on every page.

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900";

export const btnSecondary = `inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 w-full md:w-auto ${focusRing}`;

export const btnPrimary = `inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors w-full md:w-auto ${focusRing}`;

export const pageTitle = "mb-6 text-3xl font-bold md:text-4xl";
export const sectionTitle = "mb-4 text-2xl font-bold";

// Until there is a contact email or booking link, CTAs point to LinkedIn.
export const CONTACT_URL = "https://www.linkedin.com/in/damurillof/";
export const GITHUB_URL = "https://github.com/DidierMurilloF";
