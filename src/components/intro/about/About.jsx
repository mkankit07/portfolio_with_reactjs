import React from 'react'
import "./about.css"
import Award from "../../../Image/R.jfif"
import Me from "../../../Image/Me.jpg"
const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg">
                
            </div>
            <div className="a-card">
                <img src={Me || "https://media.istockphoto.com/photos/fixing-his-watches-semidressed-good-looking-man-picture-id471947538?k=6&m=471947538&s=170667a&w=0&h=-sIRZvqZVemAqhLQsEgfsMPnUuIruhOabEVHg_46Phc="} alt="" className='a-img' />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <p className='a-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consectetur nemo architecto totam facilis quidem sunt. Magni, alias. Minus dolores eos reiciendis dolor amet at mollitia dolore totam omnis? Molestiae.
            </p>
            <div className="a-award">
            <img src={Award} alt="" className='a-award-img' />
            <div className="a-award-texts">
                <h4 className="a-award-title">
                    Internation Design Awards 2021
                </h4>
                <p className='a-award-desc'>
                Nemo enim ipsan voluptatem quia voluptas sit aspernatur autodit and fugit.
                </p>
            </div>
            </div>
            </div>
    </div>
  )
}

export default About