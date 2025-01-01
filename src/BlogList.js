import { Link } from "react-router-dom";

const BlogList = ({ blog, title }) => {
    console.log(blog);
    return (

        <div className="blog-list">
            <h1>{title}</h1>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                        <h3>{blog.author}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;