import React from 'react';
import moment from 'moment'

const QuoteSummary = ({quote}) => {
    return (
        <div className="card z-depth-0 quote-summary">
            <span className="card-title">"{quote.quote}"</span>
            <p>Posted by {quote.userFirstName} {quote.userLastName}</p>
            <p className="grey-text">{ moment(quote.createdAt.toDate().toString()).calendar() }</p>
        </div>
    )
}

export default QuoteSummary;