import { PropertyCard } from "@/components/property-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Suspense, useState, useEffect } from "react"
// import { properties } from "./data/data"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
// Import Next.js navigation hooks
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {useAuth } from "@/context/AuthContext"

interface PropertySectionProps {
  handleCompareToggle: (id: string, isComparing: boolean) => void;
  comparingProperties: string[];
}

const ITEMS_PER_PAGE = 6; // Define how many properties per page

function PropertyListSkeleton() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid cols */}
        {[...Array(ITEMS_PER_PAGE)].map((_, i) => ( // Use ITEMS_PER_PAGE
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-4"></div>
              <div className="flex justify-between mb-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

export default function PropertySection({handleCompareToggle, comparingProperties}: PropertySectionProps) {
  const { properties = [] } =  useAuth()
  // --- URL State Management for Pagination ---
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current page from URL search parameter 'page', default to 1
  const getCurrentPageFromUrl = () => {
    const pageParam = searchParams.get('page');
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    // Ensure page is a valid number and at least 1
    return !isNaN(page) && page > 0 ? page : 1;
  };

  // Use state to hold the current page, initialized from URL
  // Note: We could derive currentPage directly from searchParams on each render,
  // but using useState allows potential effects or other logic based on page changes.
  const [currentPage, setCurrentPage] = useState(getCurrentPageFromUrl());

  // Effect to update state if URL changes (e.g., browser back/forward)
  useEffect(() => {
    setCurrentPage(getCurrentPageFromUrl());
  }, [searchParams]); // Re-run effect when searchParams change
  // --- End URL State Management ---


  const totalProperties = properties.length; // In a real app, this would likely come from props or fetched data based on filters
  const totalPages = Math.ceil(totalProperties / ITEMS_PER_PAGE);

  // Adjust page if URL had an invalid page number (e.g., page > totalPages)
  useEffect(() => {
    const validCurrentPage = getCurrentPageFromUrl();
    if (validCurrentPage > totalPages && totalPages > 0) {
      // If the page from URL is out of bounds, navigate to the last valid page
      handlePageChange(totalPages);
    } else if (validCurrentPage !== currentPage) {
        // Sync state if it somehow diverged from URL (less likely with the above useEffect)
        setCurrentPage(validCurrentPage);
    }
  }, [totalPages, searchParams]); // Re-run when totalPages or searchParams change


  // Calculate the properties to display on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  // TODO: Apply sorting based on the Select component's value before slicing
  const currentProperties = properties.slice(startIndex, endIndex);

  // Function to update URL and state when page changes
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      // Create new search params object based on current ones
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      // Update the 'page' parameter
      current.set('page', page.toString());

      // Create the new query string
      const search = current.toString();
      const query = search ? `?${search}` : '';

      // Push the new URL state to the router. This updates the URL
      // and adds an entry to the browser history.
      router.push(`${pathname}${query}`);

      // Update the state (though the useEffect listening to searchParams will also do this)
      // Setting it here provides a slightly faster UI update before the effect runs.
      setCurrentPage(page);

      window.scrollTo(0, 0); // Optional: scroll to top on page change
    }
  };

  // Helper function to generate the href for pagination links
  const getPageHref = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('page', page.toString());
    const search = current.toString();
    return `${pathname}?${search}`;
  }

  // Function to generate pagination items with ellipsis
  const renderPaginationItems = () => {
    const pageItems = [];
    const maxPagesToShow = 5; // Adjust as needed
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages are less than or equal to maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pageItems.push(
          <PaginationItem key={i}>
            <PaginationLink
              // Use generated href for better SEO and accessibility
              href={getPageHref(i)}
              // Prevent default link behavior and use router push
              onClick={(e) => { e.preventDefault(); handlePageChange(i); }}
              isActive={currentPage === i}
              className={currentPage === i ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
              aria-current={currentPage === i ? "page" : undefined} // Accessibility improvement
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      // Show ellipsis logic
      let startPage = Math.max(1, currentPage - halfMaxPages);
      let endPage = Math.min(totalPages, currentPage + halfMaxPages);

      // Adjust window if near the beginning or end
      if (currentPage <= halfMaxPages) {
        endPage = maxPagesToShow -1; // Leave space for first page and ellipsis potentially
      } else if (currentPage + halfMaxPages >= totalPages) {
        startPage = totalPages - maxPagesToShow + 2; // Leave space for last page and ellipsis potentially
      }

       // Always show first page
       pageItems.push(
        <PaginationItem key={1}>
          <PaginationLink
            href={getPageHref(1)}
            onClick={(e) => { e.preventDefault(); handlePageChange(1); }}
            isActive={currentPage === 1}
            className={currentPage === 1 ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
            aria-current={currentPage === 1 ? "page" : undefined}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );


      // Ellipsis at the beginning
      // Show ellipsis if startPage is greater than 2 (because page 1 is already shown)
      if (startPage > 2) {
        pageItems.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      // Adjust start/end page based on proximity to first/last page after adding page 1/totalPages
       startPage = Math.max(2, currentPage - halfMaxPages +1); // +1 because we have page 1
       endPage = Math.min(totalPages -1, currentPage + halfMaxPages -1); // -1 because we have last page

       if (currentPage <= halfMaxPages +1) {
           endPage = Math.min(totalPages -1, maxPagesToShow -1); // Show fixed number near start
       } else if (currentPage >= totalPages - halfMaxPages) {
           startPage = Math.max(2, totalPages - maxPagesToShow + 2); // Show fixed number near end
       }


      // Page numbers (between first and last)
      for (let i = startPage; i <= endPage; i++) {
         // Skip page 1 and totalPages if they fall within this loop (already handled)
         if (i === 1 || i === totalPages) continue;

        pageItems.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={getPageHref(i)}
              onClick={(e) => { e.preventDefault(); handlePageChange(i); }}
              isActive={currentPage === i}
               className={currentPage === i ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
               aria-current={currentPage === i ? "page" : undefined}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      // Ellipsis at the end
      // Show ellipsis if endPage is less than totalPages - 1 (because last page is shown separately)
      if (endPage < totalPages - 1) {
        pageItems.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

       // Always show last page if totalPages > 1
       if (totalPages > 1) {
        pageItems.push(
            <PaginationItem key={totalPages}>
            <PaginationLink
                href={getPageHref(totalPages)}
                onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }}
                isActive={currentPage === totalPages}
                className={currentPage === totalPages ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
                aria-current={currentPage === totalPages ? "page" : undefined}
            >
                {totalPages}
            </PaginationLink>
            </PaginationItem>
        );
       }
    }
    // Simplified ellipsis logic - show first, last, current +/- range, and ellipses
    // This might need further refinement based on exact desired behavior for edge cases.
    // The above logic attempts a common pattern but can be complex.
    // Consider using a pagination library if complex logic is needed.

    return pageItems;
  };


  return (
    <div className="lg:w-3/4">
    {/* Results Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h2 className="text-xl font-semibold">{totalProperties} Properties Found</h2> {/* Use totalProperties */}
        <p className="text-gray-500">Based on your search criteria</p>
      </div>
      <div className="flex items-center mt-4 sm:mt-0">
        <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Sort by:</span>
        {/* TODO: Implement sorting logic and potentially sync sort state with URL params too */}
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    {/* Property Grid */}
    <Suspense fallback={<PropertyListSkeleton />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid cols */}
        {currentProperties.map((property) => ( // Map over currentProperties
          <PropertyCard
          key={property.id}
          property={property}
          onCompareToggle={handleCompareToggle}
          isComparing={comparingProperties.includes(property.id)} />
        ))}
      </div>
    </Suspense>

    {/* Pagination */}
    {totalPages > 1 && ( // Only show pagination if there's more than one page
        <div className="mt-12 flex justify-center">
        <Pagination>
            <PaginationContent>
            <PaginationItem>
                <PaginationPrevious
                // Generate href for the previous page
                href={currentPage > 1 ? getPageHref(currentPage - 1) : '#'}
                onClick={(e) => {
                    if (currentPage > 1) {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                    } else {
                        // Prevent navigation if already on first page
                        e.preventDefault();
                    }
                 }}
                // Disable link visually and functionally if on the first page
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                aria-disabled={currentPage === 1} // Accessibility improvement
                />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
                <PaginationNext
                 // Generate href for the next page
                 href={currentPage < totalPages ? getPageHref(currentPage + 1) : '#'}
                 onClick={(e) => {
                    if (currentPage < totalPages) {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                    } else {
                         // Prevent navigation if already on last page
                        e.preventDefault();
                    }
                 }}
                 // Disable link visually and functionally if on the last page
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                aria-disabled={currentPage === totalPages} // Accessibility improvement
                />
            </PaginationItem>
            </PaginationContent>
        </Pagination>
        </div>
    )}
  </div>
  )
}
