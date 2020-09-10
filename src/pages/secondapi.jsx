import React from 'react';
import {UserTable} from '../component/user-table/user-table.component';
import './index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class SecondApiPage extends React.Component{

    constructor(){
      super();
      this.state = {
        tasks:[],
        limit:''
      };
    }
  
    handleLimitField = event => {
        this.setState({
          limit:event.target.value
          
        })
    }
  
    handleSubmit = event => {
  
     
      const limit = this.state.limit
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => response.json())
      .then(todos => this.setState({tasks:todos}))
      event.preventDefault()
    }
  
    render(){
      return(
        <div>
          <div className="container">
          <center>
          <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <input type='number' className="form-control searchForm" value={this.state.limit} autoComplete='off' onChange={this.handleLimitField}/>
          </div>
          <button type="submit" className="btn btn-success searchForm">Limit</button>
          </form>
          <br />
          </center>
          
          <Link to='/thirdapi'><button className='button-design float-right btn btn-info button-margin'>Third API</button></Link>
          
          <Link to='/'><button className='button-design float-right btn btn-info button-margin'>First API</button></Link>
          
          </div>
          <br/>
          <br/>
          <br/>
          
         <UserTable sendtasks={this.state.tasks}/>
        </div>
      )
    }
  }


  export default SecondApiPage;
     