import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className="pageWrapper">
            {
                pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        className={page === p ? "pageCurrent page" : 'page'}
                        key={p}
                    >
                            {p}
                        </span>
                )
            }
        </div>
    );
};

export default Pagination;