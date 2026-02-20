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

      containerClassName="font-medium flex items-center justify-center  gap-2 mt-10 mb-10"
      pageLinkClassName="hover:cursor-pointer px-4 py-2 rounded-3xl  text-gray-200 hover:bg-orange-400 transition-colors block"
      activeLinkClassName="!bg-orange-400  !text-white"
      previousLinkClassName="hover:cursor-pointer px-4 py-2 rounded-3xl hover:bg-orange-400 block"
      nextLinkClassName="hover:cursor-pointer px-4 py-2 rounded-3xl hover:bg-orange-400 block"
      disabledLinkClassName="opacity-30 !cursor-not-allowed"
      breakLinkClassName="px-4 py-2 text-gray-500"
    />
  );
}

export default Pagination; 