import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  GraduationCap,
  Award,
  Users,
  Clock,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import courses from "./courses/courseList.json";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className="container mx-auto max-sm:w-[90%] relative z-10 py-20 md:py-28 flex flex-col items-center text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Government Certified Programming Courses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
            Launch Your Tech Career with Expert-Led Programming Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Learn in-demand programming skills with our government certified
            courses. Expert instructors, hands-on projects, and job placement
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Vyom Computer?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our government certified courses are designed to give you the
              skills employers are looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Government Certified</CardTitle>
                <CardDescription>
                  All our courses are certified by the government, ensuring
                  quality education and recognition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Nationally recognized certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Approved curriculum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Regular quality audits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expert Instructors</CardTitle>
                <CardDescription>
                  Learn from industry professionals with years of real-world
                  experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Senior developers as instructors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Small class sizes for personalized attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Mentorship throughout your journey</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Job Placement</CardTitle>
                <CardDescription>
                  We help you land your dream job with our extensive industry
                  network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Resume and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Networking events with hiring partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Career counseling and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our most in-demand programming courses designed to help
              you succeed in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses
              .slice(0, 3)
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

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/courses" className="flex items-center gap-2">
                View All Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a beginner or looking to advance your skills, we
              have the right path for you.
            </p>
          </div>

          <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="beginner" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Beginner Path</CardTitle>
                  <CardDescription>
                    Perfect for those with no prior programming experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Introduction to Programming
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Learn the fundamentals of programming logic and
                          problem-solving.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Web Development Basics</h4>
                        <p className="text-sm text-muted-foreground">
                          Master HTML, CSS, and basic JavaScript to build simple
                          websites.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Python Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">
                          Get started with Python programming for various
                          applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/learning-paths/beginner">
                      Explore Beginner Path
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="intermediate" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Intermediate Path</CardTitle>
                  <CardDescription>
                    For those with basic programming knowledge looking to
                    advance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Full Stack Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Build complete web applications with front-end and
                          back-end technologies.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Mobile App Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Create cross-platform mobile applications using modern
                          frameworks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Database Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Learn SQL and NoSQL database design and
                          implementation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/learning-paths/intermediate">
                      Explore Intermediate Path
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="advanced" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Path</CardTitle>
                  <CardDescription>
                    For experienced developers looking to master specialized
                    skills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Data Science & Machine Learning
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Master advanced data analysis and machine learning
                          algorithms.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Cloud Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Design and implement scalable cloud solutions on AWS,
                          Azure, and GCP.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 text-primary rounded-full p-2">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">DevOps & CI/CD</h4>
                        <p className="text-sm text-muted-foreground">
                          Learn automation, containerization, and continuous
                          integration practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/learning-paths/advanced">
                      Explore Advanced Path
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who have successfully launched their
              careers in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>
                      Full Stack Developer at TechCorp
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The Full Stack Web Development course completely changed my
                  career path. The instructors were knowledgeable and
                  supportive, and the curriculum was up-to-date with industry
                  standards. I landed a job within a month of graduating!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>
                      Data Scientist at AnalyticsPro
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The Data Science course was comprehensive and challenging in
                  the best way. The hands-on projects helped me build a strong
                  portfolio that impressed employers. The career support team
                  was instrumental in helping me find my current position."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                      alt="Priya Patel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Priya Patel</CardTitle>
                    <CardDescription>
                      Mobile Developer at AppWorks
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "I had no prior programming experience when I started the
                  Mobile App Development course. The step-by-step approach made
                  learning accessible, and the mentorship was invaluable. Now
                  I'm building apps that millions of people use!"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/success-stories" className="flex items-center gap-2">
                Read More Success Stories
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Enroll in our government certified programming courses and take
              the first step toward a rewarding career in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
                asChild
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
