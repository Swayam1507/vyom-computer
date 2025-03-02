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
import { Users, Clock, Search, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import courses from "./courseList.json";
import courseTabs from "./courseTabs.json";

const courseKeywords = Array.from(
  new Set(courses.flatMap((course) => course.tags))
).join(", ");

export const metadata = {
  title: "Programming Courses | Vyom Computer",
  description:
    "Explore our wide range of government certified programming courses. Whether you're a beginner or an advanced learner, we have the right course to help you achieve your career goals.",
  keywords: `programming courses, coding bootcamp, ${courseKeywords}`,
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Government Certified Programming Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Browse our comprehensive selection of programming courses designed
              to help you launch or advance your tech career.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">
                50+ courses available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      {/* <section className="py-8 border-b">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search courses..." className="pl-10" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Filter by:</span>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="data">Data Science</SelectItem>
                  <SelectItem value="cloud">Cloud Computing</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="popular">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section> */}

      {/* Course Categories */}
      <section className="py-12">
        <div className="container mx-auto max-sm:w-[90%]">
          <Tabs defaultValue="all" className="w-full">
            {/* <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-2"> */}
            <TabsList className="w-full h-full max-w-3xl mx-auto grid grid-cols-3 md:grid-cols-6">
              {/* <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger> */}
              {courseTabs.map(({ value, show }) => (
                <TabsTrigger key={value + show} value={value}>
                  {show}
                </TabsTrigger>
              ))}
            </TabsList>

            {courseTabs.map(({ value, show }) => (
              <TabsContent key={value + show} value={value} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses
                    .filter(({ tags }) => {
                      // To show all the courses inside "all" tab
                      if (value === "all") {
                        return true;
                      }
                      return tags.includes(value);
                    })
                    .map(
                      ({
                        title,
                        image,
                        badge,
                        duration,
                        description,
                        students,
                        hours,
                        topics,
                        price,
                        nextBatch,
                        link,
                        tags,
                      }) => (
                        <Card key={link + title} className="overflow-hidden">
                          <div className="relative h-48">
                            <Image
                              src={image}
                              alt={title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                              <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
                                {badge}
                              </span>
                              <span className="text-muted-foreground text-sm">
                                {duration}
                              </span>
                            </div>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 mb-4">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {students}
                              </span>
                              <Clock className="h-4 w-4 text-muted-foreground ml-4" />
                              <span className="text-sm text-muted-foreground">
                                {hours}
                              </span>
                            </div>
                            {/* <ul className="space-y-1 mb-4">
                              {topics.map((topic) => (
                                <li className="text-sm" key={topic}>
                                  {topic}
                                </li>
                              ))}
                            </ul> */}
                            <div className="flex justify-between items-center">
                              <div className="font-bold text-lg">{price}</div>
                              <div className="text-sm text-muted-foreground">
                                {nextBatch}
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button className="w-full" asChild>
                              <Link href={link}>View Course</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      )
                    )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Are these courses really government certified?
                </h3>
                <p className="text-muted-foreground">
                  Yes, all our courses are certified by the government's
                  National Skill Development Corporation (NSDC) and follow
                  industry-approved curriculum standards.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  What are the prerequisites for joining these courses?
                </h3>
                <p className="text-muted-foreground">
                  Prerequisites vary by course. Beginner courses have no
                  specific requirements, while intermediate and advanced courses
                  may require basic programming knowledge or specific skills.
                  Check individual course pages for details.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Do you offer job placement assistance?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive job placement assistance
                  including resume building, interview preparation, and
                  connections with our hiring partners. Our placement rate is
                  over 95%.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Can I pay in installments?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible payment plans. You can pay in 3-6
                  monthly installments depending on the course. We also offer
                  scholarships for deserving candidates.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-primary font-medium hover:underline"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join thousands of successful graduates who have transformed
                their careers with our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent"
                  asChild
                >
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
