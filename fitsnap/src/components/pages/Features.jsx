import React, {useRef, useEffect} from 'react'
import FitSnapTheme from '../../utils/FitsnapTheme'


function Features({darkMode}) {
    const videoRef = useRef(null);
    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    }, []);

    const features = [
        {
            id: 1,
            title: "Data-Driven Insights",
            description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
            file: "/assets/images/feature-1.png",
            type: "image",
            bgColor:"bg-custom1"
        },
        {
            id: 2,
            title: "Enhanced Focus on Individual Needs ",
            description: "FitSnap: Ditch bad form, embrace perfect workouts. AI analyzes your moves in real-time for flawless fitness.",
            file: "/assets/videos/feature-2.mp4",
            type: "video",
            bgColor:"bg-custom2"
        },
        {
            id: 3,
            title: "Preventing Injuries",
            description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
            file: "/assets/images/feature-3.png",
            type: "image",
            bgColor:"bg-custom3"
        },
        {
            id: 4,
            title: "Efficient Workouts",
            description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
            file: "/assets/images/feature-4.png",
            type: "image",
            bgColor:"bg-custom4"
        },
    ]
  return (
    <div id='features' className={`pt-20 ${darkMode?"bg-customDark text-customWhite":"bg-customLight text-customBlack"}`}>
      <h1 className='text-6xl font-bold text-center'>
      WHY CHOOSE FITSNAP
      </h1>
      <h4 className='text-2xl text-center my-8'>
      GET REALTIME UPDATE WITH AI
      </h4>
      <ul className='flex flex-col mx-20 mt-14 pb-20 flex-wrap'>
            {
                features.map((feature) => (
                    <li key={feature.id} className='text-customWhite flex flex-col flex-wrap'>
                        {
                            (feature.id % 2 !==0)?
                                <div className='flex flex-wrap w-full min-h-[450px]'>
                                    <div className='w-full xl:w-1/2 min-w-[450px] min-h-[450px]'>     
                                    {feature.type === "image"?
                                        <img src={feature.file} alt={feature.title} className='w-full object-cover min-h-[450px] h-full'/>
                                        :
                                        <video className='w-full object-cover min-h-[450px] h-full' ref={videoRef} loop playsInline muted>
                                            <source src={feature.file} type="video/mp4"/>
                                        </video>
                                    }
                                    </div>
                                    <div className={`xl:w-1/2 min-w-[450px] min-h-[450px] ${feature.bgColor} p-14 flex flex-col justify-center gap-10 w-full`}>
                                        <h3 className='text-6xl font-semiboldold'>{feature.title}</h3>
                                        <p className='text-2xl'>{feature.description}</p>
                                    </div>
                                </div>
                                    :
                                <div className='flex flex-wrap w-full min-w-[450px] min-h-[450px]'>                             
                                    <div className={`w-full xl:w-1/2 xl:order-1 order-2 min-w-[450px] min-h-[450px] ${feature.bgColor} p-14 flex flex-col justify-center gap-10 h-full`}>
                                        <h3 className='text-6xl font-semiboldold'>{feature.title}</h3>
                                        <p className='text-2xl'>{feature.description}</p>
                                    </div>
                                    <div className='w-full xl:w-1/2 xl:order-2 order-1 min-w-[450px] min-h-[450px]  h-full'>
                                    {feature.type === "image"?
                                        <img src={feature.file} alt={feature.title} className='w-full object-cover min-h-[450px] h-full'/>
                                        :
                                        <video  className='h-full object-cover min-h-[450px] w-full ' ref={videoRef} loop playsInline muted>
                                            <source src={feature.file} type="video/mp4"/>
                                        </video>
                                    }
                                    </div>
                                </div>
                        }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FitSnapTheme(Features)
