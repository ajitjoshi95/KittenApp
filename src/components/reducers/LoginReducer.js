const initialState = {
    LOGIN:'',
    CATLISTRES: '',
    CATLIStDATA: ''
  }
  
  const login = (state = initialState, action) => {
    switch (action.type) {
     
        case 'Login':
          return{...state, LOGIN : action.payload , loading:false};

        case 'CatListRes': 
          return{...state, CATLISTRES : action.payload , loading:false};

        case 'CatListData': 
          return{...state, CATLIStDATA : action.payload , loading:false};

      default:
        return state;
    }
  };
  
   export default login;
  
  