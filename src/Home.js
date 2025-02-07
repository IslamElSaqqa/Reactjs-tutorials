import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [IsPending, setIsPending] = useState(true);


    useEffect(() => {
        fetch('http://localhost:8002/blogs')
            .then(res => res.json()) // Return the parsed JSON
            .then(data =>{
                setBlogs(data)
                setIsPending(false)
            })
            .catch(error => console.error("Error fetching blogs:", error));
    }, []); // Add useEffect to prevent re-fetching on every render
        // initial dependency array to prevent re-fetching every render

    return (  
        <div className="Home">
            {IsPending && <div><h2>Loading ....</h2></div>} 
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            
        </div>
    )
}
export default Home;