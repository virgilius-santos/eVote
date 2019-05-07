import { ADD_QUESTAO } from '../actions/SalaActions';

let initialState = {
    nome: 'teste',
    questoes:[]
}
 
export default salaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTAO:
            return Object.assign({}, state, { questoes: [...state.questoes, action.payload] });
        default:
            return state;
    }
};