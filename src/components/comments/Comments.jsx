import { useState, useEffect } from 'react';
import Comment from './Comment';
import { toast } from 'react-toastify';
import { getAllComment } from '../../services/getAllComment';
import { Link } from 'react-router-dom';

const CommentsList = () => {
	const [comments,setComments] = useState(null);
	const [error, setError] = useState(false);
	

	useEffect(() => {
		const getComment = async () => {
			try {
				const { data } = await getAllComment();
				setComments(data);
			} catch (error) {
				console.log('error');
				setError(true);
			}
		};
		getComment();
	}, []);
	const renderComments = () => {
		let renderValue = <p>loading ....</p>;
		if (error) {
			renderValue = <p>fechting not valid</p>;
			toast('there is an error', {
				position  : 'top-right',
				autoClose : 5000,
				type      : 'error',
				theme     : 'colored',
			});
		}
		if (comments && !error) {
			renderValue = comments.map((c) => {
				return (
					<Link to={`/comment/${c.id}`} key={c.id}>
					<Comment name={c.name} email={c.email} />
					</Link>
				);
			});
		}
		return renderValue;
	};

	return <section className='container'>{renderComments()}</section>;

};

export default CommentsList;
