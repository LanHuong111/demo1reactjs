import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Item({title, descripstion, status}) { // thay cho từ props(rút gọn code)
    
    return ( 
        <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <h3>{title}</h3>
        </Grid>
        <Grid item xs={3}>
        <pre>
           {descripstion}
        </pre>
        </Grid>
        <Grid item xs={2}>
            {status == "done" ? (<FormControlLabel control={<Checkbox defaultChecked/>}/>) : (<FormControlLabel control={<Checkbox />}/>)}
            {/* nếu tatus là done thì default là check r thì nó sẽ hiển thị check, còn k status k phải là done default là nó sẽ hiển thị chưa đc check */}
            {/* {status == "done" && (<FormControlLabel control={<Checkbox defaultChecked/>}/>) } */}
            {/* như cái ở trên nhưng mà cái này cái nào chưa check nó sẽ ẩn luôn ô check còn cái nào check rồi thì nó sẽ hiện cái ô là check rồi */}

            {/* <FormControlLabel control={<Checkbox defaultChecked/>}/> */} 
            {/* nút check box */}
        </Grid>

        </Grid>
        </Box>
        </>
        
     );
}
