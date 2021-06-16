
export default function(state={}, action){
    switch(action.type){
        case 'GET_TOP_HEAD_LINES_OF_INDIA':
             return {...state, latest:action.payload}
        case 'GET_TOP_HEAD_LINES_OF_US':
             return {...state, latest:action.payload}
        default:
            return state;
    }
}