import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {

let [name,setName]=useState("")
let [email,setEmail]=useState("")



function handleName(event){
    setName((name = event.target.value))
}
function handleEmail(event){
    setEmail((email = event.target.value))
}

let newUser = {"name": name, "email" :email}


function handleSubmit(event){
    event.preventDefault();
    axios({
        method:"post",
        url:"api/users/add",
        data:newUser
    })
}
function handleDelete() {
    axios({
        method: "delete",
        url: "delete/10"
    });
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
    <input
     type="text"
     value={name}
     name="name"
     placeholder="First Name"
     onChange={handleName}
    />
      <input
     type="text"
     value={email}
     name="email"
     placeholder="email"
     onChange={handleEmail}
    />
    <input type="submit" value="submit"/>
    {/* <button onClick={handleDelete}>delete customer</button> */}
    </form>
      
        </div>
    )
}
