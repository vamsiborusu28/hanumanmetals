
import { Instagram,Facebook,Twitter,WhatsApp,Mail,Call} from '@mui/icons-material';



function Footer(){


    return(
        <footer>
            <section className="footer-section">
            <div className="content">
                <h2>About Us</h2>
                <p>Hanuman Metel in Bhimavaram is one of the leading businesses in the Toughened Glass Partition Contractors. Also known for Steel Dealers, Glass Dealers, Door Dealers, Glass Door Dealers, Glass Job Works, Stainless Steel Railing Dealers, Baluster Manufacturers, Construction Contractors and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Hanuman Metel, Bhimavaram.</p>
                <div className="social">
                        <li><a><Instagram/></a></li>
                        <li><a><Facebook/></a></li>
                        <li><a><WhatsApp/></a></li>
                        <li><a><Twitter/></a></li>
                </div>
            </div>
            <div className="content contact">
               <h2>Contact Us</h2> 
               <p>Door No 16-8-13 Beside GVR Factory, PP Road, Bhimavaram HO, Bhimavaram - 534201 (Opposite Old Maanasa Bar)</p>
               <p> Open until 10:00 pm 5 Years in Business</p>
               <div style={{display:'flex',alignItems:'center',gap:'1vw'}}>
                <Mail/> <span style={{textAlign:'start',fontSize:'14px'}}>hanumanmetals@gmail.com</span>
               </div>
               <div style={{display:'flex',alignItems:'center',gap:'1vw'}}>
               <Call/> <span style={{textAlign:'start',fontSize:'14px'}}>08401636044</span>
               </div>
            </div>
            <div className="content usefull-links">
                <h2>Usefull Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Our Work</li>
                    <li>Reviews</li>
                </ul>
            </div>
            </section>
            <hr></hr>
            <section className='copyright'>
                <div>Copyright (c) {new Date().getFullYear()} - Hanuman Metel Pvt. Ltd.</div>
                <div>Designed by 
                    <a href="https://github.com/vamsiborusu28"> Vamsi Borusu</a> <span> and </span> 
                    <a href='https://github.com/vamsiborusu28'> Ganesh Javvadi</a>
                </div>
            </section>
        </footer>
    )
}


export default Footer;