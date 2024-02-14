import React from 'react'
import { useState } from 'react'

function Use() {
    const [resourceType,setResourceType] = useState('post')
  return (
    <div>
      <button onClick={()=>setResourceType('Post')} >Posts</button>
      <button onClick={()=>setResourceType('User')}>Users</button>
      <button onClick={()=>setResourceType('Comments')}>Comments</button>
      <p>{resourceType}</p>
    </div>
  )
}

export default Use