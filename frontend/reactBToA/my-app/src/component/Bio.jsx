function Bio(props){
    return (
        <>
        <div>
            <h1>{props.skills}</h1> 
            <p>Age: {props.age}</p> 
            <p>City: {props.city}</p> 
        </div>
        </>
    )
}

export default Bio