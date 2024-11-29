import Image from "next/image";

export default function Creations() {
  const projects = [
    {
      id: 1,
      image: "",
      title: "Store management System",
      description:
        "A complete store management application made using React JS and Tailwind for frontend and Supabase for backend. This application also includes features like statistics to display current status and provides appropriate feedback to every user action.",
      seemore: "",
    },
    {
      id: 2,
      image: "",
      title: "TaskHub",
      description:
        "An employee management application made using Next JS and Tailwind for frontend and Supabase for backend. Features like parallel route and intercepting routes are implemented to achieve desired functionality The application allows users to manage employees within the organization and assign tasks flexibly between any two users.",
      seemore: "",
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-[32px] underline underline-offset-8 font-bold">
        My Latest Noteworthy Projects:
      </h2>
      <div className="grid sm:grid-cols-12 gap-4 mt-12">
        {projects.map((project) => (
          <div
            className="sm:col-span-6 col-span-12 bg-stone-300"
            key={project.id}
          >
            <div className="relative">
              <Image src={`/${project.image}`} alt="Project Image" fill />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
