import React , {useState , useEffect , useContext} from 'react';
import {BsFillCheckCircleFill} from "react-icons/bs";
import {abbreviateNumber} from "js-abbreviation-number";
import ReactPlayer from "react-player/youtube";
import {AiOutlineLike} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {fetchDataFromApi} from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from './SuggestionVideoCard';




const VideoDetails = () => {

  const [video , seVideo] = useState();
  const [relatedVideos , setRelatedVideos] = useState();
  const{id} = useParams();
  const {setLoading} = useContext(Context);


  useEffect(() => {
    document.getElementById("root").classList.add("custom-h"),
    fetchVideoDetails(),
    fetchRelatedVideos()

  } , [id]);

//  For video that we have click to play 
  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    })
  }

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  }



  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] bg-black'>
      <div className='w-full max-w-[1280px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
      controls
      width="100%"
      height="100%"
      style={{backgroundColor: "#000000"}}
      />
      </div>
      </div>
      </div>
    </div>
  )
}

export default VideoDetails
