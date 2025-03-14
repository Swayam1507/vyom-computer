import Link from "next/link";
import { Code2 } from "lucide-react";
import courses from "@/app/courses/courseList.json";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-sm:w-[90%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Vyom Computer</span>
            </div>
            <p className="text-muted-foreground">
              Providing government certified programming courses to help you
              launch your tech career.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.slice(0, 4).map((course) => (
                <li key={course.link}>
                  <Link
                    href={course.link}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>Vyom Computer</p>
              <p>39, Punjiram Chambers,</p>
              <p>Radhanpur Road, Mehsana,</p>
              <p>Gujarat 384002, India.</p>
              <p>
                <Link
                  className="text-muted-foreground underline"
                  href={"tel:+917777983678"}
                >
                  +91 77779 83678
                </Link>
              </p>
              <p>
                <Link
                  className="text-darkgray underline"
                  href={"mailto:vyomcomputergujarat@gmail.com"}
                >
                  vyomcomputergujarat@gmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vyom Computer. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link> */}
            <Link
              href="/sitemap"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vyom Computer. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/sitemap"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sitemap
          </Link>
        </div>
      </div> */}
    </footer>
  );
}
