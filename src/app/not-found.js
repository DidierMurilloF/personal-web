import Link from "next/link";
import { btnSecondary, pageTitle } from "./ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <h1 className={pageTitle}>Page not found</h1>
      <p className="mb-6 text-lg">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link href="/" className={btnSecondary}>
        Back to home
      </Link>
    </>
  );
}
