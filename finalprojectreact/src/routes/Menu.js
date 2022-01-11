import React, { Component } from 'react'
import Invoice from './Service';
import { Link } from "react-router-dom";
import axios, { Axios } from 'axios';
import "./Menu.css"
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
    //axios
    componentDidMount(){
        axios.get("api/menu").then(res=>{
            const MenuList=res.data
            this.setState({MenuList:res.data});
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
                                    <th> id</th> 
                                    <th>name</th> 
                                    <th>size</th>
                                    <th>picture</th>

                            </tr>
                   
                        </thead>
                        <tbody>
                                {
                                    this.state.MenuList.map((
                                        item =>(
                                        <tr key = {item.menu_id}>
                                             <td> { item.menu_id} </td>
                                             <td>{item.name}</td>
                                             <td>{item.size} </td>
                                             <td>
                                             <img src={item.picture} alt="no burger"></img>
                                             </td>
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