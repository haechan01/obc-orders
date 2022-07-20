import { atom } from 'recoil';

/**
 * orderListState
 * 해당 고객 주문 목록
 *
 */
export const orderListState = atom({
  key: 'orderListState',
  default: [],
});
