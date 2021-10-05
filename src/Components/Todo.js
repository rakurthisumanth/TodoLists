import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Todo() {
  const[names,setnames]=useState("")
  const[todos,settodos]=useState([])
     const ChangeHandler=(e)=>{
         setnames(e.target.value)

     }
     const AddHandler=()=>{
         if(!names)
         {

         }
         else{
         const AddTodo=[...todos,names]
         settodos(AddTodo)
         setnames("")
         }
     }
     const HandleDelete=(indexvalue)=>{
         const DeleteTodo=todos.filter((item,index)=>index!==indexvalue)
         settodos(DeleteTodo)
     }
     const EditeHandler=(indexvalue)=>{
         const Update=todos.splice(indexvalue,1)
         setnames(Update)

     }
    return (
        <div>
            <TextField type="text" label="add todo..." value={names} onChange={ChangeHandler}/>
            <Button variant="contained" onClick={AddHandler}>Add Items</Button>

            <br/>
            <br/>

         {
             todos.map((item,index)=>(
                 <div key={index}>
                     <li>{item} <Button variant="contained" onClick={()=>HandleDelete(index)}>Delete</Button> <Button variant="contained" onClick={()=>EditeHandler(index)}>Edite</Button></li>

                     </div>

             ))

         }
        </div>
    )
}

export default Todo
