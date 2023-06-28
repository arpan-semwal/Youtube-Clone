import React, { useContext, useEffect } from 'react';
import { Context } from '../context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.remove('custopm-h');
    }
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <LeftNav />
      <div className="flex-grow bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 h-full overflow-y-auto">
          {!loading && Array.isArray(searchResults) && searchResults.map((item) => {
            if (item.type !== "video") return null;
            return <VideoCard key={item?.video?.videoId} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
