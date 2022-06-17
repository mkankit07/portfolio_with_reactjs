import React, { useRef } from 'react'
import "./contact.css"
import add from "../../Image/add.png"
import cal from "../../Image/phone.png"
import email from "../../Image/email.png"

const Contact = () => {
    const formRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={cal} alt="" className="c-icon" />
                        +91 993-5973-679
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="" className="c-icon" />
                        ankti20@navgurukul.org
                    </div>
                    <div className="c-info-item">
                        <img src={add} alt="" className="c-icon" />
                        OYO 11878 Hotel De DS Plaza, Bareilly - Bisalpur Road, Pawan Vihar, Bareilly, Uttar Pradesh
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-dec">
                    <b>
                        What's your Story?
                    </b>
                        Get in touch. Always available for freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Subject' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>


        </div>
  )
}

export default Contact