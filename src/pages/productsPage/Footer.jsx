import { usePaginationStore } from "../../store/pagination.store.jsx";

const Footer = () => {
  const { currentPage, itemsPerPage, totalItems, setCurrentPage } =
    usePaginationStore();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
    console.log("Footer debug:", { currentPage, itemsPerPage, totalItems, totalPages });

  if (totalPages <= 1) return null; // hide pagination if only 1 page

  // Calculate pages to show (simple ellipsis logic)
  const getPages = () => {
    const pages = [];
    if (totalPages <= 7) {
      // small number of pages → show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // many pages → show first, last, current ±1, with ellipsis
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const pages = getPages();

  const handlePageClick = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] py-10 border-t border-amber-500/20 text-center">
      <h3 className="text-3xl font-light uppercase bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
        Build-Your-Own Meal
      </h3>
      <p className="text-gray-700 text-xs mt-2 mb-4">© 2024 Nutrition Laboratory</p>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap items-center">
        {/* Prev button */}
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          className={`px-4 py-2 border rounded-sm ${
            currentPage === 1
              ? "text-gray-700 border-gray-700 cursor-not-allowed"
              : "text-gray-400 border-gray-700"
          }`}
        >
          Prev
        </button>

        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(page)}
            className={`px-4 py-2 border rounded-sm ${
              page === currentPage
                ? "bg-amber-400 text-black border-amber-400"
                : page === "..."
                ? "border-none cursor-default text-gray-500"
                : "text-gray-400 border-gray-700"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          className={`px-4 py-2 border rounded-sm ${
            currentPage === totalPages
              ? "text-gray-700 border-gray-700 cursor-not-allowed"
              : "text-gray-400 border-gray-700"
          }`}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Footer;
