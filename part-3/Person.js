const Person = (props) => {
    let reply;
    if (props.age > 18){
        reply = "please go vote!";
    }else{
        reply = "you must be 18";
    }
   
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
                <ul>Hobbies: {props.hobbies.map(h => (
                   <li>{h}</li>)
                   )}
                </ul>

            </ul>
            <h3>{reply}</h3>

        </div>

    )
}