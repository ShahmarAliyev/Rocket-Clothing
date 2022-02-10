import { takeLatest, all, call } from "redux-saga/effects";

import { clearCart } from "./cart.actions";
import CartActionTypes from "./cart.types";

export function* clearCartOnSignOut() {
  try {
    yield clearCart();
  } catch (err) {
    yield console.log(err);
  }
}

export function* onClearCartSuccess() {
  yield takeLatest(CartActionTypes.CLEAR_CART, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onClearCartSuccess)]);
}
