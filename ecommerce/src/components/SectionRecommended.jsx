import productOne from "../assets/ri-image1.png";
import productTwo from "../assets/ri-image2.png";
import productThree from "../assets/ri-image3.png";
import productFour from "../assets/ri-image4.png";
import productFive from "../assets/ri-image5.png";
import productSix from "../assets/ri-image6.png";
import productSeven from "../assets/ri-image7.png";
import productEight from "../assets/ri-image5.png";
import productNine from "../assets/ri-image8.png";
import productTen from "../assets/ri-image9.png";

const recommendedItems = [
  {
    name: "T-shirts with multiple colors",
    description: "for men",
    price: "10.30",
    image: productOne,
  },
  {
    name: "Jeans shorts for men",
    description: "blue color",
    price: "10.30",
    image: productTwo,
  },
  {
    name: "Brown winter coat",
    description: "medium size",
    price: "12.50",
    image: productThree,
  },
  {
    name: "Jeans bag for travel",
    description: "for men",
    price: "34.00",
    image: productFour,
  },
  {
    name: "Leather wallet",
    description: "premium finish",
    price: "99.00",
    image: productFive,
  },
  {
    name: "Canon camera",
    description: "black, 100x zoom",
    price: "9.99",
    image: productSix,
  },
  {
    name: "Headset for gaming",
    description: "with mic",
    price: "8.99",
    image: productSeven,
  },
  {
    name: "Smartwatch",
    description: "silver color modern",
    price: "10.30",
    image: productEight,
  },
  {
    name: "Blue wallet for men",
    description: "leather material",
    price: "10.30",
    image: productNine,
  },
  {
    name: "Jeans bag for travel",
    description: "for men",
    price: "80.95",
    image: productTen,
  },
];

const SectionRecommended = () => {
  return (
    <section className="my-8">
      <div>
        <h2 className="text-2xl font-bold text-[#505050] mb-4">
          Recommended items
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recommendedItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-square w-full overflow-hidden bg-gray-50 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-[150px] w-[150px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col px-4 py-3">
              <span className="text-sm font-medium leading-snug text-gray-900">
                ${item.price}
              </span>

              <p className="text-xs font-medium leading-snug text-gray-500">
                {item.name}
              </p>
              {item.description && (
                <p className="text-xs text-gray-500">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionRecommended;
