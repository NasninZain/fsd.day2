import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount] = useState(0)

    const incBtn = ()=>{
        setCount(count+1)
    }

    const decBtn = ()=>{
        if(count>0)
        setCount(count-1)
    }

  return (
    <div>
      <Typography>Count : {count}</Typography>
      <Button variant='contained' color='success' onClick={incBtn}>+</Button> &nbsp; &nbsp;
      <Button variant='contained' color='error' onClick={decBtn}>-</Button>
    </div>
  )
}

export default Counter

