import React from 'react'
import AddForm from './AddForm';
import UpdateForm from './UpdateForm';

const Form = () => {
    const flag = false;
  return (
    <>
        <div className="flex flex-wrap mx-4 justify-center items-center">
            {flag ? <AddForm /> : <UpdateForm />}
        </div>
    </>
  )
}

export default Form