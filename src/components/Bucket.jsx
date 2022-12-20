import Card from "./Card"

function Bucket ({name ,list, changeFunc}) {
    
    function renderCards () {
        let arr = []
        for (const card in list) {
            if (Object.hasOwnProperty.call(list, card)) {
                arr.push(
                    <Card key={list[card].id}
                        id={list[card].id}
                        name={list[card].name}
                        discription={list[card].discription}
                        status={list[card].status}
                        changeFunc={changeFunc}
                    />
                )
            }
        }
        return arr
    }

    return(
        <div className="container">
            <h1> {name} </h1>
            {renderCards()}
        </div>
    )
}

export default Bucket