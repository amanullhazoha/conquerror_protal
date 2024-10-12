import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from "@/components/ui/pagination";

const PaginationComponent = ({ totalPages, currentPage, handlePageChange }) => {
	// Constants
	const siblingCount = 1; // Number of pages to show on either side of the current page
	const totalPageNumbers = siblingCount + 5; // Total number of page numbers to show (current + siblings + 2 for first and last)

	// Function to generate pagination items with ellipses
	const renderPaginationItems = () => {
		const items = [];

		// Add Previous button
		if (currentPage > 1) {
			items.push(
				<PaginationItem key="previous" className="cursor-pointer select-none">
					<PaginationPrevious
						onClick={() => handlePageChange(currentPage - 1)}
					/>
				</PaginationItem>
			);
		}

		// Calculate range of page numbers
		const startPage = Math.max(2, currentPage - siblingCount);
		const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

		// Add First Page
		items.push(
			<PaginationItem key={1} className="cursor-pointer select-none">
				<PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
			</PaginationItem>
		);

		// Add Ellipsis if needed
		if (startPage > 2) {
			items.push(
				<PaginationItem key="ellipsis-start">
					<span>...</span>
				</PaginationItem>
			);
		}

		// Add Page Numbers
		for (let page = startPage; page <= endPage; page++) {
			items.push(
				<PaginationItem key={page} className="cursor-pointer select-none">
					<PaginationLink
						onClick={() => handlePageChange(page)}
						isActive={page === currentPage}
					>
						{page}
					</PaginationLink>
				</PaginationItem>
			);
		}

		// Add Ellipsis if needed
		if (endPage < totalPages - 1) {
			items.push(
				<PaginationItem key="ellipsis-end">
					<span>...</span>
				</PaginationItem>
			);
		}

		// Add Last Page
		if (totalPages > 1) {
			items.push(
				<PaginationItem key={totalPages} className="cursor-pointer select-none">
					<PaginationLink onClick={() => handlePageChange(totalPages)}>
						{totalPages}
					</PaginationLink>
				</PaginationItem>
			);
		}

		// Add Next button
		if (currentPage < totalPages) {
			items.push(
				<PaginationItem key="next" className="cursor-pointer select-none">
					<PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
				</PaginationItem>
			);
		}

		return items;
	};

	return (
		<Pagination className="flex-1">
			<PaginationContent>{renderPaginationItems()}</PaginationContent>
		</Pagination>
	);
};

export default PaginationComponent;
