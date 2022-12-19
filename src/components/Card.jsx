

function Card ({id, name, discription, changeFunc}) {

    function handleChange(e) {
        // console.log(e.target.value, e.target.id)
        changeFunc( s => ({...s, ...{id:e.target.id, value:e.target.value}}) )
    }

    return(
        <div className="card">
            <h2> {name} </h2>
            <p> {discription} </p>
            <select id={id} onChange={handleChange} >
                <option value=''>Select Status</option>
                <option value='todo' >Todo</option>
                <option value='pending' >Pending</option>
                <option value='done' >Done</option>
            </select>
        </div>
    )
}

export default Card