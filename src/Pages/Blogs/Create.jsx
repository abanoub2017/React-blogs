import "./style/create.css";
import { useState } from "react";
import { useHistory } from "react-router-dom"
export const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();

    const handelSubmit  = (e) => {
        e.preventDefault();
        setIsPending(true)
        const blog = { title , body , author}
        fetch('http://localhost:8000/blogs' , { 
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then( () => {
            setIsPending(false)
            console.log('Add New Blog');
            // history.go(-10)
            history.push('/')
        })

        
    }

    return (
        <div className="create">
            <h2> Add New Blogs</h2>
            <form onSubmit={handelSubmit}>
                <label>Blog Title:</label>
                <input type="text" name="title"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog Body:</label>
                <textarea name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}                
                ></textarea>
                <label>Blog Author:</label>
                <select name="author"
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="abanoub">Abanoub</option>
                    <option value="fam">Fam</option>
                    <option value="marina">Marina</option>
                </select>

                {!isPending &&  <button> Add Blog </button>} 
                {isPending &&  <button disabled> Adding blog.... </button>} 

            </form>
              <p> { title }  </p>
              <p> {body} </p>
              <p> {author } </p>
        </div>
    );
};

// export default Create;
