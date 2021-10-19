import { useState,useEffect } from "react";
import Comment from "./Comment";
import FullComment from './FullComment';
import NewComment from "./NewComment"; 
import axios from 'axios'

const HttpApp = () => {
    const [comment,setComment]=useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/comments').then((response)=>{
    //         setComment(response.data.slice(0,4))
    //     }).catch((error)=>{
    //         console.log('error')
    //     })
    // }, []);
    
    useEffect(()=>{
        const getComment=async()=>{
        try{
         const {data}= await axios.get('https://jsonplaceholder.typicode.com/comments');
         setComment(data.slice(0,4))
        }catch(error){

            console.log('error')
        }};
        getComment();
    },[])
    return ( 
        <main>
            <section className='container'>
             {comment.length?comment.map((c)=>{return( <Comment key={c.id} name={c.name} email={c.email} />)}):<p>Loading ...</p>}   
           
            </section >
            <section className='container'>
           <FullComment comment={comment}/>
           </section>
           <section className='container'>
           <NewComment/>
           </section>
        </main>
     );
}
 
export default HttpApp ;