import React from 'react'
import Me from "../../Image/Me.jpg"
import "./intro.css"
export const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My Name is</h2>
                    <h1 className='i-name'>Ankit Maurya</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item"> UI/UX Designer</div>
                            <div className="i-title-item"> Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Cretor</div>
                        </div>
                    </div>
                    <p  className="i-desc">
                        I design and develop services for customers of all sizes ,
                        specializing in creating stylish ,modern website , web and online services 
                        stores.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className='bg-clip'></div>
                <img src={Me} alt="..." className='image'/>
            </div>
        </div>
    )
} 
