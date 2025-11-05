import React from 'react';
import Marquee from 'react-fast-marquee';
import { IoNewspaperOutline } from "react-icons/io5";

const LatestNews = () => {
    return (
      <div className="flex items-center gap-5 bg-base-200 p-3">
        <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={80}>
          <IoNewspaperOutline className="mx-2" />
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            alias!
          </p>
          <IoNewspaperOutline className="mx-2" />
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            alias!
          </p>
          <IoNewspaperOutline className="mx-2" />
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            alias!
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;