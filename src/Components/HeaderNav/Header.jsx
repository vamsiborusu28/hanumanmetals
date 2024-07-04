import { Link } from 'react-router-dom';
import Menu from '../../assets/SVGS/Menu.svg';
import { Modal } from "@mui/material";
import { Cancel } from '@mui/icons-material';
import { useState } from "react";

const navList =[
    {name:'Home',route:'/'},
    {name:'About',route:'about'},
    {name:'Our Work',route:'/'},
    {name:'Contact',route:'contact'}
]
function Header(){
    const [open,setOpen] = useState(false);

    function handleClose(){
        setOpen(!open);
    }
    return(
        <header>
            <div className="header-nav">
             <h2 className="header-logo">Hanuman Metals</h2>
             <nav className="nav-bar">
                <ul>
                    {navList.map(item => (<li key={item.name}><Link to={item.route} className='no-style'>{item.name}</Link></li>))
                    }
                </ul>
             </nav>
             <div className="menu" onClick={() => setOpen(true)}><img src={Menu}/></div>
             
            </div>

            <Modal open={open} onClose={handleClose} className='modal'>
                <>
                <Cancel onClick={() => setOpen(false)} style={{position:'absolute',right:0}}/>
                <ul className='modal-nav'>
                   {
                   navList.map(item => (<li key={item.name}><Link to={item.route} className='no-style' onClick={handleClose}>{item.name}</Link></li>))
                    }
                </ul>
                </>
            </Modal>
        </header>
    )
}

export default Header;