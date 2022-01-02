import React, { Component } from 'react'
import Invoice from './Service';
import { Link } from "react-router-dom";
import axios, { Axios } from 'axios';
// import Button from 'react-bootstrap/Button'
export default class Menu extends Component {
    constructor(props){
    super(props)
        this.state = {
            MenuList:[],
        };
    }
    deleteSpecialist(ORDER_id){
        axios.delete('api/Orders/delete/{ORDER_id}')
        .then(res=>{
            const MenuList=
            this.state.MenuList.filter(item =>
                item.ORDER_id!==ORDER_id);
            this.setState({MenuList})
        })
       
    }
    // addMenu=()=>{
    //     this.props.history.push("add");
    // }
    componentDidMount(){
        Axios.get("api/MenuLIST").then(res=>{
            const MenuList=res.data
            this.setState({MenuList});
        });
        console.log(this.state.MenuList)

    }
    render() {
        console.log(this.state.menu)

        return (
            <div>
                <h2 className='text-center'>Menu List</h2>
                <div className='row' padding="">
                <Link to="/add" className=''>
                {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Link>{""}
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th  > id</th> 
                                    <th> type</th> 
                                    <th>time</th> 
                                    <th>location</th>
                                    <th>Image</th>

                            </tr>
                   
                        </thead>
                        <tbody>
                                {
                                    this.state.MenuList.map((
                                        item =>(
                                        <tr key = {item.order_id}>
                                             <td> { item.type} </td>
                                             <img ></img>
                                             
                                             <td>{item.time} </td>
                                             {/* <img src={item.image}></img> */}
                                             <td>{item.location}</td>
                                        </tr>
                                    )))
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}