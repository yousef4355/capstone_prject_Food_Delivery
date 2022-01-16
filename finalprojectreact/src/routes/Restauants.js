import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function Restauants() {
    let [name,setName]=useState("")
    
    function handleName(event){
        setName((name = event.target.value))
    }
   
    let newRestauants={"name":name}
    function handleSubmit(event){
        event.preventDefault();
        axios({
            method:"post",
            url:"api/restauants/add",
            data:newRestauants
        })

    }
    function handleDelete() {
        axios({
            method: "delete",
            url: "delete/11"
        });
        ComponentDidMount(){
            axios.get("api/Restauants").then(response=>{
                const restauantsList=response.data
                this.setState({restauantsList:response.data});
            });
            console.log(this.state.restauantsList)
        }
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
    <input type="submit" value="submit"/>
    {/* <button onClick={handleDelete}>delete customer</button> */}
   </form>
            
       </div>
    )
}
