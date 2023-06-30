import React from 'react';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/VideoLength';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SuggestionVideoCard = ({ video }) => {
  console.log(video);

  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex mb-3 overflow-hidden w-full h-full'>
        <div className='relative overflow-hidden lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800'>
          <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} alt="Thumbnail" />
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className='flex flex-col ml-3 sm:mb-10 xl:mb-10 overflow-hidden'>
          <span className='text-sm ld:text-xs xl:text-sm font-bold line-clamp-2 text-white'>
            {video?.title}
          </span>
          <span className='text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
            {video.author.title}
            {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            )}
          </span>
          {/* for views */}
          <div className='flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
            <span>{`${abbreviateNumber(video?.stats?.views, 2)}`}</span>
          </div>
          <span className='truncate'>
            {video?.publishedTimeText}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
