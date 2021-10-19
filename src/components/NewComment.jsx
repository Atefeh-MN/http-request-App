
const NewComment = () => {
    return ( 
    <div className=' box '>
       
          <h5>New Comment</h5>
        <form onSubmit={(e)=>e.preventDefault()} >
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder='Enter your Name' />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div>
            <label htmlFor="content">Content</label>
            <input type='textarea' />
            </div>
            <button>Add</button>
        </form>
  

    </div> );
}
 
export default NewComment;