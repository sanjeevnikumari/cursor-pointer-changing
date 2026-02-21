import React from 'react'
import { useState } from 'react'

const Products = ({name}) => {
      const [a,b]=useState(false)
  return (
    <div>
      <h1>{a==false?"hello":"hiiii"}</h1>
      <button onClick={()=>b(!a)}>click</button>
    </div>
  )
}

export default Products
