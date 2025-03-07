import React from "react";

const posts = [
  {
    id: 1,
    title: "FrontEnd",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    tools: ["HTML", "CSS", "React", "Angular", "vite", "Tailwind", "Bootstrap"],
    image: "https://img.icons8.com/ios/100/monitor--v1.png",
  },
  {
    id: 2,
    title: "BackEnd",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    tools: ["JavaScript", "NodeJs", "Express", "PostgreSQL", "MySQL"],
    image: "https://img.icons8.com/ios/100/code--v1.png",
  },
  {
    id: 3,
    title: "Herramientas",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    tools: ["Postman", "PgAdmin", "Figma", "Scrum", "Kanban", "git", "MySQLWorkbench"],
    image: "https://img.icons8.com/ios/100/data-arrived.png",
  },
];

const Grid = () => {
  return (
    <div className="bg-white py-10 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Conocimientos en desarrollo
          </h2>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-center justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {post.title}
                </h3>
                <div className="relative mt-8 flex items-center gap-x-5 mx-0">
                  <img
                    src={post.image}
                    alt=""
                    className="h-20 w-20 bg-gray-50 items-center"
                  />
                </div>
                <p className="mt-5 line-clamp-7 text-sm leading-6 text-gray-1000">
                  {post.tools.map((t) => (
                    <h2>{t}</h2>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
