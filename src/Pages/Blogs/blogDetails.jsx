import './style/blogDetails.css';
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch';
export const BlogDetails = () => {

    const { id } = useParams()
    const {data : blog , pending , error} = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div>
            {error && <div> {error} </div>}
            {pending && <div>loading .....</div>}
            {blog && (
                <article>
                    <h3> { blog.title } </h3>
                    <p> Written by { blog.author } </p>
                    <p> { blog.body } </p>

                </article>
            )}
        </div>
    )
}

// export default BlogDetails;