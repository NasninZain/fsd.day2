import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState(0)

    const changeHname = ()=>{
        setName("Home")
    }

    const changeCname = ()=>{
        setName("Contact")
    }

    const changeGname = ()=>{
        setName("Gallery")
    }

    useEffect(()=>{
        changeHname()
    },[])
  return (
    <div>
      <Typography>Welcome To {name} </Typography>
      <Button variant='contained' onClick={changeHname}>HOME</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeCname}>CONTACT</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeGname}>GALLERY</Button>
    </div>
  )
}

export default UseE
