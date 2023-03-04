import logo from './logo.svg';
import './App.css';

import Nav from './Nav';
import CourseView from './CourseView';
import Add from './Add';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
        <Route path='/' element={<CourseView />} ></Route>
        <Route path='/create' element={<Add />} ></Route>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
