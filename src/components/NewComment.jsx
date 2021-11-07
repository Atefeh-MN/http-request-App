import axios from 'axios';
import { useState } from 'react';

const NewComment = ({onAddPost}) => {
	const [
		comment,
		setComment,
	] = useState({ name: '', email: '', body: '' });

	const changeHandler = (e) => {
		setComment({...comment,[e.target.name]: e.target.value })
	}

	
	return (
		<div className=' box column'>
			<h3>Add New Comment</h3>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='formcontrol'>
					<label htmlFor='name'>name</label>
					<input type='text' name='name' placeholder='Enter your Name' onChange={changeHandler} />
				</div>
				<div className='formcontrol'>
					<label htmlFor='email'>email</label>
					<input type='email' name='email' placeholder='Enter your email' onChange={changeHandler} />
				</div>
				<div className='formcontrol'>
					<label htmlFor='body'>body</label>
					<textarea type='textarea' name='body' onChange={changeHandler} />
				</div>
				<button onClick={()=>onAddPost(comment)}>add new comment</button>
			</form>
		</div>
	);
};

export default NewComment;
