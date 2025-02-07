import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 } 
    ])

    const [name,setName] = useState('Islam')
    const handleDelete = (id) => { 
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Hello, Run!'); // Runs Every render!
    },[name]);

    return (  
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Mario's blogs" /> */}
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{ name}</p>
        </div>
    )
}
export default Home;