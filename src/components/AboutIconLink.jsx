import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* <Link to={{
            pathname: '/about',
            search:'?sort=name',
            hash:'#hello',
        }}> */}
        <Link to='/about'>
            <FaQuestion size={30}></FaQuestion>
         </Link>
        
    </div>
  )
}

export default AboutIconLink