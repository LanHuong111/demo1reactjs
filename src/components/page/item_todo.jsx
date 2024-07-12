function ItemTodo() {
    return ( 
        <>
        {/* <p>Item Todo</p> */}
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
        </>
        
     );
}

export default ItemTodo;