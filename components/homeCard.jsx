import React from 'react'
import "../css/home.css"
const homeCard = (props) => {
  return (
    <div className='h-full grid gap-4 bg-white text-start p-10 mt-8 ml-2 homeCardMain'>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-browser-edge text-blue-600" viewBox="0 0 16 16">
  <path d={props.path}/>
  <path d={props.path2}/>
  <path d={props.path3}/>
</svg>
<h4 className='font-bold text-lg'>{props.title}</h4>
<p>{props.pText}</p>
    </div>
  )
}

export default homeCard
