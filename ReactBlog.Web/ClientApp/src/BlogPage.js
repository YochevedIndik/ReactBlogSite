import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';
import format from 'date-fns/format';
import Comments from "./Comments";
import AddCommentForm from "./AddCommentForm";

const BlogPage = () => {
    const [post, setPost] = useState({title:'', text:'', dateCreated: new Date()});
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const history = useHistory();

    useEffect(() => {
const  getPost = async() =>{
    const {data} = await axios.get(`/api/home/getpost?id=${id}`);
   setPost(data);
}
const getComments = async() =>{
    const {data} = await axios.get(`/api/home/getcomments?id=${id}`);
    setComments(data);

}
getPost();
getComments();

    }, [id]);

   
    const {title, text, dateCreated} = post;
    return(
        <>
       <div className="col-lg-8">
           <h1 className="mt-4">{title}</h1>
           
           <p className="lead">
               by Yocheved Indik
           </p>
           
           <p>Posted on {format(new Date(dateCreated), 'EEEE LLLL do, R')}</p>
 
           
           <div>
               <p>{text}</p>
           </div>
           <AddCommentForm/>
           
           {comments?.map(c => <Comments comment={c} key={c.id}/>)}
       </div>

        </>
    )
}
export default BlogPage;