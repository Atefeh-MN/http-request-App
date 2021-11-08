import { useState, useEffect } from 'react';
import Comment from './Comment';
import FullComment from './FullComment';
import NewComment from './NewComment';
import { toast } from 'react-toastify';
import { getAllComment } from '../services/getAllComment';

const HttpApp = () => {
	const [
		comments,
		setComments,
	] = useState(null);
	const [
		selectedId,
		setSelectedId,
	] = useState(null);
	const [
		error,
		setError,
	] = useState(false);
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

	const selectedIdHandler = (id) => {
		setSelectedId(id);
	};
	
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
				return <Comment key={c.id} name={c.name} email={c.email} onClick={() => selectedIdHandler(c.id)} />;
			});
		}
		return renderValue;
	};

	return (
		<main>
			<section className='container'>{renderComments()}</section>
			<section className='container'>
				<FullComment commentId={selectedId} setComments={setComments} setSelectedId={setSelectedId} />
			</section>
			<section className='container'>
				<NewComment setComments={setComments} />
			</section>
		</main>
	);
};

export default HttpApp;
