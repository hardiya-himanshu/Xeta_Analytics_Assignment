import React, { useEffect, useState } from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'


function Tutorial({darkMode}) {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; 
    const url = "https://www.youtube.com/embed/xqvCmoLULNY?si=DsXfzEwrmd_U7jNg";
    const [videoTitle, setVideoTitle] = useState('');

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getVideoTitle = (videoId) => {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const title = data.items[0].snippet.title;
          setVideoTitle(title); 
        } else {
          console.error('Video not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching video data:', error);
      });
  };

  useEffect(() => {
    const videoId = extractVideoId(url);
    if (videoId) {
      getVideoTitle(videoId);
    } else {
      console.error('Invalid YouTube URL');
    }
  }, [url]);

  return (
    <div id='tutorial' className={`pt-32 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
        <h1 className='sm:text-6xl text-5xl font-bold text-center'>
            TUTORIAL
        </h1>
        <h4 className='text-2xl text-center my-8'>
            GET YOUR EXERCISE TUTORIAL VIDEOS
        </h4>

        <div className='relative bg-customBlue lg:p-20 p-4 min-h-fit xl:h-screen mt-14 flex justify-center items-center '>
            <img src="/assets/images/tutorial-image.png" alt="grill-image" className='absolute right-0 bg-contain h-full' />
            <div className='flex gap-20 flex-wrap justify-center'>
                <h1 className='text-customWhite sm:text-5xl text-4xl font-semibold xl:w-1/2 flex flex-col justify-center'>
                LEARN PROPER SQUAT TECHNIQUE WITH THIS EASY-TO-FOLLOW VIDEO GUIDE.
                </h1>
                <div className='w-[300px] sm:w-[450px] z-20 p-2 bg-customWhite rounded-md' >
                        <div className="rounded-sm overflow-hidden">
                            <iframe minWidth="280" minHeight="150" width="450px" height="250px" className='sm:w-full w-[300px]' src="https://www.youtube.com/embed/xqvCmoLULNY?si=DsXfzEwrmd_U7jNg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div className="py-6 px-2 flex justify-between items-center">
                            <div className='flex flex-col gap-2'>
                            <h3 className='text-wrap text-customBlack w-fit'>{videoTitle}</h3>
                            <a href={url} target="_blank" className='w-fit'>
                            <button className='flex items-center gap-2 text-sm text-gray-700'>
                                <img src="/assets/icons/youtube.png" className='w-4 h-4 ' alt="youtube" />
                                YouTube
                            </button>
                            </a>
                            </div>
                            <div>
                                <img src="/assets/icons/info.png" alt="info" className='w-4 h-4 cursor-pointer'/>
                            </div> 
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FitSnapTheme(Tutorial)
