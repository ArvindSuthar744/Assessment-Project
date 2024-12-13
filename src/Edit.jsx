import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';

function Edit() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


    const {editId} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5002/emp_details/${editId}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setName(data.name)
            setEmail(data.email)
            setPassword(data.password)
        })
      },[])

    const handleSubmit = (e)=>{

        e.preventDefault();
        const jsonData = {name,email,password};
        fetch(`http://localhost:5002/emp_details/${editId}`,{
            method:"put",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(jsonData)
        })
        .then((res)=>{
            if(res)
            {
                alert('Record updated..!');
                navigate('/')
            }
        })

    }

  return (
 <div>
         <div className="center">
              <Link to="/admin" id='back-btn'>Go Back</Link>
        </div>
          <div className="form-div">
              <form onSubmit={handleSubmit} className="form">
                  <input
                    type="text"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    className="form-control"
                    id="input"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    id="input"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control"
                    placeholder="password"
                    id="input"
                  />
                <button type="submit" id="profile-btn">
                  Save Profile
                </button>
              </form>
          </div>
    </div>
  )
}

export default Edit
