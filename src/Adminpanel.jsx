import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Adminpanel() {

     const [store,setStore] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:5002/emp_details')
                .then((res) => { return res.json() })
                .then((data) => {
                    setStore(data)
                })
        },)

        const handleDelete = (id)=>{
          console.log(id)
          fetch(`http://localhost:5002/emp_details/`+id,{
            method:"delete",
            headers:{"content-type":"application/json"},
        })
      }

  return (
    <div>
        <div className="center">
        <Link to="/" id='back-btn'>Go Back</Link>
        </div>
        <div className="center">
        <h3>Welcome Admin Panel</h3>
        </div>

        <div className="admin-section">
          
            <div className="admin-card">
               <h5>Add New Profile</h5>
               <Link to='/add' id='profile-btn'>ADD</Link>
            </div>
        </div>

        <div className="center">
        <h5>All Profile View and  Edit/Delete</h5>
        </div>
        
                <div className="hero-section">
                    {store.map((emp)=>(
                        <div className="profile-card" key={emp.id}>
                        <img src={emp.img} id='profile-img' alt='img'/>
                        <div className="profile-inner">
                        <p id='profile-text'>{emp.name}</p>
                        <p id='profile-email'>{emp.email}</p>
                        <div className="btns">
                        <Link to={`/edit/${emp.id}`} id='profile-btn'>
                        Edit
                        </Link>
                        <button id='profile-btn'  onClick={()=>{handleDelete(emp.id)}}>
                        Delete
                        </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
 


      {/* <div className="form-div">
        <form action="submit" className='form'>
        <div className="center">
        <h5>Login</h5>
        </div>
           <input type="email" placeholder='Enter Email'/>
           <input type="password" placeholder='Enter Password'/>
           <button>Login</button>
        </form>
      </div> */}
      
    </div>
  )
}

export default Adminpanel
