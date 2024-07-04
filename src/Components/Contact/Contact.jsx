// import ContactImage from '../../assets/contactimage.png';

function Contact(){

    return(
        <>
            <section className="contact-image">
                {/* <img src={ContactImage} alt="just a regular image"/> */}
                <div className='contact-heading'>
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="contact-info">
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <div className="form-element">
                        <label>Enter Name <span> : </span> </label>
                        <input type="text"  placeholder="Enter Name"/>
                    </div>
                    <div className="form-element">
                        <label>Email Address <span> : </span> </label>
                        <input type="text"  placeholder="Enter Email Address"/>
                    </div>
                    <div className="form-element">
                        <label>Mobile Number <span> : </span> </label>
                        <input type="text"  placeholder="Enter Mobile Number"/>
                    </div>

                    <div className="form-element">
                        <label>Your Message <span> : </span> </label>
                        <textarea type="text"  placeholder="Enter Your Message"/>
                    </div>
                    <button className="submit-button">Submit</button>
                </div>
                <div className="contact-details">
                    <div className="contact-sub">
                    <h2>Address</h2>
                    <p>Door No 16-8-13 Beside GVR Factory, PP Road, Bhimavaram HO, Bhimavaram - 534201 (Opposite Old Maanasa Bar)</p>
                    <p>Open until 10:00 pm 5 Years in Business</p>
                    <p>Phone: 08401636044</p>
                    <p>Email: hanumanmetals@gmail.com</p>
                    </div>

                </div>
            </section>
        </>
        
    )

}


export default Contact;