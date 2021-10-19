
import { useState } from 'react';


const Comment = ({name,email}) => {
 
    return ( 
    <div className='comment'>
       
 
           <p>Name : {name}</p>
           <p>Email : {email}</p>
        
    
    </div>
     );
}
 
export default Comment;