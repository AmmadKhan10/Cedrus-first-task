function Profile(props) {
    const {Name, FName, City, DateofBirth} = props;
    
    return(
        <div className="parent1">
        <h1>Personal introduction</h1>
        <p>My name is {Name}</p>
        <p>My father name is {FName}.</p>
        <p>I am from {City}.</p>
        <p>My date of birth is {DateofBirth}.</p>
           
        </div>
    )
}

export default Profile;