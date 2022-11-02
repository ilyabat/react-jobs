import React from 'react'
import { getPagesArray } from '../util/pages'

const Pagination = ({ totalPages, page, changePage }) => {

    let pagesArray = [1, 2, 3, 4, 5]

    return (
        <div className='page'>
            <div className='page__block'>
                <span className='page__separator'>|</span>
                {
                    pagesArray.map(p =>
                        <span onClick={() => changePage(p)}
                            key={p}
                            className={page === p ? 'page__number page__current' : 'page__number'}>{p}</span>
                    )
                }
                <span className='page__separator'>|</span>

            </div>
        </div>

    )
}

export default Pagination