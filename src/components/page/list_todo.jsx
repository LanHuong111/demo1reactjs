import ItemTodo from "./item_todo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";


function ListTodo({todos}) {
    // let datas = todos.map((item, index) =>{
    //     return <ItemTodo key={index}/>
    // })
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Task Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">Học js</TableCell>
                <TableCell align="right">
                  <Button size="small" variant="contained" color="success">
                   <EditIcon/>
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    <DeleteIcon/>
                  </Button>
                </TableCell>
              </TableRow>
             {/* <ItemTodo/> */}
          </TableBody>
        </Table>
      </TableContainer>

      <ItemTodo/>
    </>
  );
}

export default ListTodo;
