import { useState } from "react"

function Card ({id, name, discription, status, changeFunc}) {
    const [value, updateValue] = useState(status)
    function handleChange(e) {
        // console.log(e, value, e.target.value)
        changeFunc( e.target.id, e.target.value, value )
        updateValue(e.target.value)
    }

    return(
        <div className="card">
            <h2> {name} </h2>
            <p> {discription} </p>
            <select id={id} value={value}  onChange={handleChange} >
                <option value=''>Select Status</option>
                <option value='todo' >Todo</option>
                <option value='pending' >Pending</option>
                <option value='done' >Done</option>
            </select>
        </div>
    )
}

export default Card