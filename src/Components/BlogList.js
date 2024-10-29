const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    return (
        <div className="blog-list">
            {blogs.map((blog) => 
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.Author}</p>
                </div>
            )}

        </div>
    );
} 
export default BlogList;

// Another Way to passing the data from different components.
/* 
    const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => 
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.Author}</p>
                </div>
            )}

        </div>
    );
} 
export default BlogList;
*/


