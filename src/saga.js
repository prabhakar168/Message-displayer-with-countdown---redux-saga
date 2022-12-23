import { delay, put, takeLatest } from "redux-saga/effects";
import { inputChange } from "./actions";
import { setSearchInput } from "./reducer";

function* handleInputChange(action) {

  var timeLeft = 5;

  function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String( timeLeft );
    if (timeLeft > 0) {
      setTimeout(countdown, 1000);
    }
  };
  
  setTimeout(countdown, 1000);

  yield delay(5000);
  yield put(setSearchInput({ searchInput: action.payload }));
}

export default function* rootSaga() {
  yield takeLatest(inputChange, handleInputChange);
}
