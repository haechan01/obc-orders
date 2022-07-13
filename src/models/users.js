import { atom } from 'recoil';

/**
 * currentUserState
 * 현재 세션에서 선택된 유저를 알려줍니다.
 *
 */
export const currentUserState = atom({
  key: 'currentUserState',
  default: {
    uid: '',
    name: '',
    email: '',
  },
});
