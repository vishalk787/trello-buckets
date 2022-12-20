import { useState, useEffect } from "react"
import Bucket from "./Bucket"
import Data from '../data'

function Buckets () {
    const [todoList, updateTodoList] = useState({})
    const [pendingList, updatePendingList] = useState({})
    const [doneList, updateDoneList] = useState({})

    // function to manually update states

    // function updateStates (prevState, prevFn, newState, newFn, id, value){
    //     const newObj = {...prevState[id], status:value};
    //     newFn({...newState, [id]: newObj});
    //     const updatedList = {...prevState};
    //     delete updatedList[id];
    //     prevFn(updatedList)
    // }

    function updateStatus(id, value, prevValue){
        const updateObj = {
            done: {list: doneList, setter: updateDoneList}, 
            todo: {list: todoList, setter: updateTodoList}, 
            pending: {list: pendingList, setter: updatePendingList}
        }
        const newObj = {...updateObj[prevValue].list[id], status:value}
        updateObj[value].setter({...updateObj[value].list, [id]: newObj})
        const updatedList = {...updateObj[prevValue].list}
        delete updatedList[id]
        updateObj[prevValue].setter(updatedList)

        // conditions to manually update the state

        // if(prevValue === 'todo' && value === 'pending') updateStates(todoList, updateTodoList, pendingList, updatePendingList, id, value)
        // if(prevValue === 'todo' && value === 'done') updateStates(todoList, updateTodoList, doneList, updateDoneList, id, value)
        // if(prevValue === 'pending' && value === 'done') updateStates(pendingList, updatePendingList, doneList, updateDoneList, id, value)
        // if(prevValue === 'pending' && value === 'todo') updateStates(pendingList, updatePendingList, todoList, updateTodoList, id, value)
        // if(prevValue === 'done' && value === 'pending') updateStates(doneList, updateDoneList, pendingList, updatePendingList, id, value)
        // if(prevValue === 'done' && value === 'todo') updateStates(doneList, updateDoneList, todoList, updateTodoList, id, value)
    }

    function sortLists () {
        const obj = { todo:{}, pending:{}, done:{} }

        for (const value in Data){
            let status = Data[value].status
            obj[status] = {...obj[status], [value]: Data[value]}
        }
        // console.log(obj)
        updateTodoList({...obj.todo})
        updatePendingList({...obj.pending})
        updateDoneList({...obj.done})
    }

    useEffect( () => sortLists(), [] )

    return(
        <>
            <Bucket name={'Todo'}  list={todoList} changeFunc={updateStatus} />
            <Bucket name={'Pending'} list={pendingList} changeFunc={updateStatus}/>
            <Bucket name={'Done'} list={doneList} changeFunc={updateStatus}/>
        </>
    )
}

export default Buckets
