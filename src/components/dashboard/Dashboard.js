import React, { Component } from 'react';
import QuoteList from '../quotes/QuoteList'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
    render() {
        // console.log(this.props)
        const { quotes, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
             <div className="dashboard container">
                 <div className="row">
                     <div className="col s12 m6">
                        <QuoteList quotes={quotes}/>
                    </div>
                 </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        quotes: state.firestore.ordered.quotes,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'quotes', orderBy:['createdAt', 'desc'] }
    ])
)(Dashboard);