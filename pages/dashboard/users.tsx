"use client";
import { PageContainer } from "@features/layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const UsersPage: NextPage = () => {
  const [users, setUsers] = useState([]);
  const callAPI = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/users`, {
        method: "GET",
      });
      const data = await res.json();
      setUsers(data.users);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);
  const [start, setStart] = useState(0);
  return (
    <PageContainer
      title="Users"
      info="Overview of the users able to access your account."
    >
      <table className="w-full border-separate border-spacing-y-2">
        <thead className="">
          <tr>
            <th className="bg-blue-300 rounded-l-full py-2">Sr. No.</th>
            <th className="bg-blue-300">Name</th>
            <th className="bg-blue-300">Email</th>
            <th className="bg-blue-300">Address</th>
            <th className="bg-blue-300 rounded-r-full"> </th>
          </tr>
        </thead>
        <tbody className="mt-2">
          {users.slice(start * 10, (start + 1) * 10).map((user, index) => (
            <tr key={index}>
              <td className="text-center bg-white rounded-l-full py-2">
                {start * 10 + index + 1}
              </td>
              <td className="text-center bg-white">
                {user.firstName} {user.lastName}
              </td>
              <td className="text-center bg-white">{user.email}</td>
              <td className="text-center bg-white">{user.address.address}</td>
              <td className="bg-white rounded-r-full">
                <input type="checkbox" name="" id={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-8 mt-8">
        <button
          type="button"
          onClick={() => setStart((prevStart) => prevStart - 1)}
          className="border rounded-full p-2 px-3 bg-white"
        >
          {"<"}
        </button>
        <span className="py-2 font-bold">{start + 1}</span>
        <button
          type="button"
          onClick={() => setStart((prevStart) => prevStart + 1)}
          className="border rounded-full p-2 px-3 bg-white"
        >
          {">"}
        </button>
      </div>
    </PageContainer>
  );
};

export default UsersPage;
