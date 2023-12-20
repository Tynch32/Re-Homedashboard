import PropType from 'prop-types'

export const Paginator = ({
    pagination,
    handlePagination }

) => {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                {
                    pagination.currentPage !== 1 && (
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous" onClick={() => handlePagination(event, `/api/users?page=${pagination.currentPage - 1}&limit=8`)}>
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    )
                }


                {
                    pagination.pages.map(paginate => (
                        <li key={paginate.number} className={`page-item ${paginate.number === pagination.currentPage && 'active'}`} >
                            <a className='page-link' href="#" onClick={() => handlePagination(event, paginate.url)}>
                                {paginate.number}
                            </a>
                        </li>
                    ))
                }
                {
                    pagination.currentPage !== pagination.pages[pagination.pages.length -1].number && (
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next" onClick={() => handlePagination(event, `/api/users?page=${pagination.currentPage + 1}&limit=8`)}>
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}

Paginator.propType = {
    pagination: PropType.object,
    handlePagination: PropType.func
}