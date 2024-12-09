import React, { useEffect, useRef } from "react";
import story from "../../assets/story.jpg";

function Story() {
  const sliderRef = useRef(null);

  
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = setInterval(() => {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 300;
      }
      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
       .username {
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
          margin-top: 0.5rem;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}
      </style>

      <div className="w-screen bg-blue-100 p-4 shadow-lg">
        <div className="flex items-center space-x-4">
        <div className="story-item">
            <div className="w-20 h-20 rounded-full border-2 border-blue-500">
              <img
                src={story}
                alt="Your Story"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="username">Your Story</p>
          </div>


          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth w-full"
          >
            {[...Array(30)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 flex-shrink-0 rounded-full border-2 border-blue-500 snap-start"
              >
                <img
                  src={story}
                  alt={`Story ${index + 1}`}
                  className="w-full h-full object-cover rounded-full"
                />
              
              </div>
                
            ))}
      
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
