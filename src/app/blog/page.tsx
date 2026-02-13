import type { Metadata } from "next";
import { blogPosts, blogCategories, siteConfig } from "@/lib/data";
import { getBreadcrumbJsonLd } from "@/lib/jsonLd";
import { BlogListClient } from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog Educativo",
  description:
    "Recursos, consejos y artículos sobre desarrollo del lenguaje, estimulación temprana, crianza respetuosa y más para padres y cuidadores.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog Educativo | TheraKids",
    description:
      "Recursos y consejos para el desarrollo de tus pequeños por el equipo de TheraKids.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Inicio", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ]);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-5 pt-6 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-extrabold text-primary mb-2">
            Blog Educativo
          </h1>
          <p className="text-text-muted text-sm mb-6">
            Recursos y consejos para el desarrollo de tus pequeños.
          </p>
        </div>

        <BlogListClient
          posts={blogPosts}
          categories={blogCategories}
          featuredPost={featuredPost}
        />
      </div>
    </>
  );
}
