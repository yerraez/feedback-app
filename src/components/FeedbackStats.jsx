
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
    //Expresion Regular
    average = average.toFixed(1).replace(/[.,]0$/, '')
   
    return(
        <div className='feedback-stats'>
            <h4>{feedback.length} Comentarios</h4>
            <h4>Puntaje promedio: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
    }

export default FeedbackStats