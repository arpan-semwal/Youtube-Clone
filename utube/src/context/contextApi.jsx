import React , {createContext , useState , useEffect} from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading , setLoading] = useState(false);
    const [searchResults , setSearchResults] = useState(false);
    const [selectedCatagories , setSelectedCatagories] = useState(false);
    const [mobileMenu , setMobileMenu] = useState(false);


    useEffect(() => {
        fetchSelectedCatagoriesData(selectedCatagories);
    } , [selectedCatagories]); // whenever the selectedCatagories state will change the useeffect method will be called and the fucntion fetchSelected will be called

    const fetchSelectedCatagoriesData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`) .then(({contents}) => { //destructuring contents from api
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })
    }



    return (
        <Context.Provider
            value={
                {
                    loading,
                    setLoading,
                    searchResults,
                    setSearchResults,
                    selectedCatagories,
                    setSelectedCatagories,
                    mobileMenu,
                    setMobileMenu,
                }
            }
        
        >
            {props.children}
        </Context.Provider>
    )

}