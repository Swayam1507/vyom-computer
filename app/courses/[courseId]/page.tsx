import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock } from "lucide-react";
import courses from "../courseList.json";

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
    return <p className="text-center text-red-500">Course not found.</p>;
  }

  return (
    <div className="my-8 border p-6 w-[90%] sm:max-w-[900px] mx-auto bg-white shadow-sm rounded-xl">
      <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      {/* <div className="relative h-60 mt-4">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div> */}

      <div className="flex items-center gap-2 mt-4">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{course.students}</span>
        <Clock className="h-4 w-4 text-muted-foreground ml-4" />
        <span className="text-sm text-muted-foreground">{course.hours}</span>
      </div>

      {/* <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Duration:</span> {course.duration}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Price:</span>{" "}
          <span className="text-green-600 font-bold">{course.price}</span>
        </p>
      </div> */}

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">Syllabus</h2>
        <ul className="list-disc list-inside text-gray-700">
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Button asChild>
          <a href="/enroll">Enroll Now</a>
        </Button>
      </div>
    </div>
  );
}
