import ReactPaginate from 'react-paginate';

function Pagination({ currPage, setCurrPage, totalPages }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => setCurrPage(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel="<"
      forcePage={currPage - 1}

      containerClassName="flex items-center justify-center  gap-1 mt-10 mb-10"
      pageLinkClassName="hover:cursor-pointer px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors block"
      activeLinkClassName="!bg-gray-500 !text-white"
      previousLinkClassName="hover:cursor-pointer px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 block"
      nextLinkClassName="hover:cursor-pointer px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 block"
      disabledLinkClassName="opacity-30 !cursor-not-allowed"
      breakLinkClassName="px-4 py-2 text-gray-500"
    />
  );
}

export default Pagination; 