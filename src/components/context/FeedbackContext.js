import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
            {
                id: 1,
                text: 'This feedback item 1',
                rating: 10,

            },
            {
                id: 2,
                text: 'This feedback item 2',
                rating: 4,

            },
            {
                id: 3,
                text: 'This feedback item 3',
                rating: 3,

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
        if(window.confirm('Are you sure you want to delete?'))
        {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }
      //Edit feedback
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
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
    
}
export default FeedbackContext