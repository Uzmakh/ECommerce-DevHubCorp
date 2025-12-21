import { useState } from "react";
import { RxChevronUp, RxChevronDown } from "react-icons/rx";

export default function SidebarFilters() {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 999999 });
  const [selectedCondition, setSelectedCondition] = useState("Any");

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (type, value) => {
    const numValue = parseInt(value) || 0;
    setPriceRange(prev => {
      const newRange = {
        ...prev,
        [type]: numValue
      };
      // Ensure min doesn't exceed max and vice versa
      if (type === 'min' && newRange.min > newRange.max) {
        newRange.min = newRange.max;
      }
      if (type === 'max' && newRange.max < newRange.min) {
        newRange.max = newRange.min;
      }
      return newRange;
    });
  };

  const handleApplyPrice = () => {
    // Apply price filter logic here
    console.log('Applying price filter:', priceRange);
  };

  // Calculate the percentage for the slider track fill
  const minPercent = (priceRange.min / 999999) * 100;
  const maxPercent = (priceRange.max / 999999) * 100;

  return (
    <aside className="w-full max-w-xs text-gray-900 p-4">
      {/* Category Filter */}
      <div className="mb-4 border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Category</h3>
          {expandedSections.category ? (
            <RxChevronUp />
          ) : (
            <RxChevronDown />
          )}
        </button>
        {expandedSections.category && (
          <ul className="space-y-2">
            {[
              "Mobile accessory",
              "Electronics",
              "Smartphones",
              "Modern tech",
            ].map((cat) => (
              <li key={cat}>
                <span className="text-gray-900 text-sm cursor-pointer">
                  {cat}
                </span>
              </li>
            ))}
            <li>
              <button className="text-blue-500 text-sm hover:text-blue-400 mt-1">
                See all
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Brand Filter */}
      <div className="mb-4 border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('brands')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Brands</h3>
          {expandedSections.brands ? (
            <RxChevronUp />
          ) : (
            <RxChevronDown />
          )}
        </button>
        {expandedSections.brands && (
          <ul className="space-y-2">
            {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((brand) => (
              <li key={brand}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-900 text-sm">{brand}</span>
                </label>
              </li>
            ))}
            <li>
              <button className="text-blue-500 text-sm hover:text-blue-400 mt-1">
                See all
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Features Filter */}
      <div className="mb-4 border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('features')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Features</h3>
          {expandedSections.features ? (
            <RxChevronUp/>
          ) : (
            <RxChevronDown />
          )}
        </button>
        {expandedSections.features && (
          <ul className="space-y-2">
            {[
              "Metallic",
              "Plastic cover",
              "8GB Ram",
              "Super power",
              "Large Memory",
            ].map((feature) => (
              <li key={feature}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-900 text-sm">{feature}</span>
                </label>
              </li>
            ))}
            <li>
              <button className="text-blue-500 text-sm hover:text-blue-400 mt-1">
                See all
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-4 border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('priceRange')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Price range</h3>
          {expandedSections.priceRange ? (
            <RxChevronUp />
          ) : (
            <RxChevronDown />
          )}
        </button>
        {expandedSections.priceRange && (
          <div className="space-y-3">
            {/* Dual Range Slider */}
            <div className="relative h-2">
              {/* Track background */}
              <div className="absolute w-full h-2 bg-gray-700 rounded-lg"></div>
              {/* Active range */}
              <div
                className="absolute h-2 bg-blue-600 rounded-lg"
                style={{
                  left: `${minPercent}%`,
                  width: `${maxPercent - minPercent}%`
                }}
              ></div>
              {/* Min slider */}
              <input
                type="range"
                min="0"
                max="999999"
                value={priceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="absolute w-full h-2 appearance-none cursor-pointer z-10 slider-thumb"
                style={{
                  background: 'transparent',
                  zIndex: priceRange.min > priceRange.max - 10000 ? 20 : 10
                }}
              />
              {/* Max slider */}
              <input
                type="range"
                min="0"
                max="999999"
                value={priceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer z-10 slider-thumb"
                style={{
                  background: 'transparent',
                  zIndex: priceRange.max < priceRange.min + 10000 ? 20 : 10
                }}
              />
            </div>
            {/* Min/Max Inputs */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Min</label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-gray-200 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Max</label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-gray-200 text-sm"
                />
              </div>
            </div>
            {/* Apply Button */}
            <button
              onClick={handleApplyPrice}
              className="w-full text-blue-600 text-sm font-medium py-2 px-4 rounded transition-colors border border-gray-300"
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Condition Filter */}
      <div className="mb-4 border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('condition')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Condition</h3>
          {expandedSections.condition ? (
            <RxChevronUp  />
          ) : (
            <RxChevronDown  />
          )}
        </button>
        {expandedSections.condition && (
          <ul className="space-y-2">
            {["Any", "Refurbished", "Brand new", "Old Items"].map((cond) => (
              <li key={cond}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    value={cond}
                    checked={selectedCondition === cond}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-900 text-sm">{cond}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Ratings Filter */}
      <div className="border-t border-gray-300 pt-4">
        <button
          onClick={() => toggleSection('ratings')}
          className="flex justify-between items-center w-full mb-2"
        >
          <h3 className="font-medium text-gray-900">Ratings</h3>
          {expandedSections.ratings ? (
            <RxChevronUp className="text-gray-400" />
          ) : (
            <RxChevronDown className="text-gray-400" />
          )}
        </button>
        {expandedSections.ratings && (
          <ul className="space-y-2">
            {[5, 4, 3, 2, 1].map((starCount, index) => (
              <li key={`rating-${starCount}-${index}`}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rating"
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="flex items-center text-sm">
                    {/* Filled stars */}
                    <span className="text-orange-500">
                      {'★'.repeat(starCount)}
                    </span>
                    {/* Empty stars */}
                    {starCount < 5 && (
                      <span className="text-gray-500">
                        {'☆'.repeat(5 - starCount)}
                      </span>
                    )}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
