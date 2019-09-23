const addQuote = (quote) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userID = getState().firebase.auth.uid;
        firestore.collection('quotes').add({
            quote: quote.quote,
            author: quote.author,
            userFirstName: profile.firstName,
            userLastName: profile.lastName,
            userID: userID,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'ADD_QUOTE', quote})
        }).catch((err) => {
        dispatch({ type: 'ADD_QUOTE_ERROR', err})
        })
    }
}

export default addQuote