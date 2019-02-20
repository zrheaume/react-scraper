import React from "react"

function Col(props) {
   return (
      <div className={`${props.sm ? `col-sm-${props.sm}` : ''} ${props.lg ? `col-lg-${props.lg}` : ''}`}>
         {props.children}
      </div>
   )
}

export default Col