"use client"
import { useEffect, useRef, useState } from 'react';

const PlaySatsconf = () => {
  const videoRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
    {isClient && (
      <video
        ref={videoRef}
        width="235"
        height="420"
        controls
        preload="auto"
        autoPlay
        loop
        muted
      >
        <source src="/satsconf-video.mp4" type="video/mp4" />
        <track
          src="/satsconf-video.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )}
  </>
    
  )
}

export default PlaySatsconf;