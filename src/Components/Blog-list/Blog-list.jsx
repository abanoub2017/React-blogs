import { Link } from "react-router-dom";


export const BlogList = ({blogs , title , refetchBlogs}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    const handelDelete = (id) => {
          fetch(`http://localhost:8000/blogs/${id}` , { 
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"},
        }).then( () => {
            console.log('Deleted');
            refetchBlogs()           
        })
    }


    return ( 
        <div className="blog-list">
           <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2> {blog.title} </h2>
                        <p> Write by {blog.author} </p>
                    </Link>
                    <button onClick={() => handelDelete(blog.id)}>Delete Blog</button>
                </div>
           ))}
        </div>
     );
}
 
// export default BlogList;