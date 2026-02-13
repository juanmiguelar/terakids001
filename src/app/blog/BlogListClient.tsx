"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/data";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface BlogListClientProps {
  /** The list of blog posts to display. */
  posts: BlogPost[];
  /** The list of available categories for filtering. */
  categories: string[];
  /** The specific post to highlight as featured. */
  featuredPost: BlogPost;
}

/**
 * Client-side component for the Blog page.
 * Handles interactivity such as category filtering.
 *
 * @param {BlogListClientProps} props - The component props.
 * @returns {JSX.Element} The interactive blog list.
 */
export function BlogListClient({
  posts,
  categories,
  featuredPost,
}: BlogListClientProps) {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts =
    activeCategory === "Todos"
      ? posts.filter((p) => p.id !== featuredPost.id)
      : posts.filter(
          (p) => p.category === activeCategory && p.id !== featuredPost.id
        );

  return (
    <>
      {/* Featured post */}
      <Link
        href={`/blog/${featuredPost.slug}`}
        className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer block mb-8"
      >
        <Image
          src={featuredPost.image}
          alt={featuredPost.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 flex flex-col justify-end">
          <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full w-fit mb-2">
            Destacado
          </span>
          <h2 className="text-white font-display font-bold text-xl leading-tight mb-1">
            {featuredPost.title}
          </h2>
          <p className="text-gray-200 text-xs line-clamp-2">
            {featuredPost.excerpt}
          </p>
        </div>
      </Link>

      {/* Category filter */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-6 hide-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold text-sm transition active:scale-95 ${
              activeCategory === cat
                ? "bg-primary text-white shadow-md"
                : "bg-card-light text-text-muted border border-gray-200 hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        {filteredPosts.map((post) => (
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
                sizes="(max-width: 768px) 100vw, 50vw"
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

      {filteredPosts.length === 0 && (
        <p className="text-center text-text-muted py-12">
          No hay artículos en esta categoría todavía.
        </p>
      )}
    </>
  );
}
