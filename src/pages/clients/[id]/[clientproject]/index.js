"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const clients = [
  {
    id: 1,
    username: "umar",
    projects: [
      {
        name: "Project A",
        description: "A web development project for an e-commerce platform.",
        startDate: "2024-01-15",
        status: "In Progress",
      },
      {
        name: "Project B",
        description: "Developing a custom mobile app for online booking.",
        startDate: "2023-11-10",
        status: "Completed",
      },
      {
        name: "Project C",
        description: "Redesigning the company website with new branding.",
        startDate: "2024-02-01",
        status: "Pending",
      },
    ],
  },
  {
    id: 2,
    username: "ali",
    projects: [
      {
        name: "Project D",
        description: "Building an AI-powered chatbot for customer service.",
        startDate: "2023-10-05",
        status: "In Progress",
      },
      {
        name: "Project E",
        description: "Upgrading server infrastructure for better scalability.",
        startDate: "2023-12-01",
        status: "Pending",
      },
    ],
  },
  {
    id: 3,
    username: "umair",
    projects: [
      {
        name: "Project F",
        description: "A marketing campaign management system.",
        startDate: "2024-03-10",
        status: "Not Started",
      },
      {
        name: "Project G",
        description: "An analytics dashboard for tracking business metrics.",
        startDate: "2024-01-05",
        status: "In Progress",
      },
      {
        name: "Project H",
        description: "Creating a new company blog platform.",
        startDate: "2023-09-20",
        status: "Completed",
      },
    ],
  },
  {
    id: 4,
    username: "sarah",
    projects: [
      {
        name: "Project I",
        description: "Developing an e-learning platform for schools.",
        startDate: "2024-02-25",
        status: "Pending",
      },
    ],
  },
  {
    id: 5,
    username: "ahmed",
    projects: [
      {
        name: "Project J",
        description: "Migration of company data to the cloud.",
        startDate: "2023-08-12",
        status: "Completed",
      },
      {
        name: "Project K",
        description: "Implementing a new CRM system.",
        startDate: "2024-03-01",
        status: "In Progress",
      },
    ],
  },
  {
    id: 6,
    username: "fatima",
    projects: [
      {
        name: "Project L",
        description: "Launching a new marketing website for a product launch.",
        startDate: "2024-04-15",
        status: "Not Started",
      },
      {
        name: "Project M",
        description: "SEO and digital marketing strategy development.",
        startDate: "2023-12-20",
        status: "In Progress",
      },
      {
        name: "Project N",
        description: "Custom API development for third-party integrations.",
        startDate: "2023-07-01",
        status: "Completed",
      },
    ],
  },
  {
    id: 7,
    username: "zain",
    projects: [
      {
        name: "Project O",
        description: "Building a personal portfolio website.",
        startDate: "2023-10-30",
        status: "In Progress",
      },
    ],
  },
  {
    id: 8,
    username: "hassan",
    projects: [
      {
        name: "Project P",
        description: "Rebranding and marketing material redesign.",
        startDate: "2024-01-10",
        status: "Not Started",
      },
      {
        name: "Project Q",
        description: "Developing an internal communication tool for employees.",
        startDate: "2023-09-15",
        status: "Completed",
      },
    ],
  },
  {
    id: 9,
    username: "ayesha",
    projects: [
      {
        name: "Project R",
        description: "Building a fitness tracking mobile app.",
        startDate: "2024-02-05",
        status: "In Progress",
      },
    ],
  },
  {
    id: 10,
    username: "bilal",
    projects: [
      {
        name: "Project S",
        description: "Implementing a cybersecurity solution.",
        startDate: "2023-11-01",
        status: "In Progress",
      },
      {
        name: "Project T",
        description: "Developing a real-time inventory management system.",
        startDate: "2024-01-20",
        status: "Pending",
      },
      {
        name: "Project U",
        description: "Upgrading the company’s networking infrastructure.",
        startDate: "2023-09-18",
        status: "Completed",
      },
    ],
  },
  {
    id: 11,
    username: "mariam",
    projects: [
      {
        name: "Project V",
        description: "An online booking system for a healthcare provider.",
        startDate: "2024-03-15",
        status: "Not Started",
      },
      {
        name: "Project W",
        description: "Data visualization tool for financial reporting.",
        startDate: "2023-10-01",
        status: "In Progress",
      },
    ],
  },
  {
    id: 12,
    username: "tariq",
    projects: [
      {
        name: "Project X",
        description: "Building a logistics tracking platform.",
        startDate: "2023-09-10",
        status: "Completed",
      },
    ],
  },
  {
    id: 13,
    username: "nadia",
    projects: [
      {
        name: "Project Y",
        description: "Redesigning the user interface for a mobile app.",
        startDate: "2024-01-12",
        status: "In Progress",
      },
    ],
  },
  {
    id: 14,
    username: "hina",
    projects: [
      {
        name: "Project Z",
        description: "Building an event management system.",
        startDate: "2023-08-30",
        status: "Completed",
      },
      {
        name: "Project AA",
        description: "Developing a video conferencing tool.",
        startDate: "2024-03-20",
        status: "Pending",
      },
    ],
  },
  {
    id: 15,
    username: "sana",
    projects: [
      {
        name: "Project AB",
        description: "Creating an AI-powered recommendation system.",
        startDate: "2024-02-28",
        status: "Not Started",
      },
    ],
  },
];

const SelectedClientProjectDetail = () => {
  const [project, setProjects] = useState(null);
  const params = useParams();
  const ID = params?.id;
  const clientproject = params?.clientproject;

  useEffect(() => {
    const client = clients.find((client) => client.id === parseInt(ID));
    const project = client?.projects.find(
      (project) => project.name === clientproject
    );
    if (project) {
      setProjects(project || null);
    } else {
      setProjects({});
    }
  }, [ID, clientproject]);
  if (!project) {
    return (
      <div className="max-w-screen-lg mx-auto">
        <h1>The Project Page for a Specfic Projet for a Selected Client</h1>
        <h1>Client ID: {ID}</h1>
        <h1>Project Name: {clientproject}</h1>
        <p>No project found for this client.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1>The Project Page for a Specfic Projet for a Selected Client</h1>
      <h1>Client ID: {ID}</h1>
      <h1>Project Name: {clientproject}</h1>
      <div className="border p-4 my-4">
        <h2 className="text-xl font-bold">{project.name}</h2>
        <p className="text-gray-600">{project.description}</p>
        <p className="text-sm text-gray-500">Start Date: {project.startDate}</p>
        <p className="text-sm text-gray-500">Status: {project.status}</p>
      </div>
    </div>
  );
};

export default SelectedClientProjectDetail;
