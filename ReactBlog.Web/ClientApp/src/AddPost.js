import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { produce } from 'immer';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { getDate } from 'date-fns';

const AddPost = () =>{
   
    const [post, setPost]  = useState({title: '', text:''});
    

    const history = useHistory();

 

    const onAddClick = async () => {
       await axios.post('/api/home/addpost', post);
       history.push('/');
       
    }
    const onTextChange = (e) => {
        const copy = {...post};
        copy[e.target.name] = e.target.value;
        setPost(copy);
        };
  
   
    return(
        <>
        <div className="row">
    <div className="col-md-8 offset-md-2 jumbotron">
        
            <input type="text" className="form-control" placeholder="Title" onChange={onTextChange} name="title" />
            <br />
            <textarea name="text" placeholder="What's on your mind?" className="form-control" onChange={onTextChange} rows="20"></textarea>
            <br />
            <button className="btn btn-primary" onClick={onAddClick}>Submit Post!</button>
        
    </div>
</div>
        </>
    )
}
export default AddPost;