import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="px-6 mb-12 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-6">
        <h2 className="font-display font-bold text-2xl text-gray-800">
          Blog Educativo
        </h2>
        <Link href="/blog" className="text-primary text-sm font-semibold">
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-card-light rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-colors duration-300 hover:shadow-md"
          >
            <div className="h-40 w-full overflow-hidden relative">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-primary text-xs font-bold uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display font-bold text-lg text-primary mb-2">
                {post.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400 font-medium">
                  {post.readTime}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-bold text-sm flex items-center gap-1 hover:text-primary-light transition-colors"
                >
                  Leer más
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
