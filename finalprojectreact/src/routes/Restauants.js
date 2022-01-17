import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react'
export default  class Restauants extends Component {
    constructor(props){
        super(props)
        this.state={
            restaurantsList:[],
        };
    }
    
     handleName(event){
        setName((name = event.target.value))
    }
   
    let newRestauants={"name":name}
     handleSubmit(event){
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
        });}
        ComponentDidMount(){
            axios.get("api/Restauants").then(response=>{
                const restauantsList=response.data
                this.setState({restauantsList:response.data});
            });
            console.log(this.state.restaurantsList)
        }
        deleteSpciaList(RestaurantsID){
            axios.delete(`/api/restauants/delete/${RestaurantsId}`)
            .then(response=>{
                const restauantsList=this.state.restaurantsList.filter(item => item.RestaurantsID !==RestaurantsID);
                this.setState({restaurantsList})
            })
        }
    render() {
        console.log(this.state.Restauants)  
    return (
        <div>
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
   <div>

   </div>
   <h2 className='text-center'>restaurantsList</h2>
   <div className='row'padding="">
       <Link to="/add" className=''>
       {/*button variant ="primary>primary</button>{' '}*/}
       </Link>
   </div>
   <div className="row">
       <table className='table table-striped table-bordered'>
           <thead>
               <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>image</th>
               </tr>

           </thead>
           <tbody>
               {
                   this.state.restaurantsList.map((
                       item =>(
                           <tr key ={item.RestaurantsID}>
                               <td>{item.RestaurantsID}</td>
                               <td>{item.name}</td>
                               <td>
                                   <img src={item.image}></img>
                               </td>
                               <td><button onClick={(e)=> this.deleteSpecialist(item.RestaurantsID,e)}>delete</button></td>
                           </tr>
                       )
                   ))
               }
           </tbody>
       </table>
   </div>
            
       </div>
    )
            
}
