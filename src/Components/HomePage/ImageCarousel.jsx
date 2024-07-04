import Carousel from 'react-material-ui-carousel'
import GOT from '../../assets/got.jpg';
import Ryan from '../../assets/ryan1.jpg';
import WOLF from '../../assets/wallpaperflare.com_wallpaper (1).jpg';
import Zenistu from '../../assets/zenitsu.jpg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const items=[
    {
        name: "Random Name #1",
        description: GOT
    },
    {
        name: "Random Name #2",
        description: Ryan
    },
    {
        name:'Wolf',
        description: WOLF
    },
    {
        name:'Zenistu',
        description: Zenistu
    }
]

function ImageCarousel(){



    return(
        <div>
        <Carousel NextIcon={<NavigateNextIcon/>}
                  PrevIcon={<NavigateBeforeIcon />}
            navButtonsAlwaysVisible={true}
        >
        {
                items.map( (item, i) => {
                    return(
                        <div key={i} className='image-carousel'>
                            <img src={item.description} style={{width:'inherit',height:'inherit'}}></img>
                        </div>
                    )
                } )
            }
        </Carousel>
        </div>
    )
}




export default ImageCarousel;