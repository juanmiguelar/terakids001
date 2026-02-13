import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, siteConfig } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getBlogPostJsonLd, getBreadcrumbJsonLd } from "@/lib/jsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("es-CR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderMarkdown(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("### ")) {
        return `<h3 class="text-lg font-display font-bold text-gray-800 mt-6 mb-2">${block.slice(4)}</h3>`;
      }
      if (block.startsWith("## ")) {
        return `<h2 class="text-xl font-display font-bold text-primary mt-8 mb-3">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map(
            (l) => `<li class="ml-4">${l.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`
          )
          .join("");
        return `<ul class="list-disc pl-4 space-y-1 text-text-muted">${items}</ul>`;
      }
      if (/^\d+\.\s/.test(block)) {
        const items = block
          .split("\n")
          .filter((l) => /^\d+\.\s/.test(l))
          .map(
            (l) =>
              `<li class="ml-4">${l.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`
          )
          .join("");
        return `<ol class="list-decimal pl-4 space-y-1 text-text-muted">${items}</ol>`;
      }
      return `<p class="text-text-muted leading-relaxed">${block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-text-main'>$1</strong>")}</p>`;
    })
    .join("");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const allRelated =
    relatedPosts.length < 2
      ? [
          ...relatedPosts,
          ...blogPosts
            .filter(
              (p) =>
                p.id !== post.id &&
                !relatedPosts.find((r) => r.id === p.id)
            )
            .slice(0, 2 - relatedPosts.length),
        ]
      : relatedPosts;

  const postJsonLd = getBlogPostJsonLd(post);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Inicio", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-5 pt-6 pb-12">
        {/* Breadcrumbs */}
        <nav aria-label="Ruta de navegación" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <MaterialIcon name="chevron_right" className="text-sm" />
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <MaterialIcon name="chevron_right" className="text-sm" />
            </li>
            <li className="text-primary font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span>Por {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-purple max-w-none space-y-4"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* Share buttons */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm font-bold text-text-main mb-3">
            Compartir este artículo
          </p>
          <div className="flex gap-3">

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Compartir en X (Twitter)"
            >
              <span className="text-sm font-bold">X</span>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${siteConfig.url}/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              aria-label="Compartir por WhatsApp"
            >
              <MaterialIcon name="chat" className="text-sm" />
            </a>
          </div>
        </div>

        {/* Related posts */}
        {allRelated.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-display font-bold text-primary mb-6">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allRelated.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="bg-card-light rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="h-32 w-full overflow-hidden relative">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-bold uppercase">
                      {related.category}
                    </span>
                    <h3 className="font-display font-bold text-sm text-text-main mt-1">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
