import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Creates = () => {
    let [title, setTitle] = useState('')
    let [body, setbody] = useState('')
    let [auhter, setauther] = useState('')
    let [loading,setloading] = useState(false)
    
    const history = useHistory()
    function handelSubit(e) {
        e.preventDefault()
        const Blogs = { title, body, auhter }
        console.log(Blogs)
        setloading(true)
        fetch('http://localhost:5000/blogs', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(Blogs)

        }).then(() => {
            console.log('new blog added')
            setloading(false)
            setTitle('')
            setbody('')
            setauther('')
            history.push('/')
           
        })
    }
    return (
        <div className="create">
            <h1>Creat a new blog</h1>
            <form onSubmit={handelSubit}>
                <label> Blog title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body</label>
                <textarea
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                >
                </textarea>

                <label>Blog auuther</label>
                <select
                    value={auhter}
                    onChange={(e) => setauther(e.target.value)}
                >
                    <option value="sanju">sanju</option>
                    <option value="anju">anju</option>
                    <option value="vishnu">vishnu</option>
                </select>

                {!loading&&<button>Add Blog</button>}
                {loading&&
                  setTimeout(()=>{
                    <button disabled>Adding....</button>
                  },2000)
                }
                
            </form>
        </div>
    );
}

export default Creates