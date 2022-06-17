import React, {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
            {
                id: 1,
                text: 'Agradable experiencia, muy recomendado',
                rating: 10,

            },
            {
                id: 2,
                text: 'Fue una buena experiencia, sin embargo agradeceria puntualidad',
                rating: 8,

            },
            {
                id: 3,
                text: 'El producto no cumple mis expectativas',
                rating: 5,

            }
        ])
    const[feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false,
            
        }
    )
    //Add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
      }

      // Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('¿Estas seguro que deseas eliminar el comentario?'))
        {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
    
    const updateFeedback = (id, upItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item)))
    }

      //Set item to be updated
      const editFeedback = (item) => {
          setFeedbackEdit({
              item,
              edit: true
          })
      }


    return <FeedbackContext.Provider value={{ 
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    
}
export default FeedbackContext