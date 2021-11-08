import './home.css';
// import {useState , useEffect} from 'react'
import { BlogList } from '../../Components/Blog-list/Blog-list';
import { useFetch } from '../../Hooks/useFetch';

export const Home = () => {

     const {data : blogs , pending , error , get} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="content">
            {error && <div> {error} </div>}
            {pending && <div>loading .....</div>}
            {blogs && <BlogList blogs={blogs} refetchBlogs= {get} title="All Blogs!"/>}
            
            {/* {data && <BlogList blogs={data} title="All Blogs!" handelDelete={handelDelete}/>} */}
        </div>
     );
}
 
// export default Home;