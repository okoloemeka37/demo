import React from 'react'
import "../styles/etc.css"
export default function Button({con,bg}) {
 
  return (
    <div className={'but '+bg}>
        {con}
    </div>
  )
}
