import React, { Component } from 'react'
import Invoice from './Service';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'
export default class Menu extends Component {
    constructor(props){
    super(props)
        this.state = {
            employees:[]
        }
    }
    // addEmployee=()=>{
    //     this.props.history.push("add");
    // }
    componentDidMount(){
        Invoice.getEmployee().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>
                <div className='row' padding="">
                <Link to="/add" className=''>
                {/* <Button variant="primary">Primary</Button>{' '} */}
                    </Link>{""}
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                      <thead>
                          <tr>
                            <th> Name</th>                          
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.RestaurantsId}>
                                             <td> { employee.name} </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}