'use client'
import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { BiPlus } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import OnSuccess from './OnSuccess';

type MyFormValues = {
    firstname: string;
    lastname: string;
    email: string;
    salary?: number | undefined;
    date?: Date | undefined;
    status?: string;
};

const AddForm: React.FC = () => {
    const router =useRouter()
    const formik = useFormik<MyFormValues>({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            salary: undefined,
            date: undefined,
            status: "",
        },
        validationSchema: yup.object({
            firstname: yup.string().required('Required'),
            lastname: yup.string().required('Required'),
            email: yup.string().email('Invalid email address').required('Required'),
            salary: yup.number().moreThan(-1, "Negative values not accepted").required('Required'),
            date: yup.date().required('Required'),
            status: yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            toast.success(`${values.firstname} ${values.lastname} added successfully!`)
            // router.push('/onSuccess');
        },
    });
    return (
        <>
            <form className="grid lg:grid-cols-2 w-4/6 gap-4 my-10" onSubmit={formik.handleSubmit}>
                <div className="input-type">
                    <input type="text" className="border w-full px-5 py-3 focus:outline-none rounded-md"
                        placeholder="FirstName"
                        {...formik.getFieldProps("firstname")}
                    />
                    {
                        formik.touched.firstname && formik.errors.firstname ? (
                            <div className="text-red-600 mt-1">{formik.errors.firstname}</div>
                        ) : null
                    }
                </div>
                <div className="input-type">
                    <input type="text" className="border w-full px-5 py-3 focus:outline-none rounded-md"
                        placeholder="LastName"
                        {...formik.getFieldProps("lastname")}
                    />
                    {
                        formik.touched.lastname && formik.errors.lastname ? (
                            <div className="text-red-600 mt-1">{formik.errors.lastname}</div>
                        ) : null
                    }
                </div>
                <div className="input-type">
                    <input type="text" className="border w-full px-5 py-3 focus:outline-none rounded-md"
                        placeholder="Email"
                        {...formik.getFieldProps("email")}
                    />
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className="text-red-600 mt-1">{formik.errors.email}</div>
                        ) : null
                    }
                </div>
                <div className="input-type">
                    <input type="text" className="border w-full px-5 py-3 focus:outline-none rounded-md"
                        placeholder="Salary"
                        {...formik.getFieldProps("salary")}
                    />
                    {
                        formik.touched.salary && formik.errors.salary ? (
                            <div className="text-red-600 mt-1">{formik.errors.salary}</div>
                        ) : null
                    }
                </div>
                <div className="input-type">
                    <input type="date" className="border px-5 py-3 focus:outline-none rounded-md"
                        placeholder="Salary"
                        {...formik.getFieldProps("date")}
                    />
                    {
                        formik.touched.date && formik.errors.date ? (
                            <div className="text-red-600 mt-1">{formik.errors.date}</div>
                        ) : null
                    }
                </div>


                <div className="flex gap-10 items-center">
                    <div className="form-check">
                        <input type="radio" value="Active" onChange={e => { formik.values.status = e.target.value }} id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                            Active
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio" value="Inactive" onChange={e => { formik.values.status = e.target.value }} id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                            Inactive
                        </label>
                    </div>
                    {
                        formik.touched.status && formik.errors.status ? (
                            <div className="text-red-600 mt-1">{formik.errors.status}</div>
                        ) : null
                    }
                </div>

                <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500" type="submit">
                    Add <span className='px-1'>
                        <BiPlus size={24}></BiPlus>
                    </span>
                </button>

            </form>
        </>
    )
}

export default AddForm