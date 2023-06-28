import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItem from './LeftNavMenuItem';
import { Context } from '../context/contextApi';
import {categories} from "../utils/constants";

const LeftNav = () => {
    const { selectedCatagories , setSelectedCatagories , mobileMenu} = useContext(Context);
    const navigate = useNavigate();

    const clickHandler = (name , type) => {
        switch (type) {
            case "category":
                return setSelectedCatagories(name);
            case "home":
                return setSelectedCatagories(name);
            case "menu":
                return false;
            default:
                break;
        }
    }

  return (
    <div className=' flex fixed md:block w-[240px]  overflow-y-auto   py-4 bg-black   z-10 md:translate-x-0 transition-all'>
        <div className='flex px-5 flex-col'>
            {
                categories.map((item) => {
                    return(
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                            text={item.type === 'home' ? "Home" : item.name}
                            icon = {item.icon}
                            action= { () => {
                                clickHandler(item.name , item.type),
                                navigate("/");
                            }}
                            className= {`${selectedCatagories == item.name ? "bg-white/[0.15]" : ""}`}
                            />
                            {
                                item.divider && (
                                    <hr className='my-5 border-white/[0.2]'/>
                                )
                            }
                        </React.Fragment>
                    );
                })
            }
              <hr className='my-5 border-white/[0.2]'/>
              <div className='text-white/[0.5] text-[12px]'>
                Clone by : Arpan
              </div>
        </div>
    </div>
  )
}

export default LeftNav
