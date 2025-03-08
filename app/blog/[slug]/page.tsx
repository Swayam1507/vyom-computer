import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import blogPosts from "../posts.json";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: `${post?.title} | Vyom Computer Blog`,
    description: post?.excerpt,
    keywords: post?.tags.join(", "),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container mx-auto max-sm:w-[90%] py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-12">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted px-2.5 py-0.5 rounded-full text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto max-sm:w-[90%]">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(
                (p) => p.slug !== post.slug && p.category === post.category
              )
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
