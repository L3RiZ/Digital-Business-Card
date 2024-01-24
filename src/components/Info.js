import React from 'react'
import portrait from '../images/sande.jpg'

function Info(){
    return (
        <section className="info">
            <img className='info--img' src={portrait} alt="myself" />
            <h1>Steven Tornow</h1>
            <h2>Business Student</h2>
            <p className='info--website'>steventornow.de</p>
            <div className="info--links_cnt">
                <a className='info--email' href="mailto:steventornow@aol.com"><i class="fa-solid fa-envelope"></i><p>Email</p></a>
                <a className='info--linkedin' href="https://de.linkedin.com/in/steven-tornow-277b16230"><i class="fa-brands fa-linkedin"></i><p>LinkedIn</p></a>
            </div>
        </section>
    )
}

export default Info;