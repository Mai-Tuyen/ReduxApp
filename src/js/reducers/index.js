import * as C from './../constants/action-types';
const initialState = {
    articles: []
};

function rootReducer(state = initialState,action) {
    // if (action.type === ADD_ARTICLE) {
    //     return Object.assign({},state, {
    //        articles: state.articles.concat(action.payload) 
    //     });
    // }
    // return state;

    switch (action.type) {
        case C.ADD_ARTICLE:
            return Object.assign({},state, {
                articles: state.articles.concat(action.payload)
            });

        case C.FOUND_BAD_WORD:
            alert("Forbidden Words !");
            return state;
        default:
            return state;
    }
};

export default rootReducer;