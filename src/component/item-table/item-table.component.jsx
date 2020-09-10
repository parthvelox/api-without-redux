import React from 'react';
import './item-table.styles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const ItemTable = props => (
<div className='item-table'>
                 <table className='table table-bordered'>
                         <thead>
                                 <th>Id</th>
                                 <th>Title</th>
                                 <th>Body</th>
                                 <th>Due Date</th>
                         </thead>
                         <tbody>
                 
        {
        props.sendtasks.map(task => 
                        <tr>
                                <td>{task.it_id}</td>
                                <td>{task.it_title}</td>
                                <td>{task.it_desc}</td>
                                <td>{task.it_due_date}</td>
                                
                        </tr>
        )
      
        }
        </tbody>
</table>
</div>
 
);

