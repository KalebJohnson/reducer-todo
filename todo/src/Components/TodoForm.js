  
import React, { useState, useReducer } from "react";
import { initialState, reducer } from '../reducer/Reducer'
import Todo from "./Todo"


const TodoForm = () => {

    //state
    const [newTodo, setNewTodo] = useState('')
    //reducer
    const [state, dispatch] = useReducer(reducer, initialState)
    //handlers
    const handleChanges = e => setNewTodo(e.target.value)
    const handleSubmit = e => e.preventDefault();

    return (
     <div>
        <form onSubmit={handleSubmit}>
            <input
            value={newTodo}
            onChange={handleChanges}
            />
             <button
             onClick={() => dispatch({ type: 'NEW_TODO', payload: newTodo })}>
             New Todo
            </button>

            </form>
             <div>
                 {state.tasks.map(item => {
                      return (
                        <div
                        onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id })}
                        key={item.id}>
                        <Todo item={item} />
                        </div>
                    )
                })}


                <button onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}> Clear </button>
                <button onClick={() => dispatch({ type: 'DELETE_ALL' })}> Clear List </button>

            </div>
        </div>
    );
}


export default TodoForm;