import React from 'react';
import './index.css';
import {ItemTable} from '../component/item-table/item-table.component';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ThirdApiPage extends React.Component{

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
      fetch(`http://localhost/training/api/api-fetch-all-item.php`)
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
          <input className="form-control searchForm" value={this.state.searchField} autoComplete='off' onChange={this.handleSearchField}/>
          </div>
          <button type="submit" className="btn btn-success searchForm">Search</button>
          </form>
          </center>
          </div>
         <ItemTable sendtasks={this.state.tasks}/>
        </div>
      )
    }
  }


  export default ThirdApiPage;
  