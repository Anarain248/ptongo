import React from 'react';
import { FaGithub, FaAngellist, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './footer.css';
const Footer = () => {

    return (
        <footer className= ' root '>
            <span className=' text '>Created by Arjun Narain ©2021</span>
            <a href='https://github.com/Anarain248' >
                <FaGithub className='icons ' />
            </a>
            <a href='https://www.linkedin.com/in/arjun-narain-5a5519101/'>
                <FaLinkedin className=' icons ' />
            </a>
            {/* <a href={angel} >
                <FaAngellist className=' icons ' />
            </a> */}
            <a href={`mailto: Arjun.narain700@gmail.com`}>
                <FaEnvelope
                    className='icons'
                    style={{ marginRight: '35px'}} />
            </a>
        </footer>
    )
};
export default Footer;
