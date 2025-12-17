import image1 from "../assets/eg-stopwatch.png";
import image2 from "../assets/eg-camera.png";
import image3 from "../assets/eg9-image.png";
import image4 from "../assets/eg-12image.png";
import image5 from "../assets/eg-headphones.png";
import image6 from "../assets/eg-laptop.png";
import image7 from "../assets/eg11-image.png";
import image8 from "../assets/eg10-image.png";

const productCategories = [
  {
    title: "Smart watches",
    price: 19,
    image: image1,
  },
  {
    title: "Cameras",
    price: 19,
    image: image2,
  },
  {
    title: "Headphones",
    price: 19,
    image: image3,
  },
  {
    title: "Smart watches",
    price: 19,
    image: image4,
  },
  {
    title: "Kitchen mixer",
    price: 100,
    image: image5,
  },
  {
    title: "Blenders",
    price: 39,
    image: image6,
  },
  {
    title: "Home appliance",
    price: 19,
    image: image7,
  },
  {
    title: "Coffee maker",
    price: 10,
    image: image8,
  },
];

const HomeAndOutdoor = () => {
  return (
    <section className="mt-4 bg-white rounded border border-gray-200 grid lg:grid-cols-[1fr_2fr] shadow-sm">
      {/* Left promotional banner */}
      <div className="relative overflow-hidden">
        {/* Background with blurred living room scene */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('./src/assets/egbg-image.png')",
          }}
        />

        {/* Content */}
        <div className="relative flex h-full min-h-[257px] flex-col justify-start p-6">
          <h2 className="mb-4 font-bold text-[#1c1c1c] lg:text-[20px]">
            Consumer <br />
            electronics and
            <br/>gadgets
            <br />
            
          </h2>
          <button className="w-max rounded-lg bg-white px-8 py-3 text-[18px] font-semibold text-[#1c1c1c] shadow-md transition hover:shadow-lg">
            Source now
          </button>
        </div>
      </div>

      {/* Right product categories grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer border border-[#dee2e7] bg-white"
          >
            <div className="flex">
              <div className="pt-2 ps-3">
                <h3 className="mb-2 text-sm font-medium text-[#1c1c1c]">
                  {category.title}
                </h3>
                <p className="text-xs font-semibold text-[#8b96a5]">
                  From <br />
                  USD {category.price}
                </p>
              </div>
              <div className="aspect-square mt-12">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAndOutdoor;

