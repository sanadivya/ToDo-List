import { useReducer, useState } from "react";
import { ADD, DELETE, EDIT } from "./action";

import React from "react";
import TodoList from "./todolist";

const Todo = () => {

   const [todo, setTodo] = useState({value:"", order:""});
   const [isAdd,setMode] = useState(true);
    const reducer = (state, action) => {
        switch (action.type) {
            case ADD:
                setTodo({value:"", order:""});
                return [...state, { value: todo.value, order: state.length + 1 }]
            case EDIT:
                let updateState=[...state];
                if(isAdd){
                    setMode(false);
                    setTodo(action.payload);
                    
                }else{
                    updateState.forEach((st)=>{
                        if(st.order===todo.order){
                            st.value=todo.value;
                        }
                    })
                    setMode(true);
                    setTodo({value:"", order:""});
                }
                return updateState;
            case DELETE:
                const newState=state.filter((st)=>{
                    return st.order !== action.payload.order;
                })
                return newState;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, []);
    const handleDispatch=()=>{
        if(isAdd){
            dispatch({ type: ADD });
        }else{
            dispatch({ type: EDIT });
        }
    }
   
    
    return (
        
            <section >
                <h1>TODO-LIST:</h1>
                <section>
                    <textarea  id="task" onChange={(e) => { setTodo({...todo,value:e.target.value}) }} value={todo.value}></textarea>
                    <button id="btn" onClick={() => {handleDispatch()}} disabled={todo.value ? false:true}>{isAdd ? "ADD" : "EDIT"} TODO</button>
                </section>
                <TodoList listData={state} dispatch={dispatch}/>
                
                
            </section>
       
    )

}
export default Todo;