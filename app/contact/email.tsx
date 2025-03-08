"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

const Email: React.FC = () => {
  // Create a reference for the form
  const formRef = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Success!");
  const [description, setDescription] = useState("Email sent successfully!");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const timeout = useRef<NodeJS.Timeout>();

  // EmailJS submission handler
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    const formErrors: { [key: string]: string } = {};
    const formData = new FormData(formRef.current);
    if (!formData.get("user_name")) {
      formErrors.user_name = "Name is required";
    }
    if (!formData.get("user_phone")) {
      formErrors.user_phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.get("user_phone") as string)) {
      formErrors.user_phone = "Phone number must be 10 digits";
    }
    if (!formData.get("message")) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS values.
    emailjs
      .sendForm(
        "service_k9uwezv",
        "template_crphejc",
        formRef.current,
        "vDaCOg4SAANFhg4s0"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setTitle("Success!");
          setDescription("Email sent successfully!");
          setOpen(false);
          setLoading(false);
          setTimeout(() => {
            setOpen(true);
          }, 100);

          // Optionally show a success message or perform additional actions here.
        },
        (error) => {
          setTitle("Error!");
          setDescription(error.text);
          setOpen(false);
          setLoading(false);
          setTimeout(() => {
            setOpen(true);
          }, 100);
          console.error("There was an error sending the email:", error.text);
          // Optionally handle errors here.
        }
      );

    (e.target as HTMLFormElement).reset(); // Reset the form after submission
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmail}>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below, and we'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Note: Ensure that the "name" attribute matches the field names in your EmailJS template */}
              <div>
                <Input
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className={
                    errors.user_name
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }
                />
                {errors.user_name && (
                  <p className="text-red-500 text-sm ml-2 mt-1">
                    {errors.user_name}
                  </p>
                )}
              </div>
              <div>
                <Input
                  name="user_phone"
                  type="tel"
                  placeholder="Your Contact No."
                  className={
                    errors.user_phone
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }
                />
                {errors.user_phone && (
                  <p className="text-red-500 text-sm ml-2 mt-1">
                    {errors.user_phone}
                  </p>
                )}
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className={
                    errors.message
                      ? "border-red-500 placeholder:text-red-500"
                      : ""
                  }
                />
                {errors.message && (
                  <p className="text-red-500 text-sm ml-2 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Loading..." : "Send Message"}
            </Button>
          </CardFooter>
        </Card>
      </form>
      <ToastProvider swipeDirection="right" duration={100000}>
        <Toast className="ToastRoot" open={open} onOpenChange={setOpen}>
          <ToastTitle className="ToastTitle">{title}</ToastTitle>
          <ToastDescription>
            <div>{description}</div>
          </ToastDescription>
          <ToastAction
            className="ToastAction"
            asChild
            altText="Goto schedule to undo"
          >
            <button className="Button small green">X</button>
          </ToastAction>
        </Toast>
        <ToastViewport className="ToastViewport" />
      </ToastProvider>
    </>
  );
};

export default Email;
