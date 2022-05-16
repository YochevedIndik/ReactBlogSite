import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const PostRow = ({post}) =>{
    const {id, title, text, dateCreated} = post;

    const showText = text.substring(0, 200);

    
    return (
        <>
        <div className='card mb-4'>
            <div className='card-body'>
              <h2 className='card-title'>
                <Link to={`/blogpage/${id}`}>
                    {title}
                </Link>
                </h2>
              <p className='card-text'>{showText}...</p>
              
              <Link to={`/blogpage/${id}`}>
                    <button className='btn btn-primary'>Read more</button>
                </Link>

            </div>
            <div className='card-footer text-muted'>
                Posted on {format(new Date(dateCreated), 'EEEE LLLL do, R')}
            </div>
        </div>
        </>
    )
}
export default PostRow;
