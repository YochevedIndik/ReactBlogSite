import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostRow from './PostRow';
import { Link, useParams } from 'react-router-dom';


const Home = () =>{
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
    const params = useParams();
    const page = parseInt(params.page) || 1;
  
    const pageAmount = 3;

    useEffect(() =>{
        const getPosts = async() =>{
            const { data }  = await axios.get(`/api/home/getposts?pageNumber=${page}`);
            setPosts(data);
            
        }
        const getTotalPosts = async() =>{
            const {data} = await axios.get('/api/home/gettotalposts');
            setTotal(data);
        }
        getPosts();
        getTotalPosts();
    }, [page]);
    const isFirst = () => page ===1;
    const isLast = () =>{
        const x = (page - 1) * pageAmount;
        const y = x + pageAmount;
        return y >= total;
    }

    

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h1 className='my-4'>
                        Welcome to my Blog!
                    </h1>
                    {posts.map(b => <PostRow post={b} key={b.id}/>)}
                    <ul className="pagination justify-content-center mb-4">
                    {!isLast() && <li className="page-item">
                        <Link className="page-link" to={`/page/${page + 1}`}>&larr; Older</Link>
                    </li>}
                    {!isFirst()  &&
                    <li className="page-item">
                        <Link className="page-link" to={`/page/${page - 1}`}>Newer &rarr;</Link>
                    </li>
                    }
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;