import Navbar from "../../components/Navbar";
import SidebarFilters from "../../components/SidebarFilters";
import SectionNewsletter from "../../components/SectionNewsletter";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { FaList, FaTh } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";

import CanonCamera from '../../assets/eg10-image.png'
import ActionCamera from '../../assets/dealimages/product-5.png'
import MirrorlessCamera from '../../assets/eg11-image.png'
import Laptop from '../../assets/dealimages/product-2.png'
import ActionCamera2 from '../../assets/dealimages/product-1.png'
import ActionCamera3 from '../../assets/eg-headphones.png'




const allProducts = [
  {
    id: 1,
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.0,
    originalPrice: 1128.0,
    rating: 7.5,
    orders: 154,
    image: CanonCamera,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.0,
    originalPrice: null,
    rating: 7.5,
    orders: 154,
    image: ActionCamera,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Sony Alpha A7 III Mirrorless Camera',
    price: 1998.0,
    originalPrice: 2299.0,
    rating: 9.2,
    orders: 342,
    image: MirrorlessCamera,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    name: 'Nikon D850 DSLR Camera',
    price: 2996.0,
    originalPrice: 3299.0,
    rating: 9.5,
    orders: 189,
    image: Laptop,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    name: 'Fujifilm X-T4 Mirrorless Camera',
    price: 1699.0,
    originalPrice: null,
    rating: 8.8,
    orders: 267,
    image: ActionCamera2,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    id: 6,
    name: 'Panasonic Lumix GH5 Camera',
    price: 1397.0,
    originalPrice: 1599.0,
    rating: 8.5,
    orders: 198,
    image: ActionCamera3,
    description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
  },
  
];

// Helper function to render stars
const renderStars = (rating) => {
  // Normalize rating to 5-star scale (assuming ratings can be out of 10)
  const normalizedRating = rating > 5 ? rating / 2 : rating;
  // Clamp between 0 and 5
  const clampedRating = Math.min(5, Math.max(0, normalizedRating));
  
  const fullStars = Math.min(5, Math.floor(clampedRating));
  const hasHalfStar = clampedRating % 1 >= 0.5 && fullStars < 5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
  
  return (
    <span className="text-yellow-400">
      {'★'.repeat(Math.max(0, fullStars))}
      {hasHalfStar && '½'}
      {'☆'.repeat(Math.max(0, emptyStars))}
    </span>
  );
};

// List View Component
const ListView = ({ displayedProducts, wishlist, onToggleWishlist }) => {
  return (
    <div className="space-y-4">
      {displayedProducts.map((product) => (
        <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4 relative hover:shadow-md transition-shadow">
          {/* Wishlist Icon */}
          <button
            onClick={() => onToggleWishlist(product.id)}
            className="absolute top-4 right-4 z-10 text-gray-400  transition-colors"
            aria-label="Add to wishlist"
          >
            {wishlist[product.id] ? (
              <AiFillHeart className="size-5 text-red-500" />
            ) : (
                <AiOutlineHeart className="size-5 border border-gray-300 text-blue-600" />
            )}
          </button>

          {/* Product Image */}
          <div className="flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-44 h-44 object-contain" 
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/128x128?text=Product';
              }}
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 pr-8">{product.name}</h2>
            
            {/* Price */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {/* Rating and Info */}
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1 text-sm">
                {renderStars(product.rating)}
                <span className="text-gray-600 ml-1">{product.rating}</span>
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-600">{product.orders} orders</span>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-green-600 font-medium">Free Shipping</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

            {/* View Details Button */}
            <button className="text-[#0d6efd] text-sm font-medium hover:underline self-start">
              View details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Grid View Component
const GridView = ({ displayedProducts }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {displayedProducts.map((product) => (
      <div key={product.id} className="bg-white rounded border border-gray-300 p-4 flex flex-col hover:shadow-lg transition-shadow">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-40 h-40 object-contain mb-4 m-auto" 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Product';
          }}
        />
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="line-through text-gray-400 text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          ⭐ {product.rating} | {product.orders} orders
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
        <button className="text-[#0d6efd] mt-3 text-sm hover:underline self-start">View details</button>
      </div>
    ))}
  </div>
);

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  const productsPerPage = viewMode === 'grid' ? 8 : itemsPerPage;
  const totalPages = Math.max(3, Math.ceil(allProducts.length / productsPerPage));
  
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  const toggleWishlist = (id) => {
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <Navbar/>
      <div className="bg-[#f7fafc] min-h-screen">
        {/* Breadcrumbs */}
        <div className="container py-3 border-b border-gray-200">
          <nav className="flex items-center text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Home</a>
            <RxChevronRight className="mx-2" />
            <a href="#" className="hover:text-blue-600">Clothings</a>
            <RxChevronRight className="mx-2" />
            <a href="#" className="hover:text-blue-600">Men's wear</a>
            <RxChevronRight className="mx-2" />
            <span className="text-gray-900">Summer clothing</span>
          </nav>
        </div>

        <div className="container py-6">
          <div className="flex gap-6">
            {/* Sidebar Filters */}
            <SidebarFilters />
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Header with filters and view toggle */}
              <div className="bg-white rounded border border-gray-200 p-4 mb-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <h1 className="text-sm font-medium text-gray-600">
                      12,911 items in <span className=" font-semibold text-gray-900">Mobile accessory</span>
                    </h1>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Verified Only Checkbox */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={verifiedOnly}
                        onChange={(e) => setVerifiedOnly(e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">Verified only</span>
                    </label>

                    {/* Featured Dropdown */}
                    <select className="text-sm border border-gray-300 rounded px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating: High to Low</option>
                      <option>Newest First</option>
                    </select>

                    {/* View Toggle */}
                    <div className="flex items-center gap-1 border border-gray-300 rounded overflow-hidden">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 ${
                          viewMode === 'grid' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        } transition-colors`}
                        aria-label="Grid view"
                      >
                        <FaTh className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 ${
                          viewMode === 'list' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        } transition-colors`}
                        aria-label="List view"
                      >
                        <FaList className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product List/Grid */}
              <div className="mb-6">
                {viewMode === 'list' ? (
                  <ListView 
                    displayedProducts={displayedProducts} 
                    wishlist={wishlist}
                    onToggleWishlist={toggleWishlist}
                  />
                ) : (
                  <GridView displayedProducts={displayedProducts} />
                )}
              </div>

              {/* Pagination and Items Per Page */}
              <div className="flex items-center justify-end gap-2">
                {/* Show Items Per Page Dropdown */}
                <div className="relative inline-block">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-900 cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value={10}>Show 10</option>
                    <option value={25}>Show 25</option>
                    <option value={50}>Show 50</option>
                    <option value={100}>Show 100</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <RxChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
      <SectionNewsletter/>
      <Footer/>
    </>
  );
}