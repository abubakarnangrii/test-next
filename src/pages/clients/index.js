"use client";
import React from "react";
import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: 1, username: "umar" },
    { id: 2, username: "ali" },
    { id: 3, username: "umair" },
    { id: 4, username: "sarah" },
    { id: 5, username: "ahmed" },
    { id: 6, username: "fatima" },
    { id: 7, username: "zain" },
    { id: 8, username: "hassan" },
    { id: 9, username: "ayesha" },
    { id: 10, username: "bilal" },
    { id: 11, username: "mariam" },
    { id: 12, username: "tariq" },
    { id: 13, username: "nadia" },
    { id: 14, username: "hina" },
    { id: 15, username: "sana" },
  ];
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Client Page</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <li
            key={client.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:bg-blue-100 transition-all duration-300"
          >
            <Link
              href={{
                pathname: `/clients/[id]`,
                query: { id: client.id },
              }}
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {client.username.charAt(0).toUpperCase() +
                client.username.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;

{
  /*
    both these do the same word you can adjust how you can and wants
     href={`/clients/${client.username}`}
     href={{
                pathname: `/clients/${client.id}`,
                query: { id: client.username },
            }}
    */
}
