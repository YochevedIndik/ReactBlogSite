import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from "axios";

const AddCommentForm =() =>{
    const [comment, setComment] = useState({name:'', text:''});
    const {id} = useParams();
    const {name, text} = comment;
    const history = useHistory();

    const onTextChange = (e) => {
        const copy = {...comment};
        copy[e.target.name] = e.target.value;
        setComment(copy);
        };
        const onAddClick = async() =>{
          await axios.post('/api/home/addcomment', {name, text, postId: id});
            setComment({name:name, text:''});
            console.log('clicked');
         history.push('/');
             
            
        }
        return(
           <>
            <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
            
                
                <div className="form-group">
                    <input onChange={onTextChange} type="text" value={name} placeholder="Please enter your name" className="form-control" name="name" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Type your comment here but remember to be be nice..." onChange={onTextChange} name="text" className="form-control" rows="3"></textarea>
                </div>

                <button onClick={onAddClick}  className="btn btn-primary">Submit</button>

                    </div>
                </div>
    </>
            
        )
  
}
                
export default AddCommentForm;