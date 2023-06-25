import React, { useState  , useContext} from 'react'
import { Link , useLocation , useNavigate } from 'react-router-dom';
import { Context } from '../context/contextApi';

const Header = () => {
    const [searchQuery , setSearchQuery] = useState("");

    const {loading , mobileMenu , setMobileMenu} = useContext(Context); //taking 3 states from Context now these states are available



  return (
    <div>
      Header
    </div>
  )
}

export default Header
