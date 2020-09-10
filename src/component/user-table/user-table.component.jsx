import React from 'react';
import './user-table.styles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const UserTable = props => (
<div className='user-table'>
                 <table className='table table-bordered'>
                         <thead>
                                 <th>Id</th>
                                 <th>Title</th>
                                 <th>Body</th>
                         </thead>
                         <tbody>
                 
        {
        props.sendtasks.map(task => 
                        <tr>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.body}</td>
                        </tr>
        )
      
        }
        </tbody>
</table>
</div>
 
);

