import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function AddTodo() {
    let [taskName, setTaskName] = useState("");
    const handleChange = (e) =>{
        setTaskName(e.target.value)
    }

    return ( 
        <>
        <TextField
        onChange={handleChange}
        value={taskName}
          label="Task Name"
          id="outlined-size-small"
          size="small"
        />
          <Button variant="outlined">Add</Button>
        </>
     );
}

export default AddTodo;