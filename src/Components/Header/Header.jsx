import React from 'react'
import './Header.css'
function Header() {
  return (
    <header>
        {/* Profile Photo  */}
        <nav>
            <a href="https://github.com/AHADBAVA"><img src="public/Assets/Icons/github.svg" alt="" /></a>
            <a href="https://www.linkedin.com/in/abdulahad-s-b194bb283/"><img src="public/Assets/Icons/linkedin-v1-fill.svg" alt="" /></a>
            <a href="https://www.upwork.com/freelancers/~01af620bf7ffc4bbd0"><img src="public/Assets/Icons/upwork.svg" alt="" /></a>
            <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage&_ga=2.35502689.1732029216.1705554559-1051178556.1701676464&_gac=1.225400296.1701676471.Cj0KCQiA67CrBhC1ARIsACKAa8SEorWFrJ46xXrClegMjC8zsG0TvaxupbNWGi5Kg3N9Y1BsT7i8nVQaAgiHEALw_wcB"><img src="public/Assets/Icons/indeed.svg" alt="" /></a>
        </nav>
        <a href="https://github.com/AHADBAVA"><img className='profile-photo' src="public/Assets/Images/IMG_1579.png" alt="" /></a>
    </header>
  )
}

export default Header
