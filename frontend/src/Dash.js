import React, { Component } from 'react';
import axios from "axios"

export class Dash extends Component {
    constructor(props){
        super(props);
        this.state = {
          users:[],
          id:0,
          name:'',
          email:'',
          password:''
    
        }
      }
    componentDidMount(){
        axios.get("http://localhost:8080/api/").then((res) => {
          this.setState({
            users:res.data,
            id:0,
            name:'',
            email:'',
            password:''
          })
        })
      }
    
      delete(id){
        axios.delete(`http://localhost:8080/api/${id}`).then(() => {
          this.componentDidMount();
        })
      }
    
      edit(id){
        axios.get(`http://localhost:8080/api/${id}`).then((res) => {
          this.setState({
            id:res.data.id,
            name:res.data.name,
            email:res.data.email,
            password:res.data.password
          })
        })
      }

    render() {
        return (
            <div className='row'>
                <div className='newform'>
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            this.state.users.map(user=>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
              <button onClick={(e) =>this.edit(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                <i class="material-icons">edit</i>
              </button>
              </td>
              <td>
              <button onClick={(e) =>this.delete(user.id)} class="btn waves-effect waves-light" type="submit" name="action">
                <i class="material-icons">delete</i>
              </button>
              </td>
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

export default Dash
