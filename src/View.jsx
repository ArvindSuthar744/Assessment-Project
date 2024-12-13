import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';

function View() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState("")
    const [address, setAddress] = useState("")
    const { viewId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5002/emp_details/${viewId}`)
            .then((res) => { return res.json() })
            .then((data) => {
                setName(data.name)
                setEmail(data.email)
                setImg(data.img)
                setAddress(data.address)
                // console.log(img)
            })
    })

   // map api

//    async function initAerialView() {
//     const displayEl = document.querySelector('video');
//     displayEl.addEventListener('click', function () {
//       if (displayEl.paused) {
//       displayEl.play();
//       } else {
//         displayEl.pause();
//       }
//     });

//     // Parameter key can accept either 'videoId' or 'address' depending on input.
//     const parameterKey = videoIdOrAddress(PARAMETER_VALUE);
//     const urlParameter = new URLSearchParams();
//     urlParameter.set(parameterKey, PARAMETER_VALUE);
//     urlParameter.set('key', API_KEY);
//     const response = await fetch(`https://aerialview.googleapis.com/v1/videos:lookupVideo?${urlParameter.toString()}`);
//     const videoResult = await response.json();

//     if (videoResult.state === 'PROCESSING') {
//       alert('Video still processing..');
//     } else if (videoResult.error && videoResult.error.code === 404) {
//       alert('Video not found. To generate video for an address, call on Aerial view renderVideo method.');
//     } else {
//       displayEl.src = videoResult.uris.MP4_HIGH.landscapeUri
//     }
//   }

//   function videoIdOrAddress(value) {
//     const videoIdRegex = /[0-9a-zA-Z-_]{22}/;
//     return value.match(videoIdRegex) ? 'videoId' : 'address';
//   }

//   initAerialView();


    return (
        <div className='view'>
            <div className='center'>
                <Link to="/" id='back-btn'>
                    Go back
                </Link>
            </div>
            <img src={img} alt="" />
            <h3>Id : {viewId} </h3>
            <h3>Name :{name}</h3>
            <h3>Email : {email} </h3>
            <h3>Email : {address} </h3>


            {/* Embed map ifame  */}
           <div className='header'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842717682!2d72.41492748914426!3d23.
           020474102588533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2s
           Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1734067124788!5m2!1sen!2sin" 
           width="100%" height="600" allowfullscreen loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
           </iframe>
           </div>


        {/* map api integration */}

     <div className="map-div">
     <div class="container">
        <video class="aerial-view-media" muted autoplay loop>
          Your browser does not support HTML5 video.
        </video>
      </div>
     </div>

     
    {/* @license
    Copyright 2023 Google LLC. All Rights Reserved.
    SPDX-License-Identifier: Apache-2.0
     
    To use video ID as parameter input instead of address, replace parameter value with a videoID '-wVXGP6Hkogfqz6sZulUf3'.
    const PARAMETER_VALUE = '111 8th Ave, New York, NY 10011';
    const API_KEY = 'INSERT_YOUR_API_KEY'; 
    */}


        </div>
    )
}

export default View
