import { useState } from 'react'
import './App.css'
import data from './assets/data.json'

import Comment from './components/Comment'
import Replay from './components/Replay'

function App() {
  const [comment, setComment] = useState(data.comments)
  
  const deleteComment = (id) =>  {
    // setComment(comment.map(d => d.replies.filter(dd => dd.id != id)))
    console.log('comment: ', comment)
    let d = comment.map(d => d.replies.filter(dd => dd.id != id))
    console.log('after: ', d)
  }

  return (
    <>
      <div className='container mx-auto'>
      {
      comment.map(d => {
         return(
          <>
            <Comment remov={deleteComment} cu={data.currentUser} comments={d} />
            
          </>
         )
      })
      } 
      <Replay currentUser={data.currentUser} />
      </div>
    </>
  )
}

export default App
// if(d.replies.length == 0){
//   console.log(d);
//   <Comment comments={d} />;
// }else {
//   <Comment comments={d} />
// <Comment comments={d} />; */
// }