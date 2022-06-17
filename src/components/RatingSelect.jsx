import React, {useState, useContext, useEffect} from 'react'
import FeedbackContext from './context/FeedbackContext'


function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)

    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=> {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    
  return (
 <ul className='rating'>
    <li>
        <input 
        type='radio' 
        id='num1' 
        name='rating' 
        value='1' 
        onChange={handleChange} 
        checked={selected === 1} />
        <label htmlFor='num1' className='ColorRankingPoor'>1</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num2' 
        name='rating' 
        value='2' 
        onChange={handleChange} 
        checked={selected === 2} />
        <label htmlFor='num2' className='ColorRankingPoor'>2</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num3' 
        name='rating' 
        value='3' 
        onChange={handleChange} 
        checked={selected === 3} />
        <label htmlFor='num3' className='ColorRankingFair'>3</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num4' 
        name='rating' 
        value='4' 
        onChange={handleChange} 
        checked={selected === 4} />
        <label htmlFor='num4' className='ColorRankingFair'>4</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num5' 
        name='rating' 
        value='5' 
        onChange={handleChange} 
        checked={selected === 5} />
        <label htmlFor='num5' className='ColorRankingAverage'>5</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num6' 
        name='rating' 
        value='6' 
        onChange={handleChange} 
        checked={selected === 6} />
        <label htmlFor='num6' className='ColorRankingAverage'>6</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num7' 
        name='rating' 
        value='7' 
        onChange={handleChange} 
        checked={selected === 7} />
        <label htmlFor='num7' className='ColorRankingHappy'>7</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num8' 
        name='rating' 
        value='8' 
        onChange={handleChange} 
        checked={selected === 8} />
        <label htmlFor='num8' className='ColorRankingHappy'>8</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num9' 
        name='rating' 
        value='9' 
        onChange={handleChange} 
        checked={selected === 9} />
        <label htmlFor='num9' className='ColorRankingExcellent'>9</label>
    </li>
    <li>
        <input 
        type='radio' 
        id='num10' 
        name='rating' 
        value='10' 
        onChange={handleChange} 
        checked={selected === 10} />
        <label htmlFor='num10' className='ColorRankingExcellent'>10</label>
    </li>
 </ul> 
      )
}

export default RatingSelect