
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

export default function Pagination({ currentPage = 1, totalPages = 3, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex justify-end items-center">
      <div className="flex bg-gray-200 rounded-md overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={`px-4 py-2 flex items-center justify-center transition-colors ${
            isFirstPage 
              ? 'text-gray-400 cursor-not-allowed bg-white' 
              : 'text-gray-500 hover:bg-gray-50 bg-white cursor-pointer'
          } border border-gray-300`}
        >
          <RxChevronLeft className="w-5 h-5" />
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <div key={page} className="flex items-center">
            <button
              onClick={() => onPageChange(page)}
              className={`px-4 py-2 flex items-center justify-center min-w-[44px] transition-colors ${
                page === currentPage
                  ? 'bg-gray-300 text-gray-700 font-medium'
                  : 'bg-white text-gray-900 hover:bg-gray-50 cursor-pointer'
              } ${index < pages.length - 1 ? 'border border-gray-300' : ''}`}
            >
              {page}
            </button>
          </div>
        ))}

        {/* Next Button */}
        <button
          onClick={() => !isLastPage && onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`px-4 py-2 flex items-center justify-center border border-gray-300 transition-colors ${
            isLastPage 
              ? 'text-gray-400 cursor-not-allowed bg-white' 
              : 'text-gray-900 hover:bg-gray-50 bg-white cursor-pointer'
          }`}
        >
          <RxChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}