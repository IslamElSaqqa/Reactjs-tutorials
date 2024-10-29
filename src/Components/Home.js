import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My New React Website", body:'lorem ipsum...', Author: "Islam",id: 1},
        {title: "Welcome to My Party", body:'lorem ipsum...', Author: "Mohamed",id: 2},
        {title: "Welcome to MY ZOO", body:'lorem ipsum...', Author: "Abraham",id: 3}
    ]);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" />
            
        </div>
    );
}

export default Home;


