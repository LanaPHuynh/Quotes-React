import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'


const QuoteDetail = (props) => {
    const { quote,auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />
    if( quote ) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">"{ quote.quote }"</span>
                        <p> - { quote.author }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div> Posted by { quote.userFirstName } { quote.userLastName } </div>
                        <div> { moment(quote.createdAt.toDate().toString()).calendar() } </div>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className="container center">
                <p>Loading Quotes...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id= ownProps.match.params.id;
    const quotes = state.firestore.data.quotes;
    const quote = quotes ? quotes[id] : null;
    return {
        quote: quote,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'quotes' }
    ])
)(QuoteDetail);