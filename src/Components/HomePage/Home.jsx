import ImageCarousel from "./ImageCarousel";
import Download from '../../assets/download.jpeg';

// import { Menu} from '@mui/icons-material';


function Home(){

    
    return (
        <>
        <ImageCarousel/>
        <section className="highlights">
            <p style={{fontSize:'15px',fontWeight:'700',lineHeight:'24px',textAlign:'center'}}>Help us to Achieve our Goal</p>
            <h2 style={{color:'rgb(84,84,84)',textAlign:'center',fontSize:'28px',lineHeight:'38px'}}>About Our Company</h2>
            <div className="company-details">
                <aside className="details">
                    <div><h3>Hanuman Metel in Bhimavaram </h3>
                    <p>Hanuman Metel in Bhimavaram is one of the leading businesses in the Toughened Glass Partition Contractors. Also known for Steel Dealers, Glass Dealers, Door Dealers, Glass Door Dealers, Glass Job Works, Stainless Steel Railing Dealers, Baluster Manufacturers, Construction Contractors and much more. Find Address, Contact Number, Reviews &amp; Ratings, Photos, Maps of Hanuman Metel, Bhimavaram.</p>
                   </div>
                </aside>
                <div className="company-building">
                    <img src={Download} style={{width:'inherit',height:'inherit'}}></img>
                </div>
            </div>
        </section>

        
        </>
    )
}


export default Home;
