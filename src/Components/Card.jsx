import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-45 bg-white rounded'>
          <img src={props.elem.download_url} alt="" className='h-full w-full object-cover' /> 
          </div>
          <h2>{props.elem.author}</h2>
      </a>
    </div>
  )
}
export default Card
