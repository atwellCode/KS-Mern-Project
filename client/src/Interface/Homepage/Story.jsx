import React, { useEffect, useRef } from "react";
import story from "../../assets/story.jpg";

function Story() {

  return (
   <>
   <div className="h-28 w-full p-4 flex justify-center items-center">
    <div className="h-full w-full flex justify-start gap-4 ">
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
      <div className=" flex flex-col gap-1 items-center">
        <img src={story} alt="story-image" className="h-14 w-14 rounded-full" />
        <h4 className="font-semibold text-sm text-gray-700">Follower Name</h4>
      </div>
    </div>
   </div>
   </>
  );
}

export default Story;
