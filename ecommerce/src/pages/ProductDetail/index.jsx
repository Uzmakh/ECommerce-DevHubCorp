import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionNewsletter from "../../components/SectionNewsletter";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { FaCheckCircle, FaCheck, FaShoppingBag } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { LuShieldCheck, LuGlobe } from "react-icons/lu";

// Import product images
import CanonCamera from "../../assets/eg10-image.png";
import ActionCamera from "../../assets/dealimages/product-5.png";
import MirrorlessCamera from "../../assets/eg11-image.png";
import Laptop from "../../assets/dealimages/product-2.png";
import ActionCamera2 from "../../assets/ri-image4.png";
import HotFlask from "../../assets/ri-image9.png";
import ActionCamera3 from "../../assets/homeoutdoor/7-image.png";

const allProducts = [
  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998.0,
    originalPrice: 1128.0,
    rating: 7.5,
    orders: 154,
    image: CanonCamera,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    fullDescription:
      "This high-quality Canon Camera EOS 2000 features a powerful 10x zoom lens, perfect for capturing stunning photos and videos. With its black sleek design, this camera is ideal for both professional photographers and enthusiasts. The camera includes advanced features such as image stabilization, high-resolution sensor, and multiple shooting modes.",
    supplier: {
      name: "TechStore Pro",
      rating: 4.8,
      responseRate: "98%",
      responseTime: "1 hour",
      memberSince: "2020",
    },
    specifications: {
      brand: "Canon",
      model: "EOS 2000",
      zoom: "10x",
      color: "Black",
      warranty: "2 years",
    },
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: 998.0,
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    image: ActionCamera,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    fullDescription:
      "Capture your adventures in stunning 4K quality with the GoPro HERO6. Perfect for action sports and outdoor activities.",
    supplier: {
      name: "Action Gear Co",
      rating: 4.6,
      responseRate: "95%",
      responseTime: "2 hours",
      memberSince: "2019",
    },
  },
  {
    id: 3,
    name: "Sony Alpha A7 III Mirrorless Camera",
    price: 1998.0,
    originalPrice: 2299.0,
    rating: 9.2,
    orders: 342,
    image: MirrorlessCamera,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    fullDescription:
      "Professional-grade mirrorless camera with exceptional image quality and performance.",
    supplier: {
      name: "Camera World",
      rating: 4.9,
      responseRate: "99%",
      responseTime: "30 minutes",
      memberSince: "2018",
    },
  },
  {
    id: 4,
    name: "Nikon D850 DSLR Camera",
    price: 2996.0,
    originalPrice: 3299.0,
    rating: 9.5,
    orders: 189,
    image: Laptop,
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    fullDescription:
      "Top-of-the-line DSLR camera for professional photography.",
    supplier: {
      name: "Pro Photo Supply",
      rating: 4.7,
      responseRate: "97%",
      responseTime: "1 hour",
      memberSince: "2021",
    },
  },
  {
    id: 5,
    name: "Fujifilm X-T4 Mirrorless Camera",
    price: 1699.0,
    originalPrice: null,
    rating: 8.8,
    orders: 267,
    image: ActionCamera2,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    fullDescription:
      "Versatile mirrorless camera with excellent video capabilities.",
    supplier: {
      name: "Digital Camera Hub",
      rating: 4.5,
      responseRate: "96%",
      responseTime: "45 minutes",
      memberSince: "2020",
    },
  },
  {
    id: 6,
    name: "Panasonic Lumix GH5 Camera",
    price: 1397.0,
    originalPrice: 1599.0,
    rating: 8.5,
    orders: 198,
    image: ActionCamera3,
    description:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    fullDescription:
      "Excellent camera for videography and photography enthusiasts.",
    supplier: {
      name: "Video Pro Store",
      rating: 4.6,
      responseRate: "94%",
      responseTime: "1.5 hours",
      memberSince: "2019",
    },
  },
  {
    id: 7,
    name: "Fujifilm X-T4 Mirrorless Camera",
    price: 1699.0,
    originalPrice: null,
    rating: 8.8,
    orders: 267,
    image: HotFlask,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 8,
    name: "Panasonic Lumix GH5 Camera",
    price: 1397.0,
    originalPrice: 1599.0,
    rating: 8.5,
    orders: 198,
    image: ActionCamera3,
    description:
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
  },
];

// Helper function to render stars
const renderStars = (rating) => {
  // Validate and normalize rating
  const normalizedRating =
    rating && typeof rating === "number" ? Math.max(0, Math.min(5, rating)) : 0;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div className="flex items-center gap-1">
      {fullStars > 0 &&
        [...Array(fullStars)].map((_, i) => (
          <AiFillStar key={i} className="text-yellow-400 w-4 h-4" />
        ))}
      {hasHalfStar && <span className="text-yellow-400">½</span>}
      {emptyStars > 0 &&
        [...Array(emptyStars)].map((_, i) => (
          <AiOutlineStar key={i} className="text-gray-300 w-4 h-4" />
        ))}
    </div>
  );
};

