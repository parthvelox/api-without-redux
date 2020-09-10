import React from 'react';
import './index.css';
import {ToDoTable} from '../component/todo-table/todo-table.component';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


class MainPage extends React.Component{

    constructor(){
      super();
      this.state = {
        tasks:[],
        searchField:''
      };
    }
  
    handleSearchField = event => {
        this.setState({
          searchField:event.target.value
          
        })
    }
  
    handleSubmit = event => {
  
     
      const search = this.state.searchField
      fetch(`https://api.unsplash.com/search/photos/?client_id=Us-4gEnCggUOaB7XmLdDBVFED1AQS0n3f7ORbscSbwM&per_page=50&query=${search}`)
      .then(response => response.json())
      .then(todos => this.setState({tasks:todos.results}))
      event.preventDefault()
    }
  
    render(){
      return(
        <div>
          <div className="container">
          <center>
          <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <input className="form-control searchForm" value={this.state.searchField} autoComplete='off' onChange={this.handleSearchField}/>
          </div>
          <button type="submit" className="btn btn-success searchForm">Search</button>
          </form>
          </center>
          <Link to='/thirdapi'><button className='button-design float-right btn btn-info button-margin'>Third API</button></Link>
          <Link to='/secondapi'><button className='button-design float-right btn btn-info button-margin'>Second API</button></Link>  
          </div>
          <br/>
          <br/>
          <br/>
         <center><ToDoTable sendtasks={this.state.tasks}/></center>
        </div>
      )
    }
  }


  export default MainPage;