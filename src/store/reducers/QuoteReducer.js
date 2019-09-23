const initState = {
    quotes:[
        {id: '1', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author:'Nelson Mandela'},
        {id: '2', quote: 'The way to get started is to quit talking and begin doing.', author:'Walt Disney'},
        {id: '3', quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author:'Mother Teresa'}
    ]
};

const QuoteReducer = (state = initState, action) => {
    switch( action.type ) {
        case 'ADD_QUOTE':
            console.log('added quote:', action.quote);
            return state;
        case 'ADD_QUOTE_ERROR':
            console.log('add quote error', action.err);
            return state;
        default:
            return state
    }
}
export default QuoteReducer