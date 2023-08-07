import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from "../database/data.json";
import Image from "next/image";

const Table = () => {
  const userData: any = data;

  return (
    <table className="min-w-full table-auto  rounded-xl ">
      <thead>
        <tr className="bg-gray-800">
          <th>
            <span className="text-gray-200">Name</span>
          </th>
          <th>
            <span className="text-gray-200">Email</span>
          </th>
          <th>
            <span className="text-gray-200">Salary</span>
          </th>
          <th>
            <span className="text-gray-200">Birthday</span>
          </th>
          <th>
            <span className="text-gray-200">Status</span>
          </th>
          <th>
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {userData?.map((user: any, index: number) => {
          return (
            <tr className="bg-gray-50 text-center" key={index}>
              <td className="px-16 py-2 flex flex-row items-center">
                <Image src={user.avatar} alt="loading ..."  className="rounded-xl"/>
                <span className="text-center ml-2 font-semibold">
                  {user.name}
                </span>
              </td>
              <td>
                <span>{user.email}</span>
              </td>
              <td>
                <span>${user.salary}</span>
              </td>
              <td>
                <span>{user.date}</span>
              </td>
              <td>
                <button className="cursor">
                  <span className={` text-white px-5 py-1 rounded-full ${user?.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                    {user.status}
                  </span>
                </button>
              </td>
              <td className="px-16 py-2 flex justify-around gap-5">
                <button className="cursor">
                  <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
                </button>
                <button className="cursor">
                  <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
