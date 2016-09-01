import { ADD_USER } from '../actions/types';

export default function(state = ['Michael'], action) {        
    switch (action.type) {            
        case ADD_USER:
            return [...state, action.payload];
    }        
    return state;
}