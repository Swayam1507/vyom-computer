import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";
import courses from "../courseList.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: course.link.replace("/courses/", ""),
  }));
}

export function generateMetadata({ params }: any) {
  const course = courses.find((c) => c.link === `/courses/${params.courseId}`);
  return {
    title: `${course?.title} | Vyom Computer`,
    description: course?.description || "Detailed course information.",
    keywords: [
      "programming courses",
      "coding bootcamp",
      "web development",
      "data science",
      course?.title,
    ].join(", "),
  };
}

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string };
}) {
  const courseId = params.courseId;
  const course = courses.find((c) => c.link === `/courses/${courseId}`);

  if (!course) {
    return (
      <p className="text-center text-red-500 dark:text-red-400">
        Course not found.
      </p>
    );
  }

  return (
    <div className="my-8 border p-6 w-[90%] sm:max-w-[900px] mx-auto bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {course.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {course.description}
      </p>

      {/* <div className="relative h-60 mt-4">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div> */}

      <div className="flex items-center gap-2 mt-4">
        <Users className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
        <span className="text-sm text-muted-foreground dark:text-gray-400">
          {course.students}
        </span>
        <Clock className="h-4 w-4 text-muted-foreground dark:text-gray-400 ml-4" />
        <span className="text-sm text-muted-foreground dark:text-gray-400">
          {course.hours}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Duration:</span> {course.duration}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-green-600 font-bold">{course.price}</span>
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          What you'll learn
        </h2>
        <Accordion type="single" defaultValue={course.content[0].topic}>
          {course.content.map((section, index) => (
            <AccordionItem key={index} value={section.topic}>
              <AccordionTrigger className={index === 0 ? "!pt-2" : ""}>
                {section.topic}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {section.subtopics.map((subtopic, index) => (
                    <li key={index}>{subtopic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-6">
        <Button asChild>
          <a href="/contact">Enroll Now</a>
        </Button>
      </div>
    </div>
  );
}
