import React, { useContext, useEffect } from 'react';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';
import { Context } from '../context/contextApi';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.remove('custom-h');
  }, []);

  return (
    <div className="flex flex-row h-[calc(100% - 56px)]">
      <LeftNav />
      
      <div className="grow w-[calc(100% - 240px)] h-full overflow-y-auto bg-black">
        {!loading &&
          searchResults &&
          searchResults.map((item) => {
            if (item.type !== 'video') return null;
            return (<VideoCard key={item?.video?.videoId} video={item.video} />);
          })}
      </div>
    </div>
  );
};

export default Feed;
