import Link from "next/link";
import { btnPrimary, pageTitle, wrap } from "./ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className={`${wrap} pb-24 pt-20`}>
      <h1 className={`${pageTitle} mb-4`}>Page not found</h1>
      <p className="mb-8 text-lg text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link href="/" className={btnPrimary}>
        Back to home
      </Link>
    </section>
  );
}
