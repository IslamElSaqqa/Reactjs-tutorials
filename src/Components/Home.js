import { useState } from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My New React Website", body:'lorem ipsum...', Author: "Islam",id: 1},
        {title: "Welcome to My Party", body:'lorem ipsum...', Author: "Mohamed",id: 2},
        {title: "Welcome to MY ZOO", body:'lorem ipsum...', Author: "Abraham",id: 3}
    ]);

    return (
        // Key is used as an attribute to keep track of each item inside each obj
        <div className="Home">
            
            {blogs.map((blog) => 
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: { blog.Author}</p>
                </div>
            )}
        </div>
    );
}

export default Home;


