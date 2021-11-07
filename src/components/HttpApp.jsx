import { useState, useEffect } from 'react';
import Comment from './Comment';
import FullComment from './FullComment';
import NewComment from './NewComment';
import axios from 'axios';

const HttpApp = () => {
	const [ comments, setComments ] = useState(null);
	const [ selectedId, setSelectedId ] = useState(null);

	// useEffect(() => {
	//     axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
	//         setComment(response.data.slice(0,4))
	//     }).catch((error)=>{
	//         console.log('error')
	//     })
	// }, []);
	useEffect(() => {
		const getComment = async () => {
			try {
				const { data } = await axios.get('http://localhost:3001/comments');
				setComments(data.slice(0, 4));
			} catch (error) {
				console.log('error');
			}
		};
		getComment();
	}, []);

	const selectedIdHandler = (id) => {
		setSelectedId(id);
	};
	return (
		<main>
			<section className='container'>
				{comments ? (
					comments.map((c) => {
						return (
							<Comment key={c.id} name={c.name} email={c.email} onClick={() => selectedIdHandler(c.id)} />
						);
					})
				) : (
					<p>Loading ...</p>
				)}
			</section>
			<section className='container'>
				<FullComment commentId={selectedId} />
			</section>
			<section className='container'>
				<NewComment />
			</section>
		</main>
	);
};

export default HttpApp;
