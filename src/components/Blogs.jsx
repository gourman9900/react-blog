import React, { useState } from 'react'
import ReactPaginate from "react-paginate";
import Cards from './CardsNew';
import "./blogs.css"

const Blogs = (props) => {
    const {blog,blogdelete} = props
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage= 6;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = blog.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(blog.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % blog.length;
        setItemOffset(newOffset);
    };
    
    const handledelete = (event) => {
        
    }

    return (
        <>
        <div className='container'>
            {currentItems.map((item) => {
                return <Cards props={item} blog={blog} blogdelete={blogdelete}/>
            })}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageClassName='page-num'
            activeClassName='page-active'
            previousLinkClassName='page-pre'
            nextLinkClassName='page-next'
        />
        </>
    );
}

export default Blogs