import React from 'react'
import VideoItem from './VideoItem';

function VideoList({videos,onVideoSelect}){     // destructure props
  const renderedList = videos.map(function(video){
    return <VideoItem key={video.id.videoId} onVideoSelect = {onVideoSelect} video={video}/>
  })
  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList;