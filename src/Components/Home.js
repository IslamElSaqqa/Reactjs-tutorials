import { useState } from 'react';
const Home = () => {
    // useState Hook is used to change dynamic values
    const [name, setName] = useState("Islam");
    const [Age, setAge] = useState(21);

    const  handleClick = () => {
        setName('Mohamed');
        setAge(25);
    }
    return (  
        <div className="Home">
            <h2>HomePage</h2>
            <p>{name} is {Age} years old.</p>
            <button onClick={handleClick}>Click here!</button>
        </div>
    );
}

export default Home;


