import React from "react";
import { EDIT,DELETE } from "./action";
const TodoList = ({listData,dispatch}) => {
    return (
        <>
            {listData.map((todo,i)=>{
                return(
                    <section key={`${todo.value}-${i}`}>
                    {todo.value.length!==0 ? <><article className="list">{todo.value}</article> 
                    <article>
                        <button className="editTask" onClick={()=>{dispatch({type: EDIT, payload:todo})}}>EDIT</button>
                        <button onClick={()=>{dispatch({type: DELETE, payload:todo})}}>DELETE</button>
                    </article></>: null}
                </section>
                    
                )
            })}
        </>
    )
}
export default TodoList;