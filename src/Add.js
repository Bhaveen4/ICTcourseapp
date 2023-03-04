
import { Edit } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useForm from './FormLogic'
import { useLocation, useNavigate } from 'react-router-dom'





const Add = () => {


  const location = useLocation()
  const {value,isEdit} = location.state

  let navigate = useNavigate();

  
  
          

  const [course, setcourse] = useForm(
    value
      ? {
          _id: value._id,
          cName: value.cName,
          cDesc: value.cDesc,
          cDuration: value.cDuration,
          cStartdate: value.cStartdate,
        }
      : { cName: '', cDesc: '', cDuration: 0, cStartdate: '00-00-0000' }
  );
  


  

    const addCourse=() =>{
        
        axios.post("http://localhost:3002/create",course)
        .then((response)=>{
            console.log(response.data);
            navigate('/')
        })

    }

    const editCourse=() =>{
      console.log("course",course)  
      axios.post("http://localhost:3002/update",course)
      .then((response)=>{
          console.log(response.data);
          navigate('/')
      })
 
  }
    
  return (
    <div>
      <Typography variant='h3'>{isEdit ? "Edit Course" : "Add Course"}</Typography>
      <TextField name='cName' value={course.cName} onChange={setcourse} variant='outlined'  label='Course Name' fullWidth margin='normal' />
      <TextField name='cDesc' value={course.cDesc} onChange={setcourse} variant='outlined' label='Course Description' fullWidth margin='normal' />
      <TextField name='cDuration' value={course.cDuration} onChange={setcourse} variant='outlined' label='Course Duration' fullWidth margin='normal' />
      <TextField name='cStartdate' value={course.cStartdate} onChange={setcourse} type='date' variant='outlined' label='Course StartDate' fullWidth margin='normal' />
      <Button onClick={isEdit ? editCourse : addCourse} style={{ maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} variant='contained' color='primary' fullWidth>{isEdit ? "Edit" : "Add"}</Button>



    </div>
  )
}

export default Add
