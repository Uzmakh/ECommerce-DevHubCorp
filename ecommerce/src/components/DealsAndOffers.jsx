import { useEffect, useState } from "react";

import product1 from "../assets/dealimages/product-1.png";
import product2 from "../assets/dealimages/product-2.png";
import product3 from "../assets/dealimages/product-3.png";
import product4 from "../assets/dealimages/product-4.png";
import product5 from "../assets/dealimages/product-5.png";

const products = [
  {
    name: "Smart watches",
    discount: "-25%",
    image: product1,
  },
  {
    name: "Laptops",
    discount: "-15%",
    image: product2,
  },
  {
    name: "GoPro cameras",
    discount: "-40%",
    image: product3,
  },
  {
    name: "Headphones",
    discount: "-25%",
    image: product4,
  },
  {
    name: "Canon cameras",
    discount: "-25%",
    image: product5,
  },
];

const DealsAndOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 16,
    min: 34,
    sec: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, min, sec } = prev;

        if (sec > 0) {
          sec--;
        } else {
          sec = 59;
          if (min > 0) {
            min--;
          } else {
            min = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, min, sec };
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };


  return (
    <section className="mt-8 bg-white rounded border border-gray-200 shadow-sm py-6 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Section: Countdown Timer */}
        <div className="lg:w-72 flex-shrink-0 mb-8">
          <h2 className="text-2xl font-bold text-[#505050] -mt-2" s>
            Deals and offers
          </h2>
          <p className="-mt-2 text-gray-500">Hygiene equipments</p>
          <div className="grid grid-cols-4 gap-1 mt-4">
            <div className="bg-[#505050] rounded-sm text-center py-3 px-2">
              <div className="text-2xl font-bold text-white">
                {formatTime(timeLeft.days)}
              </div>
              <div className="text-xs text-white uppercase">Days</div>
            </div>
            <div className="bg-[#505050] rounded-sm py-3 px-2 text-center">
              <div className="text-2xl font-bold text-white ">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-xs text-white uppercase">hours</div>
            </div>
            <div className="bg-[#505050] rounded-sm py-3 px-2 text-center">
              <div className="text-2xl font-bold text-white">
                {formatTime(timeLeft.min)}
              </div>
              <div className="text-xs text-white uppercase">min</div>
            </div>
            <div className="bg-[#505050] rounded-sm py-3 px-2 text-center">
              <div className="text-2xl font-bold text-white">
                {formatTime(timeLeft.sec)}
              </div>
              <div className="text-xs text-white uppercase">sec</div>
            </div>
          </div>
        </div>

        {/* Right Section: Product Cards */}
        <div className="flex">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-36 flex flex-col items-center justify-center border-r last:border-r-0  border-gray-200 first:border-l"
            >
              <div className="h-full min-h-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col items-center justify-center ">
                <p className="text-sm font-medium text-gray-500 text-center">
                  {product.name}
                </p>

                <div className=" mt-2 w-16 bg-[#ffe3e3] rounded-full px-1 flex items-center justify-center py-1 text-xs font-semibold text-[#eb001b]">
                  {product.discount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsAndOffers;
