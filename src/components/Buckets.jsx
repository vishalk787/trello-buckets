import { useState, useEffect } from "react"
import Bucket from "./Bucket"
import Data from '../data'

function Buckets () {
    const [list, updateList] = useState(Data)
    const [todoList, updateTodoList] = useState([])
    const [pendingList, updatePendingList] = useState([])
    const [doneList, updateDoneList] = useState([])
    const [status, updateStatus] = useState({id:'', value:''})

    function sortLists () {
        let todoArr = []
        let pendingArr = []
        let doneArr = []
        list.forEach( el => {
            if(el.status === 'todo') {
                todoArr.push(el)
                return
            }
            if(el.status === 'pending'){
                pendingArr.push(el)
                return
            }
            if(el.status === 'done'){
                doneArr.push(el)
                return
            }
        })
        updateTodoList([...todoArr])
        updatePendingList([...pendingArr])
        updateDoneList([...doneArr])
    }

    useEffect( () => {
        if(status.id){
            let index = list.findIndex( el => el.id === status.id)
            let tempList = [...list]
            tempList[index].status = status.value
            updateList([...tempList])

        }
    }, [status] )

    useEffect( () => { sortLists() }, [list] )

    return(
        <>
            <Bucket name={'Todo'}  list={todoList} changeFunc={updateStatus} />
            <Bucket name={'Pending'} list={pendingList} changeFunc={updateStatus}/>
            <Bucket name={'Done'} list={doneList} changeFunc={updateStatus}/>
        </>
    )
}

export default Buckets

// name bucket wrapper