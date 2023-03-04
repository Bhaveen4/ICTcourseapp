import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 
const CourseView = () => {




  

  var [course, setcourse] = useState([]);

  useEffect(() => {
      fetchCourse();
  },[]);

   
    
  

  const fetchCourse = () => {
    axios.get("http://localhost:3002/view")
      .then((response)=> {
        console.log(response.data)
        setcourse(course = response.data);
      })
  }

  const deleteCourse = (id) => {
   const data = {"_id": id}
   axios.post("http://localhost:3002/delete", data)
   .then((response)=> {
    console.log(response.data)
     alert("Successfully Deleted!!");
     fetchCourse();

   })



  }

  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Name</StyledTableCell>
            <StyledTableCell align="right">Course Description</StyledTableCell>
            <StyledTableCell align="right">Course Duration</StyledTableCell>
            <StyledTableCell align="right">Course StartDate</StyledTableCell>
            <StyledTableCell align="right"> Delete Course</StyledTableCell>
            <StyledTableCell align="right"> Edit Course</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {course.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{value.cName}</StyledTableCell>
              <StyledTableCell align="right">{value.cDesc}</StyledTableCell>
              <StyledTableCell align="right">{value.cDuration}</StyledTableCell>
              <StyledTableCell align="right">{value.cStartdate}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>{ deleteCourse(value._id) }}  variant='contained' color='error' >Delete</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant='contained' color='error'  > <Link to='/create' state = {{value:value,isEdit:true}} >Edit</Link> </Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default CourseView
