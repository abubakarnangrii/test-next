"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
const clients = [
    { id: 1, projects: ["Project A", "Project B", "Project C"] },
    { id: 2, projects: ["Project D", "Project E"] },
    { id: 3, projects: ["Project F", "Project G", "Project H"] },
    { id: 4, projects: ["Project I"] },
    { id: 5, projects: ["Project J", "Project K"] },
    { id: 6, projects: ["Project L", "Project M", "Project N"] },
    { id: 7, projects: ["Project O"] },
    { id: 8, projects: ["Project P", "Project Q"] },
    { id: 9, projects: ["Project R"] },
    { id: 10, projects: ["Project S", "Project T", "Project U"] },
    { id: 11, projects: ["Project V", "Project W"] },
    { id: 12, projects: ["Project X"] },
    { id: 13, projects: ["Project Y"] },
    { id: 14, projects: ["Project Z", "Project AA"] },
    { id: 15, projects: [] },
  ];
const ClientProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const params = useParams();
  const ID = params?.id; 





  useEffect(() => {
    const client = clients.find((client) => client.id === parseInt(ID));
    if (client) {
      setProjects(client.projects);
    } else {
      setProjects([]);
    }
  }, [ID]);

  const handleProjectLoad = (project) => {
    router.push(`/clients/${ID}/${project}`);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Projects for Client: {ID}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <button
              key={project}
              onClick={() => handleProjectLoad(project)}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-800 transition-colors duration-200"
            >
              Load {project}
            </button>
          ))
        ) : (
          <p>No projects found for this client.</p>
        )}
      </div>
    </div>
  );
};

export default ClientProjectPage;
