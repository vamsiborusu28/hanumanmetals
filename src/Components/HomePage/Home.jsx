import ImageCarousel from "./ImageCarousel";
import Rectangle from '../assets/rectangular.jpg';
const headindStyles={color:'whitesmoke',fontSize:'32px'}

function Home(){


    return (
        <>
        <header>
            <div className="header-nav">
             <h2 style={headindStyles}>Hanuman Metals</h2>
             <nav className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Our Work</li>
                    <li>Contact</li>
                    <li>Reviews</li>
                </ul>
             </nav>
            </div>
            {/* <div>Image Layout</div> */}
        </header>
        <ImageCarousel/>
        <section className="highlights">
            <p style={{fontSize:'15px',fontWeight:'700',lineHeight:'24px',textAlign:'center'}}>Help us to Achieve our Goal</p>
            <h2 style={{color:'rgb(84,84,84)',textAlign:'center',fontSize:'28px',lineHeight:'38px'}}>About Our Company</h2>
            <div className="company-details">
                <aside className="details">
                    <div><h3>Hanuman Metel in Bhimavaram HO, Bhimavaram</h3>
                    <p>Hanuman Metel in Bhimavaram is one of the leading businesses in the Toughened Glass Partition Contractors. Also known for Steel Dealers, Glass Dealers, Door Dealers, Glass Door Dealers, Glass Job Works, Stainless Steel Railing Dealers, Baluster Manufacturers, Construction Contractors and much more. Find Address, Contact Number, Reviews &amp; Ratings, Photos, Maps of Hanuman Metel, Bhimavaram.</p>
                   </div>
                    
                    <div> 
                        <h3>Location and Overview</h3>
                        <p>Established in the year 2019, Hanuman Metel in Bhimavaram HO, Bhimavaram is a top player in the category Toughened Glass Partition Contractors in the Bhimavaram. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Bhimavaram. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Bhimavaram, this establishment occupies a prominent location in Bhimavaram HO. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at PP Road, Opposite Old Maanasa Bar, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Steel Dealers, Glass Dealers, Door Dealers, Glass Door Dealers, Glass Job Works, Stainless Steel Railing Dealers, Baluster Manufacturers, Construction Contractors. </p>
                    </div>
                    
                </aside>
                <div className="company-building">
                    <img src={Rectangle}></img>
                </div>
            </div>
        </section>
        <div style={{height:'100vh'}}></div>
        </>
    )
}


export default Home;
