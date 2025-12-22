import { useState } from "react";
import CartNavTop from "../../components/CartNavTop";
import Footer from "../../components/Footer";
import { FaShoppingBag, FaArrowLeft } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { LuShieldCheck, LuTruck, LuMessageCircle } from "react-icons/lu";

import Payment1 from "../../assets/payment-1.png";
import Payment2 from "../../assets/payment-2.png";
import Payment3 from "../../assets/payment-3.png";
import Payment4 from "../../assets/payment-4.png";
import Payment5 from "../../assets/payment-5.png";

// Import product images
import CanonCamera from "../../assets/eg10-image.png";
import ActionCamera from "../../assets/dealimages/product-5.png";
import MirrorlessCamera from "../../assets/eg11-image.png";
import Laptop from "../../assets/dealimages/product-2.png";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors, for men and lady",
      image: CanonCamera,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      quantity: 9,
    },
    {
      id: 2,
      name: "T-shirts with multiple colors, for men and lady",
      image: ActionCamera,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: 39.0,
      quantity: 3,
    },
    {
      id: 3,
      name: "T-shirts with multiple colors, for men and lady",
      image: MirrorlessCamera,
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      quantity: 1,
    },
  ]);

  const [savedForLater, setSavedForLater] = useState([
    {
      id: 1,
      name: "GoPro HERO6 4K Action Camera - Black",
      image: Laptop,
      price: 99.5,
    },
    {
      id: 2,
      name: "GoPro HERO6 4K Action Camera - Black",
      image: CanonCamera,
      price: 99.5,
    },
    {
      id: 3,
      name: "GoPro HERO6 4K Action Camera - Black",
      image: ActionCamera,
      price: 99.5,
    },
    {
      id: 4,
      name: "GoPro HERO6 4K Action Camera - Black",
      image: MirrorlessCamera,
      price: 99.5,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 60.0;
  const tax = 14.0;
  const total = subtotal - discount + tax;

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSaveForLater = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      setSavedForLater([...savedForLater, item]);
      handleRemove(id);
    }
  };

  const handleMoveToCart = (id) => {
    const item = savedForLater.find((item) => item.id === id);
    if (item) {
      setCartItems([
        ...cartItems,
        {
          ...item,
          size: "medium",
          color: "blue",
          material: "Plastic",
          seller: "Artel Market",
          quantity: 1,
        },
      ]);
      setSavedForLater(savedForLater.filter((item) => item.id !== id));
    }
  };

  const handleRemoveAll = () => {
    setCartItems([]);
  };

  return (
    <>
      <CartNavTop />
      <div className="bg-[#f7fafc] min-h-screen">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - Cart Items */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                My cart ({cartItems.length})
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 bg-white rounded p-4 border border-gray-300">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className=" flex flex-col sm:flex-row gap-4 border-b border-gray-300 py-4"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain rounded"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex justify-between flex-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <div className="text-xs text-gray-600 mb-2">
                          <span>Size: {item.size}, </span>
                          <span>Color: {item.color}, </span>
                          <span>Material: {item.material}</span>
                          <p className="text-xs text-gray-500 mb-2 mt-2">
                            Seller: {item.seller}
                          </p>
                          {/* Action Buttons */}
                          <div className="flex gap-4">
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-sm text-red-600 hover:text-red-700 border border-gray-300 py-1 px-1 rounded"
                            >
                              Remove
                            </button>
                            <button
                              onClick={() => handleSaveForLater(item.id)}
                              className="text-sm text-blue-600 hover:text-blue-700 border border-gray-300 py-1 px-1 rounded"
                            >
                              Save for later
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-1 text-end">
                          ${item.price.toFixed(2)}
                        </p>

                        {/* Quantity Selector */}
                        <div className="w-20">
                          <label className="text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">
                            Qty:
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                            >
                              {[...Array(20)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between">
                  {/* Back to Shop Button */}
                  <button className="flex items-center gap-2 text-white bg-blue-600 py-2 px-2 rounded">
                    <FaArrowLeft />
                    <span>Back to shop</span>
                  </button>

                  {/* Remove All Button */}
                  <button
                    onClick={handleRemoveAll}
                    className="text-blue-600 bg-white font-medium hover:text-blue-700 border border-gray-300 py-2 px-2 rounded"
                  >
                    Remove all
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
                <div className="p-4 flex items-start gap-3">
                  <LuShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Secure payment
                    </h4>
                    <p className="text-sm text-gray-600">
                      Have you ever finally just
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-start gap-3">
                  <LuMessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Customer support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Have you ever finally just
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-start gap-3">
                  <LuTruck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Free delivery
                    </h4>
                    <p className="text-sm text-gray-600">
                      Have you ever finally just
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="lg:col-span-1 mt-14">
              {/* Coupon Section */}
              <div className="bg-white border border-gray-300 p-4 mb-4">
                <p className="text-sm text-gray-700 mb-2">Have a coupon?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Add coupon"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-white p-4 border border-gray-300">
                <div className="space-y-3 mb-4 pb-6 border-b border-gray-200 bg-white">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-gray-900 font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount:</span>
                    <span className="text-red-600 font-medium">
                      - ${discount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax:</span>
                    <span className="text-green-600 font-medium">
                      + ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-green-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-colors mb-6">
                  Checkout
                </button>

                {/* Payment Methods */}
                <div className="flex items-center justify-evenly gap-3">
                  <img src={Payment1} alt="" />
                  <img src={Payment2} alt="" />
                  <img src={Payment3} alt="" />
                  <img src={Payment4} alt="" />
                  <img src={Payment5} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Saved for Later Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Saved for later
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {savedForLater.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded border border-gray-200 p-4"
                >
                  <div className="w-full h-40 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-lg font-bold text-gray-900 mb-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <h4 className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {item.name}
                  </h4>
                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    className="flex items-center justify-between gap-2 bg-white text-blue-600 px-4 py-2 rounded border border-gray-300 font-medium hover:bg-blue-700 hover:text-white transition-colors"
                  >
                    <IoMdCart />
                    <span>Move to cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discount Banner */}
          <div className="mt-8 bg-blue-600 rounded-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-30 transform rotate-45 translate-x-16 -translate-y-16"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Super discount on more than 100 USD
                </h3>
                <p className="text-blue-100">
                  Have you ever finally just write dummy info
                </p>
              </div>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
