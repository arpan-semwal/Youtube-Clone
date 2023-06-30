import React from 'react';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/VideoLength';
import {BsFillCheckCircleFill} from "react-icons/bs";
import {abbreviateNumber} from "js-abbreviation-number";
const VideoCard = ({ video }) => {
  console.log(video);

  return (
   <Link to={`/video/${video?.videoId}`}>
    <div className='flex flex-col  mb-8 '>
      <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden '>
        <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url}/>
        {
          video?.lengthSeconds && (
            <VideoLength time = {video?.lengthSeconds}/>
          )
        }
      </div>


      {/* for avatar */}

      <div className='flex text-white mt-3'> 
        <div className="flex items-start">
          <div className='flex h-9 w-9 rounded-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={video?.author.avatar[0]?.url}/>
          </div>
        </div>

        {/* for Video title and blue tick  */}
        <div className='flex flex-col ml-3 overflow-hidden'>
          <span className='text-sm font-bold'>
            {video?.title}
          </span>
          <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
            {video.author.title}
            {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
               <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>
            )}
          </span>


          {/* for views  */}
          <div className='flex'>
            <span>{`${abbreviateNumber(video?.stats?.views , 2)}`}</span>
          </div>
          <span className='truncate'>
            {video?.publishedTimeText
}
          </span>
        </div>
      </div>
    </div>
   
   </Link>
  );
};

export default VideoCard;
