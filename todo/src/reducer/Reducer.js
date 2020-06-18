import { nanoid } from 'nanoid'


export const initialState = {
    tasks: [
        {
            task: 'Pass advanced react?',
            completed: false,
            id: nanoid()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'NEW_TODO':
            return {
                ...state, tasks: [...state.tasks,
                    {
                    task: action.payload,
                    completed: false,
                    id: nanoid()
                    } 
                ]
            }

        case 'TOGGLE_COMPLETED':
            return {...state,
               tasks: state.tasks.map(item => {
                    // debugger
                    if (item.id === action.payload) {
                    return {...item, completed: !item.completed}
                    }
                    else { return item; }
                })
            }

            case 'DELETE_COMPLETED':
                return{
                    ...state, tasks: state.tasks.filter(item => { 
                    return (item.completed === false)
                    }
                ) 
            }

            case 'DELETE_ALL':
                return{
                    ...state, tasks: state.tasks.filter(item => {
                         return (item.completed === true)
                    }
                )
            }

        default: return state
    }
}


  