export default function ProductDetail({ productId = 1 }) {
  const [activeTab, setActiveTab] = useState("description");
  const [savedForLater, setSavedForLater] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = allProducts.find((p) => p.id === productId) || allProducts[0];
  const relatedProducts = allProducts
    .filter((p) => p.id !== productId)
    .slice(0, 6);
  const youMayLikeProducts = allProducts
    .filter((p) => p.id !== productId)
    .slice(0, 3);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping" },
    { id: "about", label: "About seller" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#f7fafc] min-h-screen">
        {/* Breadcrumbs */}
        <div className="container py-3 border-b border-gray-200">
          <nav className="flex items-center text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <RxChevronRight className="mx-2" />
            <a href="#" className="hover:text-blue-600">
              Electronics
            </a>
            <RxChevronRight className="mx-2" />
            <a href="#" className="hover:text-blue-600">
              Cameras
            </a>
            <RxChevronRight className="mx-2" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>

        <div className="container py-6">
          {/* Main Product Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Images */}
              <div>
                <div className="border border-gray-300 rounded-lg mb-4 aspect-square flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {[product.image, product.image, product.image].map(
                    (img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-20 h-20 rounded border-2 flex-shrink-0 ${
                          selectedImage === index
                            ? "border-blue-600"
                            : "border-gray-200"
                        } overflow-hidden`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Product Details - Middle Part */}
              <div className="lg:col-span-1">
                {/* Availability Status */}
                <div className="flex items-center gap-1 mb-3">
                  <FaCheck className="text-[#55bdc3] mt-1" />
                  <span className="text-sm text-[#55bdc3] font-medium">
                    Instock
                  </span>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </h1>

                {/* Rating and Sales Information */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    {renderStars(9.3)}
                    <span className="text-sm font-medium text-[#8b96a5]">
                      9.3
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#8b96a5]">
                    <MdMessage className="w-4 h-4" />
                    <span className="text-sm ">32 reviews</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#8b96a5]">
                    <FaShoppingBag className="w-4 h-4" />
                    <span className="text-sm">154 sold</span>
                  </div>
                </div>

                {/* Tiered Pricing */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">50-100 pcs</span>
                      <span className="text-lg font-bold text-gray-900">
                        $98.00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">100-700 pcs</span>
                      <span className="text-lg font-bold text-gray-900">
                        $90.00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">700+ pcs</span>
                      <span className="text-lg font-bold text-gray-900">
                        $78.00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-3 border-b border-gray-300">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px] mb-3">
                      Price:
                    </span>
                    <span className="text-sm text-gray-700">Negotiable</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px]">
                      Type:
                    </span>
                    <span className="text-sm text-gray-700">Classic shoes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px]">
                      Material:
                    </span>
                    <span className="text-sm text-gray-700">
                      Plastic material
                    </span>
                  </div>
                  <div className="flex items-start gap-3 border-b border-gray-300">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px] mb-3">
                      Design:
                    </span>
                    <span className="text-sm text-gray-700">Modern nice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px]">
                      Customization:
                    </span>
                    <span className="text-sm text-gray-700">
                      Customized logo and design custom packages
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px]">
                      Protection:
                    </span>
                    <span className="text-sm text-gray-700">Refund Policy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-[#8b96a5] font-medium min-w-[100px]">
                      Warranty:
                    </span>
                    <span className="text-sm text-gray-700">
                      2 years full warranty
                    </span>
                  </div>
                </div>
              </div>

              {/* Supplier Information - Right Part */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                  {/* Supplier Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#55bdc3] rounded flex items-center justify-center">
                      <span className="text-[#0d8e94] font-bold text-lg">
                        R
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Supplier</p>
                      <h3 className="font-semibold text-gray-900">
                        Guanjoi Trading LLC
                      </h3>
                    </div>
                  </div>

                  {/* Location and Verification */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col h-4 w-6 overflow-hidden rounded-sm ring-1 ring-gray-200">
                        <span className="w-full h-1.5 bg-black" aria-hidden />
                        <span className="w-full h-1.5 bg-red-600" aria-hidden />
                        <span
                          className="w-full h-1.5 bg-yellow-400"
                          aria-hidden
                        />
                      </div>
                      <span className="text-sm text-gray-700">
                        Germany, Berlin
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuShieldCheck className="w-5 h-5 text-gray-700" />
                      <span className="text-sm text-gray-700">
                        Verified Seller
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LuGlobe className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        Worldwide shipping
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                      Send inquiry
                    </button>
                    <button className="w-full bg-white border border-gray-300 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                      Seller's profile
                    </button>
                  </div>

                  {/* Save for Later */}
                  <button
                    onClick={() => setSavedForLater(!savedForLater)}
                    className={`w-full mt-3 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2 ${
                      savedForLater
                        ? "bg-red-50 text-red-600 border border-red-200"
                        : "bg-white border border-gray-300 text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {savedForLater ? (
                      <>
                        <AiFillHeart className="w-5 h-5" />
                        <span>Saved</span>
                      </>
                    ) : (
                      <>
                        <AiOutlineHeart className="w-5 h-5" />
                        <span>Save for later</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-lg border border-gray-200 mb-6">
            {/* Tab Headers */}
            <div className="border-b border-gray-200">
              <div className="flex gap-6 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600 font-medium"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "description" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    {/* Text Block */}
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>

                    {/* Product Specifications Table */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Product Specifications
                      </h3>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b border-gray-200">
                              <td className="bg-gray-300 px-4 py-2 text-gray-600 font-medium">
                                Model
                              </td>
                              <td className="px-4 py-2 text-gray-900">
                                #8786867
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="bg-gray-300 px-4 py-2 text-gray-600 font-medium">
                                Style
                              </td>
                              <td className="px-4 py-2 text-gray-900">
                                Classic style
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="bg-gray-300 px-4 py-2 text-gray-600 font-medium">
                                Certificate
                              </td>
                              <td className="px-4 py-2 text-gray-900">
                                ISO-898921212
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <td className="bg-gray-300 px-4 py-2 text-gray-600 font-medium">
                                Size
                              </td>
                              <td className="px-4 py-2 text-gray-900">
                                34mm x 450mm x 19mm
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-gray-300 px-4 py-2 text-gray-600 font-medium">
                                Memory
                              </td>
                              <td className="px-4 py-2 text-gray-900">
                                36GB RAM
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Features
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <FaCheck className="text-gray-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">
                            Some great feature name here
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="text-gray-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="text-gray-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">
                            Duis aute irure dolor in reprehenderit
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <FaCheck className="text-gray-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">
                            Some great feature name here
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      You may like
                    </h3>
                    <div className="space-y-4">
                      {youMayLikeProducts.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-3 border border-gray-300 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-2 mb-1">
                              {renderStars(item.rating)}
                              <span className="text-xs text-gray-600">
                                {item.rating}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-gray-900">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Customer Reviews
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">
                              John Doe
                            </span>
                            <div className="flex">{renderStars(5)}</div>
                            <span className="text-sm text-gray-500">
                              2 days ago
                            </span>
                          </div>
                          <p className="text-gray-600">
                            Excellent product! The quality exceeded my
                            expectations. Fast shipping and great customer
                            service.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-900">
                              Jane Smith
                            </span>
                            <div className="flex">{renderStars(4)}</div>
                            <span className="text-sm text-gray-500">
                              1 week ago
                            </span>
                          </div>
                          <p className="text-gray-600">
                            Good value for money. The product works as
                            described. Would recommend!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "shipping" && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Shipping Information
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Free Shipping
                      </h4>
                      <p className="text-gray-600 text-sm">
                        This item qualifies for free shipping on orders over
                        $50. Estimated delivery time: 3-5 business days.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Express Shipping
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Available for an additional $15. Estimated delivery
                        time: 1-2 business days.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        International Shipping
                      </h4>
                      <p className="text-gray-600 text-sm">
                        International shipping available. Delivery times vary by
                        destination. Additional fees may apply.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "about" && product.supplier && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    About {product.supplier.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {product.supplier.name}
                        </h4>
                        <p className="text-sm text-gray-600">Verified Seller</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Response Rate</p>
                        <p className="font-semibold text-gray-900">
                          {product.supplier.responseRate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Response Time</p>
                        <p className="font-semibold text-gray-900">
                          {product.supplier.responseTime}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Member Since</p>
                        <p className="font-semibold text-gray-900">
                          {product.supplier.memberSince}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Rating</p>
                        <div className="flex items-center gap-1">
                          {renderStars(product.supplier.rating)}
                          <span className="font-semibold text-gray-900 ml-1">
                            {product.supplier.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">About</h4>
                      <p className="text-gray-600">
                        {product.supplier.name} is a trusted seller specializing
                        in high-quality electronics and cameras. We are
                        committed to providing excellent customer service and
                        fast shipping.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-6 bg-white border border-gray-200 p-2">
            <h2 className="text-xl font-semibold text-gray-900 mt-4 ml-4">
              Related products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 h-48 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Super Discount Banner */}
          <div className="bg-blue-600 rounded-lg p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Super discount on more than 100 USD
                </h3>
                <p className="text-blue-100">
                  Save up to 20% off on selected items
                </p>
              </div>
              <button className="bg-[#f38332] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#f19b5c] hover:text-[#1c1c1c]  transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <SectionNewsletter />
      <Footer />
    </>
  );
}
