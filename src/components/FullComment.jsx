import axios from 'axios';
import { useEffect, useState } from 'react';

const FullComment = ({ commentId }) => {
	const [
		comment,
		setComment,
	] = useState(null);

	useEffect(
		() => {
			if (commentId) {
				axios
					.get(`http://localhost:3001/comments/${commentId}`)
					.then((res) => setComment(res.data))
					.catch();
			}
		},
		[
			commentId,
		],
	);

	const deleteHandler = () => {
		axios
			.delete(`http://localhost:3001/comments/${commentId}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
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
