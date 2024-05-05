"use client"
import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";

const Page = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMembers(data.member); // Set the member list from the response
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="text-red-600">
      <h1>Members</h1>
      <ul>
        {/* Render the list of members */}
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
