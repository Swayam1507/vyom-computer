import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import blogPosts from "./posts.json";

export const metadata = {
  title: "Blog | Vyom Computer",
  description:
    "Read our latest articles about programming, technology, and career development in tech.",
  keywords:
    "programming blog, tech articles, coding tutorials, career advice, tech education",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Insights, tutorials, and updates from our tech experts
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">
                {blogPosts.length}+ articles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto max-sm:w-[90%]">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {post.date}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/blog/${post.slug}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === "Tutorial")
                  .map((post) => (
                    <Card key={post.slug} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {post.date}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="career" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === "Career")
                  .map((post) => (
                    <Card key={post.slug} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {post.date}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === "News")
                  .map((post) => (
                    <Card key={post.slug} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {post.date}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
