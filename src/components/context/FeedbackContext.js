import React, {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const[feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false,
            
        }
    )
    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:4000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

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
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
    
}
export default FeedbackContext