import React from 'react';
import './todo-table.styles.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export const ToDoTable = props => (
<div className='todo-table'>
        {
        props.sendtasks.map(task => 
         <div className='panel panel-class'>
            <img id={task.id} alt={task.alt_description} src={task.urls.small} />
        </div>
        )
      
        }

</div>
 
);

