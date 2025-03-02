import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CalendarClock,
} from "lucide-react";

export const metadata = {
  title: "Contact Us | Vyom Computer",
  description:
    "Get in touch with Vyom Computer. Contact us for inquiries about our government certified programming courses, admissions, or partnerships.",
  keywords:
    "contact, programming courses, coding bootcamp, tech education, admissions",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-sm:w-[90%]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Have questions about our courses or need more information? We're
              here to help.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">
                We typically respond within 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto max-sm:w-[90%] py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below, and we'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={5} />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Contact Details */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto max-sm:w-[90%] grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">contact@codemaster.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">+1 234 567 890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                39, Punjiram Chambers, Radhanpur Road, Mehsana, Gujarat 384002,
                India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
