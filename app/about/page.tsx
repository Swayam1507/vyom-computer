import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  BookOpen,
  Building,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Vyom Computer",
  description:
    "Learn about Vyom Computer, our mission, values, and the team behind our government certified programming courses.",
  keywords:
    "about us, coding academy, programming school, tech education, government certified courses",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              About Vyom Computer
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              We're on a mission to transform tech education and help students
              build rewarding careers in programming.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">Established in 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Vyom Computer was founded in 2018 by a group of industry
                veterans who saw a gap between traditional education and the
                skills needed in the tech industry.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started as a small bootcamp with just 15 students has grown
                into a premier programming academy with over 10,000 graduates
                working at top tech companies worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our government certification in 2020 marked a significant
                milestone, validating our curriculum and teaching methods as
                meeting the highest standards in tech education.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to evolve our courses to keep pace with
                industry trends, ensuring our students are always learning the
                most relevant and in-demand skills.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Vyom Computer team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're guided by a clear mission and strong values that shape
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize tech education by providing accessible,
                high-quality, government-certified programming courses that
                prepare students for successful careers in the digital economy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">
                    Make quality tech education accessible to all
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">
                    Bridge the gap between education and industry needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">
                    Empower students to build rewarding careers
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="bg-primary/10 text-primary rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from
                    curriculum design to student support.
                  </p>
                </div>

                <div>
                  <div className="bg-primary/10 text-primary rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Community</h4>
                  <p className="text-muted-foreground">
                    We foster a supportive community where students learn from
                    each other and grow together.
                  </p>
                </div>

                <div>
                  <div className="bg-primary/10 text-primary rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    We continuously innovate our teaching methods and curriculum
                    to stay ahead of industry trends.
                  </p>
                </div>

                <div>
                  <div className="bg-primary/10 text-primary rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                    <Building className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Integrity</h4>
                  <p className="text-muted-foreground">
                    We operate with transparency and honesty in all our
                    interactions with students and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of industry veterans and education experts is
              dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/static/images/about/vandit-barot-profile.png"
                  alt="Vandit Barot"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vandit Barot</h3>
              <p className="text-primary font-medium mb-2">
                Owner & Lead Instructor
              </p>
              <p className="text-muted-foreground">
                Passionate about teaching programming with over a decade of
                experience in managing successful computer classes.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/static/images/about/vaishali-barot-profile.png"
                  alt="Vaishali Barot"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Vaishali Barot</h3>
              <p className="text-primary font-medium mb-2">Instructor</p>
              <p className="text-muted-foreground">
                Experienced instructor specializing in CCC, C programming, and
                DTP.
              </p>
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/team" className="flex items-center gap-2">
                Meet Our Full Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're proud of the impact we've made in tech education over the
              years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 text-center shadow-sm">
              <div className="bg-primary/10 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">
                Comprehensive Courses
              </div>
              <p className="text-lg font-medium">Wide Range of Subjects</p>
              <p className="text-muted-foreground">
                Offering a variety of courses from basic computer skills to
                advanced programming.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 text-center shadow-sm">
              <div className="bg-primary/10 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">
                Experienced Instructors
              </div>
              <p className="text-lg font-medium">Qualified Professionals</p>
              <p className="text-muted-foreground">
                Learn from industry veterans with years of teaching experience.
              </p>
            </div>

            {/* <div className="bg-background rounded-xl p-8 text-center shadow-sm">
              <div className="bg-primary/10 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">Modern Facilities</div>
              <p className="text-lg font-medium">State-of-the-Art Labs</p>
              <p className="text-muted-foreground">
                Equipped with the latest technology to enhance your learning
                experience.
              </p>
            </div> */}

            <div className="bg-background rounded-xl p-8 text-center shadow-sm">
              <div className="bg-primary/10 text-primary rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-1">Certified Programs</div>
              <p className="text-lg font-medium">Recognized Certifications</p>
              <p className="text-muted-foreground">
                Our courses are certified by relevant authorities, ensuring
                quality education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading tech companies to ensure our
              curriculum meets industry needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">Google</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">
                Microsoft
              </p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">Amazon</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">IBM</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">Oracle</p>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg h-24">
              <p className="text-xl font-bold text-muted-foreground">
                Salesforce
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Take the first step toward a rewarding career in tech with our
              government certified courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
