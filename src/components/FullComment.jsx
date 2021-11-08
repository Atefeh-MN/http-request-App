import axios from 'axios';
import { useEffect, useState } from 'react';
import { deleteComment } from '../services/deleteComment';
import { getAllComment } from '../services/getAllComment';
import { getComment } from '../services/getComment';


const FullComment = ({ commentId, setComments, setSelectedId }) => {
	const [
		comment,
		setComment,
	] = useState(null);

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
			const { data } = await getAllComment();
			setComments(data);
			setSelectedId(null);
			setComment(null);
		} catch (err) {}
	};

	let commentDetail = <p>please select a comment</p>;

	if (commentId) commentDetail = <p>Loading ...</p>;

	if (comment) {
		commentDetail = (
			<div className='box'>
				{/* <h5>Full Comment</h5> */}
				<div className='column'>
					<p>{comment.name}</p>
					<p>{comment.email}</p>
					<p>{comment.body}</p>
					<button className='delete' onClick={deleteHandler}>
						Delete
					</button>
				</div>
			</div>
		);
	}

	return commentDetail;
};

export default FullComment;
