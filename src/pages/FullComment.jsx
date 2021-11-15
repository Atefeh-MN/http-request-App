
import { useEffect, useState } from 'react';
import { deleteComment } from '../services/deleteComment';
import { getComment } from '../services/getComment';


const FullComment = ({history,match }) => {
	const commentId = match.params.id;
	const [comment,setComment] = useState(null);

	useEffect(() => {
		const getSelectComment = async () => {
			if (commentId) {
				try {
				
					const { data } = await getComment(commentId);
					setComment(data);
				}
			
				catch (err) { };
			}
		}
	
		getSelectComment();
	},
		[
			commentId,
		],
	);

	const deleteHandler = async () => {
		try {
			await deleteComment(commentId);
			history.push('/')
			setComment(null);
		} catch (err) {}
	};

	let commentDetail = <p>please select a comment</p>;

	if (commentId) commentDetail = <p>Loading ...</p>;

	if (comment) {
		commentDetail = (
			<div className='box column'>
				 <h3 className='header'>Full Comment</h3> 
					<p>Name:{comment.name}</p>
					<p>Email :{comment.email}</p>
					<p>comment: {comment.body}</p>
					<button className='delete' onClick={deleteHandler}>
						Delete
					</button>
			</div>
		);
	}

	return commentDetail;
};

export default FullComment;
