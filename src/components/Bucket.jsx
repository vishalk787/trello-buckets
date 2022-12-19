import Card from "./Card"

function Bucket ({name ,list, changeFunc}) {


    return(
        <div className="container">
            <h1> {name} </h1>
            {list.map( card => {
                return(
                    <Card key={card.id}
                        id={card.id}
                        name={card.name}
                        discription={card.discription}
                        changeFunc={changeFunc}
                    />
                )
            } )}
        </div>
    )
}

export default Bucket