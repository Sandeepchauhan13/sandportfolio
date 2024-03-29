import React, { useState } from 'react'
import{FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
import moment from 'moment';


const NavBar = (props) => {
  const [nav, setNav] = useState(false);
 
  
    const link =[
        {
            id : 1,
            link:'home'
        },
        {
            id : 2,
            link:'about'
        },
        {
            id : 3,
            link:'portfolio'
        },
        {
            id : 4,
            link:'experience'
        },
        {
            id : 5,
            link:'contact'
        },
    ]
  return (
    <>
      <div className="flex justify-between items-center text-white capitalize px-4 h-20 w-full bg-black fixed ">
        <div>
<h1 className="font-signature text-5xl ml-2">sandeep</h1>
        </div>
        <div >
        <i className="clock">{moment().format('MMMM Do YYYY, h:mm:s a')}</i>
        </div>

 {/* darkmode icons here  */}
 <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={props.toggleMode}  />
 
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-7 h-7"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-7 h-7"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
       
        <ul className=" hidden md:flex">
      {link.map(({id, link})=>(
        <li key={id} className="px-4 text-gray-400 cursor-pointer font-medium hover:scale-105 duration-200 hover:bg-sky-700 capitalize" >
        {/* <Link to = {link} smooth duration={500}> {link} </Link>  </li> */}
        <Link to={link} smooth duration={500}>{link}</Link></li>
      ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30}/>:<FaBars size={30} />}
        </div>
        {nav && (
  // flex-col means flex direction of column
 <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
 to-gray-800 text-gray-500">
   {link.map(({id,link}) =>(

<li key={id} className="px-4 cursor-pointer capitalize py-6  text-4xl">
<Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link> </li>

))}
</ul>
)}
    
      </div>
     
    </>
  )
}

export default NavBar
