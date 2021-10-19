
const FullComment = ({comment}) => {
    return ( 
        <div className='box'>
            <h5>Full Comment</h5>
            <div className='column'>
                <p>Name:{comment.name}</p>
                <p>Email:{comment.email}</p>
                <p> Body : {comment.body}</p>
                </div>    
           

        </div>
     );
}
 
export default FullComment;