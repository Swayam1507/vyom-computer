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
  Code,
  ChevronRight,
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
import { Separator } from "@/components/ui/separator";
const learningPaths = [
  {
    value: "beginner",
    title: "Beginner Path",
    description: "For those with no prior programming experience.",
    courses: [
      {
        icon: GraduationCap,
        title: "CCC - Course on Computer Concepts",
        description: "Essential computer skills with certification.",
        link: "/courses/ccc-government-certified",
      },
      {
        icon: GraduationCap,
        title: "HTML & DHTML",
        description: "Build and style web pages using HTML and DHTML.",
        link: "/courses/html-dhtml",
      },
      {
        icon: GraduationCap,
        title: "C Language",
        description: "Fundamentals of programming with C.",
        link: "/courses/c-language",
      },
      {
        icon: GraduationCap,
        title: "Tally ERP 9 with GST",
        description: "Learn Tally ERP 9 with GST for accounting.",
        link: "/courses/tally-erp9-gst",
      },
    ],
    link: "/learning-paths/beginner",
  },
  {
    value: "intermediate",
    title: "Intermediate Path",
    description: "For those with basic programming knowledge.",
    courses: [
      {
        icon: GraduationCap,
        title: "Expert in Python Programming",
        description: "Master Python with hands-on projects.",
        link: "/courses/expert-python-programming",
      },
      {
        icon: GraduationCap,
        title: "C++ Language",
        description: "Object-Oriented Programming with C++.",
        link: "/courses/cpp-language",
      },
      {
        icon: GraduationCap,
        title: "Diploma in Computer Application (DCA)",
        description: "Comprehensive course in computer applications.",
        link: "/courses/diploma-computer-application",
      },
      {
        icon: GraduationCap,
        title: "Diploma in Hardware & Networking",
        description: "Learn hardware and networking skills.",
        link: "/courses/diploma-hardware-networking",
      },
    ],
    link: "/learning-paths/intermediate",
  },
  {
    value: "advanced",
    title: "Advanced Path",
    description: "For experienced developers mastering specialized skills.",
    courses: [
      {
        icon: GraduationCap,
        title: "Expert in Ethical Hacking",
        description: "Become an expert in ethical hacking.",
        link: "/courses/expert-ethical-hacking",
      },
      {
        icon: GraduationCap,
        title: "Expert in Network Pentest (CENP)",
        description: "Master network penetration testing.",
        link: "/courses/expert-network-pentest",
      },
      {
        icon: GraduationCap,
        title: "Expert in Web Pentest (CEWP)",
        description: "Gain expertise in web penetration testing.",
        link: "/courses/expert-web-pentest",
      },
      {
        icon: GraduationCap,
        title: "DTP - Desktop Publishing Course",
        description: "Learn desktop publishing skills.",
        link: "/courses/dtp-government-certified",
      },
      {
        icon: GraduationCap,
        title: "CCC+ - Advanced Course on Computer Concepts",
        description: "Advanced computer skills with certification.",
        link: "/courses/ccc-plus-government-certified",
      },
    ],
    link: "/learning-paths/advanced",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative">
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
      </section> */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>

        {/* Animated Code Particles */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-[30%] left-1/4 text-primary animate-pulse">
            <Code size={64} />
          </div>
          <div
            className="absolute top-1/3 right-1/4 text-primary animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <Code size={48} />
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 text-primary animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            <Code size={56} />
          </div>
          <div
            className="absolute top-2/3 right-1/3 text-primary animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            <Code size={40} />
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Main Content */}
        <div className="container mx-auto max-sm:w-[90%] relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                <span>Government Certified Courses</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Start Your <span className="text-primary">Tech Journey</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Learn in-demand programming skills with our government certified
                courses. Expert instructors, hands-on projects, and job
                placement assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="group" asChild>
                  <Link href="/courses" className="flex items-center gap-2">
                    Explore Courses
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span>Join 10,000+ successful graduates</span>
              </div>
            </div>

            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-muted">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Students learning programming"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stats Cards */}
              <div
                className="absolute -top-6 -left-6 bg-background rounded-lg p-4 shadow-lg border border-muted z-20 animate-bounce"
                style={{ animationDuration: "5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-xs text-muted-foreground">
                      Students
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-background rounded-lg p-4 shadow-lg border border-muted z-20 animate-bounce"
                style={{ animationDuration: "6s", animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs text-muted-foreground">
                      Placement Rate
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-muted-foreground text-center">Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">10k+</div>
              <div className="text-muted-foreground text-center">Students</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-muted-foreground text-center">
                Placement Rate
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-muted-foreground text-center">
                Satisfaction
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          {/* <div className="mt-16 pt-8 border-t">
            <p className="text-center text-sm text-muted-foreground mb-6">
              TRUSTED BY LEADING COMPANIES
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-xl font-bold text-muted-foreground/70">
                Google
              </div>
              <div className="text-xl font-bold text-muted-foreground/70">
                Microsoft
              </div>
              <div className="text-xl font-bold text-muted-foreground/70">
                Amazon
              </div>
              <div className="text-xl font-bold text-muted-foreground/70">
                IBM
              </div>
              <div className="text-xl font-bold text-muted-foreground/70">
                Oracle
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Separator />

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
              {learningPaths.map((path) => (
                <TabsTrigger key={path.value} value={path.value}>
                  {path.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            {learningPaths.map((path) => (
              <TabsContent key={path.value} value={path.value} className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {path.courses.map((course, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="bg-primary/10 text-primary rounded-full p-2">
                            <course.icon className="h-5 w-5" />
                          </div>
                          <Link href={course.link}>
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {course.description}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  {/* <CardFooter>
                    <Button asChild>
                      <Link href={path.link}>Explore {path.title}</Link>
                    </Button>
                  </CardFooter> */}
                </Card>
              </TabsContent>
            ))}
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
                      src="https://images.pexels.com/photos/20542649/pexels-photo-20542649/free-photo-of-picture-of-a-male-model.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Aarav Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Aarav Sharma</CardTitle>
                    <CardDescription>
                      Software Developer at Infosys
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The C and C++ courses at Vyom Computer were fantastic. The
                  instructors were very knowledgeable and the hands-on projects
                  helped me understand the concepts thoroughly. I secured a job
                  at Infosys right after completing the course."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                      alt="Neha Gupta"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Neha Gupta</CardTitle>
                    <CardDescription>Web Developer at TCS</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "I took the HTML, CSS, and JavaScript courses at Vyom
                  Computer. The curriculum was up-to-date and the instructors
                  were very supportive. The skills I learned helped me land a
                  web developer position at TCS."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      // src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                      src="https://images.pexels.com/photos/17394327/pexels-photo-17394327/free-photo-of-portrait-of-man-wearing-glasses-and-blue-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Rohan Verma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rohan Verma</CardTitle>
                    <CardDescription>Ethical Hacker at Wipro</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">
                  "The Ethical Hacking course at Vyom Computer was a
                  game-changer for me. The practical approach and real-world
                  scenarios prepared me well for my job at Wipro. I highly
                  recommend this course to anyone interested in cybersecurity."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* <div className="mt-12 text-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/success-stories" className="flex items-center gap-2">
        Read More Success Stories
        <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
          </div> */}
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
