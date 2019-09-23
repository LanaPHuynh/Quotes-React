import React from 'react';
import QuoteSummary from './QuoteSummary'
import { Link } from 'react-router-dom'

const QuoteList = ({quotes}) => {
    return (
        <div className="quote-list section">
            { quotes && quotes.map ( quote => {
                return(
                    <Link to={'/quote/' + quote.id}>
                        <QuoteSummary quote={quote} key={quote.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default QuoteList; 