
import BlogList from "./BlogList";
import UseData from "./UseData";

const Home = () => {
    //  let name = 'snju'
        // const deleteItems = (id) => {            /// deletItem funciton
        // let newBlock = blog.filter((blog) => blog.id !== id)
        // 
    // }

     let {blog, load, err} = UseData('http://localhost:5000/blogs')

    return (
        <div className="homeContain">
            {err && <div className="errmsg" style={{
                color:'red'
            }}>{err}</div>}
            { load && <p>loading</p>}
            {blog&&<BlogList blog={blog} title='blogsList'/>}
            {/* <List blog={blog.filter((blog) => blog.author === 'sanju')} title='sanju blogs' deleteItems={deleteItems} /> */}
            {/* <button onClick={() => setName('anju')}>changeName</button> */}
            {/* <p>{name}</p> */}
        </div>

    );

}
export default Home;