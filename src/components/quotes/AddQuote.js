import React, { Component } from 'react';
import { connect } from 'react-redux';
import addQuote from '../../store/actions/QuoteActions';
import { Redirect } from 'react-router-dom'

class AddQuote extends Component {
    state = {
        quote: "",
        author: ""
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuote(this.state)
        this.props.history.push('/')
    }

    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">                
                <form onSubmit= {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add a Quote</h5>
                    <div className="input-field">
                        <label htmlFor="quote">Quote</label>
                        <input type="text" id="quote" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Add Quote</button>
                    </div>
                </form>
            </div>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addQuote: (quote) => dispatch(addQuote(quote))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuote)