function Bio(props){
    return (
        <>
           <div className="bio-section">
            <p>Age: {props.age}</p> 
            <p>City: {props.city}</p> 
            <h3>My Technical Skills:</h3>
            <ol>
                {props.skills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
                ))}
            </ol>
            </div>
        </>
    )
}

export default Bio