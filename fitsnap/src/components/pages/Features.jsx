import React, {useRef, useEffect} from 'react'
import FitsnapTheme from '../../utils/FitsnapTheme'


function Features({darkMode}) {
    const videoRef = useRef(null);
    const animatedDiv = useRef(null);

    useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0', 'translate-y-20');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            } else {
              // Reapply initial hidden classes when the element goes out of view
              entry.target.classList.remove('opacity-100', 'translate-y-0');
              entry.target.classList.add('opacity-0', 'translate-y-20');
            }
          });
        });
    
        if (animatedDiv.current) {
          observer.observe(animatedDiv.current);
        }
    
        return () => {
          if (animatedDiv.current) {
            observer.unobserve(animatedDiv.current);
          }
        };
      }, []);

    const features = [
        {
            id: 1,
            title: "Data-Driven Insights",
            description: "Unlock personalized fitness progress with real-time data insights, empowering smarter workouts and faster results.",
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
            description: "Stay safe with AI-guided techniques, monitoring form and movement to prevent injuries during every workout",
            file: "/assets/images/feature-3.png",
            type: "image",
            bgColor:"bg-custom3"
        },
        {
            id: 4,
            title: "Efficient Workouts",
            description: "Maximize your workout efficiency with AI-driven plans, tailored to optimize time and achieve faster results",
            file: "/assets/images/feature-4.png",
            type: "image",
            bgColor:"bg-custom4"
        },
    ]
  return (
    <div
  id="features"
  className={`pt-20 min-w-[250px] ${
    darkMode ? "bg-customDark text-customWhite" : "bg-customLight text-customBlack"
  }`}
>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
    WHY CHOOSE FITSNAP
  </h1>
  <h4 className="text-xl sm:text-2xl text-center my-4 sm:my-8">
    GET REALTIME UPDATE WITH AI
  </h4>

  <ul ref={animatedDiv} className="opacity-0 transform translate-y-20 transition duration-700 ease-in-out  flex flex-col md:mx-20 sm:mx-10 mx-5 mt-10 sm:mt-14 pb-10 sm:pb-20 flex-wrap">
    {features.map((feature) => (
      <li key={feature.id} className="text-customWhite flex flex-col flex-wrap ">
        {feature.id % 2 !== 0 ? (
          <div className="flex flex-wrap w-full min-h-[400px] sm:min-h-[450px] justify-center">
            <div className="w-full xl:w-1/2 sm:min-w-[280px] min-w-[250px] min-h-[400px] sm:min-h-[450px]">
              {feature.type === "image" ? (
                <img
                  src={feature.file}
                  alt={feature.title}
                  className="w-full object-cover sm:min-w-[280px] min-w-[250px] min-h-[400px] sm:min-h-[450px] h-full"
                />
              ) : (
                <video
                  className="w-full object-cover sm:min-w-[280px] min-w-[250px] min-h-[400px] sm:min-h-[450px] h-full"
                  ref={videoRef}
                  loop
                  playsInline
                  muted
                >
                  <source src={feature.file} type="video/mp4" />
                </video>
              )}
            </div>
            <div
              className={`xl:w-1/2 sm:min-w-[280px] min-w-[250px] min-h-[400px] sm:min-h-[450px] ${feature.bgColor} p-6 sm:p-14 flex flex-col justify-center gap-4 sm:gap-10 w-full`}
            >
              <h3 className="text-3xl sm:text-6xl font-semiboldold">
                {feature.title}
              </h3>
              <p className="text-lg sm:text-2xl">{feature.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap w-full sm:min-w-[280px] min-w-[250px] min-h-[400px] sm:min-h-[450px]">
            <div
              className={`xl:w-1/2 xl:order-1 order-2 min-w-[250px] sm:min-w-[280px] min-h-[400px] sm:min-h-[450px] ${feature.bgColor} p-6 sm:p-14 flex flex-col justify-center gap-4 sm:gap-10 w-full`}
            >
              <h3 className="text-3xl sm:text-6xl font-semiboldold">
                {feature.title}
              </h3>
              <p className="text-lg sm:text-2xl">{feature.description}</p>
            </div>
            <div className="w-full xl:w-1/2 xl:order-2 order-1 min-w-[250px] sm:min-w-[280px] min-h-[400px] sm:min-h-[450px]">
              {feature.type === "image" ? (
                <img
                  src={feature.file}
                  alt={feature.title}
                  className="w-full object-cover min-w-[250px] sm:min-w-[280px] min-h-[400px] sm:min-h-[450px] h-full"
                />
              ) : (
                <video
                  className="w-full object-cover min-w-[250px] sm:min-w-[280px] min-h-[400px] sm:min-h-[450px] h-full"
                  ref={videoRef}
                  loop
                  playsInline
                  muted
                >
                  <source src={feature.file} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
</div>


  )
}

export default FitsnapTheme(Features)
