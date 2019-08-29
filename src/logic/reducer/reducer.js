const initialState = {
  List: [
    { title: 'Create React App', done: false, id: 1 },
    { title: 'Drink tea', done: false, id: 2 },
    { title: 'Relax', done: false, id: 3 },
  ],
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LISTITEM':
      return {
        List: action.payload,
      };
    default:
      return state;
  }
}
