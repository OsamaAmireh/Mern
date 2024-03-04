import React from 'react'
import image from '../pages/image/2.jpg'

const About = () => {
    return (
        <div className='about'>
            <br /><br /><br /><br />
            <img className='image' src={image} alt="" />
            <br /><br />

            <h1>About Me</h1>
            <p>Hi there! I am a full-stack web developer with experience in building websites and applications using HTML5, CSS3, JavaScript,React Js and Node Js
                I am a full-stack web developer with experience in building responsive and interactive websites using HTML5, CSS3
                My name is OSama Amireh and I am a Software Enginner From Al-Huissien Bin Talal University.
            </p>
            <br /><br />

            <h1>About</h1>
            <p>This is a simple web
                application created using the MERN stack. The main purpose of this project is to provide an easy way for users to create, read, update
                It uses MongoDB as the database, Express.js for server-side rendering and Node.js to application created using the MERN stack. The
                The main purpose of this project is to provide an easy way for users to create, read, update application created using the MERN stack. The
                The main purpose of this project is to demonstrate my skills in building full-stack applications with Node.
            </p>
            <br /><br />
            <h2>Purpose:</h2>
            <ul>
                <li>Learning how to use React.js and Node.js in combination with Express.</li>
                {/* <li>Creating an application that allows  users to search for books by title, author or ISBN.</li> */}
                <li>Creating an application that allows users to addblogs for based on their preferences , such as the color of the background or text</li>
            </ul>
            <br /><br />
            <h2>Features :</h2>
            <ol>
                <li>User Authentication using Passport.js for both frontend and backend.</li>
                <li>A RESTful API built on the MVC framework of Node.js and Express.</li>
                <li>The user interface was designed using HTML5/CSS3 and JavaScript along with React.js library.</li>
                <li>Implemented Google OAuth 2.0 authentication for user login.</li>
                <li>The application uses MongoDB as its database management system.</li>
                <li>Users can create their own blog posts by filling out a form which includes fields such as title, content and author.</li>
            </ol>
            <br /><br />
            <a href="https://github.com/OsamaAmireh/Mern">View Source Code</a>
            <br /><br /><br />



        </div>
    )
}

export default About