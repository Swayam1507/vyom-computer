import { MetadataRoute } from "next";
import courses from "./courses/courseList.json";
import blogs from "./blog/posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  let list = [
    {
      url: "https://vyom-computer.onrender.com",
      lastModified: new Date(),
    },
    {
      url: "https://vyom-computer.onrender.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://vyom-computer.onrender.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://vyom-computer.onrender.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://vyom-computer.onrender.com/courses",
      lastModified: new Date(),
    },
  ];
  courses.forEach((course) => {
    list.push({
      url: `https://vyom-computer.onrender.com/courses${course.link}`,
      lastModified: new Date(),
    });
  });
  blogs.forEach((blog) => {
    list.push({
      url: `https://vyom-computer.onrender.com/blog${blog.slug}`,
      lastModified: new Date(),
    });
  });

  return list;
}
