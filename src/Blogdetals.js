import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseData from "./UseData";

const Blogdetals = () => {
    const { id } = useParams()
    let { blog, load, err } = UseData(`http://localhost:5000/blogs/${id}`)
    const history = useHistory()

    const handleDel = ()=>{
        fetch(`http://localhost:5000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            console.log('blog deletes')
            history.push('/')
            

        })
    }
    return (
        <div className="Blogdetalss">
            {err && <div className="err">
                {err}
            </div>}
            {load && <div>..loading</div>}
            {blog && (
                <div className="blog">
                    <h1>{blog.title}</h1>
                    <h3>{blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleDel} className="delete">Delete</button>
                </div>
            )}
        </div>
    );
}

export default Blogdetals 