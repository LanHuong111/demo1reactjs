import './App.css'
import "./styles/index.scss"
// import Button from '@mui/material/Button';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
// import { PieChart } from '@mui/x-charts/PieChart';
// import PageHeader from './components/layouts/page_header';
// import Item from './components/pages/item';
import AddTodo from './components/page/add_todo';
import ListTodo from './components/page/list_todo';

let innitState=[
  {
      id:1,
      name:"Học JS"
  },
  {
      id:2,
      name:"Học HTML"
  },
  {
      id:3,
      name:"Học React"
  },
  {
      id:4,
      name:"Học CSS"
  },
  {
      id:5,
      name:"Học Bootstrap"
  }
]
function App() {
  let [todos, setTodos] = useState(innitState)

  // let todos=[
  //   {
  //     title:"Học js",
  //     descripstion:"Học js rất dễ",
  //     status: "Done"
  //   },
  //   {
  //     title:"Học Html",
  //     descripstion:"Học Html rất dễ",
  //     status: "Open"
  //   },
  //   {
  //     title:"Học Css",
  //     descripstion:"Học Css rất dễ",
  //     status: "Open"
  //   },
  //   {
  //     title:"Học reacjs",
  //     descripstion:"Học reacjs rất dễ",
  //     status: "Done"
  //   },
  //   {
  //     title:"Học Php",
  //     descripstion:"Học Php rất dễ",
  //     status: "Done"
  //   },

  // ]
  // let listData= todos.map((todo,index)=>{
  //   // return (<Item key={`todo-${index}`} title ={todo.title} descripstion={todo.descripstion} status={todo.status}/>);
  //   return (<Item key={`todo-${index}`} {...todo}/>); // 
  // })

  // let hello ="hello abc"
  // function abc(){
  //   return "abc"
  // }
  // let style={
  //   color: "red",
  //   backgroundColor: "blue"
  // }

  // function ButtonCustome(){
  //   function handleClick(){
  //     alert("Click me")
  //   }
  // }
  return (
    <>
    {/* quy ước của react phải có thẻ đóng */}
    {/* class => className */}
    {/* return chỉ trả về 1 đối tượng nên phải có thẻ bọc <></> */}


      {/* <h1>Hello Reactjs</h1>
      <br /> 
      <h1 style={style} className='hello'>{abc()}</h1>
      <input type="text" value={hello} />
      <Button color="secondary">Secondary</Button>
      <br />
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
        <AccessAlarmsIcon fontSize='small'/>
      </Button>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    <PageHeader/> */}
    {/* <main>
      <h1>
        Danh sách Todo
      </h1>
      {listData}
      
    </main> */}
      {/*  */}
      <h1>
        List todo
      </h1>
    <div className='content'>
        <AddTodo/>
        <ListTodo todos={todos}/>
    </div>

    </>
  )
}

export default App;
