'use client'
import Form from "@/components/Form";
import Table from "@/components/Table";
import UpdateForm from "@/components/UpdateForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Toaster position="top-center" gutter={10} />

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex py-5 border-b justify-center items-center">
          <div className="left flex gap-3 ">
            <Link
              href="/"  
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-xl group"
              onClick={toggle}
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0" />
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Add Employee
              </span>
            </Link>
          </div>

          {/* collapsable form */}

          {/* table */}
        </div>
          {visible ? <Form /> : ""}
       
        <div className="flex flex-wrap mx-4 justify-center items-center">
          <Table />
        </div>
      </main>
    </>
  );
}
