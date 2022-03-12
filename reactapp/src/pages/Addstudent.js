import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Student extends Component 

{
  render (){
      return (
        <div className='container'>
         <div className='row'>
         <div className='col-lg-12'>
         <div className='card'>
         <div className='card-header'>
        <h2>
        <Link to={'/'}>Student</Link>
            
            <Link to={'add-student'} className='btn btn-success float-end'>Add Student</Link>
        </h2>

        </div>
        <div className='card-body'>
        
        </div>
        </div>
        </div>
        </div>
        </div>
      );
  }
}

export default Student;