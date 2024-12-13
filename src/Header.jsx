import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Header() {

    const [store,setStore] = useState([])

    useEffect(() => {
        fetch('http://localhost:5002/emp_details')
            .then((res) => { return res.json() })
            .then((data) => {
                setStore(data)
            })
    }, [])

  return (
    <div>
      <section className='header'>
      <div className="center">
        <h3>All Profile</h3>
        </div>
        <div className="hero-section">
            {store.map((emp)=>(
                <div className="profile-card" key={emp.id}>
                <img src={emp.img} id='profile-img' alt='img'/>
                <div className="profile-inner">
                <p id='profile-text'>{emp.name}</p>
                <p id='profile-email'>{emp.email}</p>
                <div className="btns">
                <button id='profile-btn'>Summary</button>
                <Link to={`/view/${emp.id}`} id='profile-btn'>
                View Profile
                </Link>
                </div>
                </div>
            </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Header
