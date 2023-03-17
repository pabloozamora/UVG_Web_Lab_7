import React from 'react'
import './MessageSquare.css'

const MessageSquare = ({ icon, title, description, link, linkText }) => (
    <div className = "square">
        <img id = "icon" src={icon}></img>
        <h1>{title}</h1>
        <p>{`${description} `}
        <a href={link}>{linkText}</a>
        </p>
    </div>
  )

export { MessageSquare }