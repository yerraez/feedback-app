import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"
import React, { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from './context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.leght === 0){
        return <p>No exite ningun comentario</p>
    }
    return (
        <div claasname='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div 
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))
                }
            </AnimatePresence>
        </div>
      )
//   return (
//     <div claasname='feedback-list'>
//         {feedback.map((item) => (
//             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//         ))
//         }
//     </div>
//   )
}

export default FeedbackList