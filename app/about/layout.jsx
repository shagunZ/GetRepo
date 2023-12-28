import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Personalised Github</h1>
        {children}
    </div>
  )
}

export default AboutLayout
