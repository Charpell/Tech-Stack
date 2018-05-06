import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelctionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelctionReducer
})