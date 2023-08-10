"use client";
import React, { useState } from "react";

export const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("due");

  const submitHandler = (e)=>{
      e.preventDefault();
      let newTask = {
        title,
        description,
        status,
        date: new Date().toLocaleDateString(),
      }
      console.log(newTask);
  }

  return (      
    <div className="mt-5 container p-5">
      <form className="w-50" onSubmit={submitHandler}>
        <h2>Create Your Tasks</h2>
        <input className="form-control mb-3" value={title} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Title" />
        <textarea value={description} onChange={(e)=>setdescription(e.target.value)} 
          className="form-control mb-3"
          placeholder="description here..."
        ></textarea>
        <select defaultValue={status} onChange={(e)=> setstatus(e.target.value)}  className="form-control mb-3">
          <option value="due">Due</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button className="btn btn-primary">Create Task</button>
        <hr />
      </form>
      <h2>Pending Tasks</h2>
      <div className="d-flex flex-wrap">
        <div className="card  mb-3 me-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="me-2 btn btn-sm   btn-dark">Update Task</button>
            <button className="btn btn-sm btn-dark">Delete Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
