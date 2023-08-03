"use client";
import React, { useState } from 'react'

const page = () => {

  const [username, setusername] = useState("John");

  // const changeHendler = (name) =>{
  //   setusername(name);
  // }

  const submitHendler = (event) => {
    event.preventDefault();
    console.log(username);
  };

  return (
    <div>
      {/* <h1>{username}</h1>
      <button onClick={() => changeHendler("Wanijya")}>
        Change Name
      </button> */}

      <h1>{username}</h1>
      <form onSubmit={submitHendler}>
        <input 
          onChange={(event) => setusername(event.target.value)}
          value={username}
          type="text" placeholder='Username' name='Username'
        />
        <button>Change Name</button>
      </form>
    </div>
  )
}

export default page;