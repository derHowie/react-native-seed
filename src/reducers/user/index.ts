const initialState = {
  email: undefined,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
      case 'SET_USER_DATA':
        return {
              ...state,
              ...action.data,
            };
      default:
        return state;
    }
}
