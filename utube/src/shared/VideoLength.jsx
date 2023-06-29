import React from 'react';
import moment from "moment";

// for Video playtime time is passed as a prop
const VideoLength = ({time}) => {

    const videoLengthInSeconds = moment().startOf("day").seconds(time).format("H:mm:SS");

  return (
    <div>
        <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {
                videoLengthInSeconds
            }
        </div>
    </div>
  )
}

export default VideoLength
