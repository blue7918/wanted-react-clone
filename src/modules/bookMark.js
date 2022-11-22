const initialState = [];

const ADDBOOKMARK = 'ADDBOOKMARK';
const DELETEBOOKMARK = 'DELETEBOOKMARK';

export const addBookMark = (id) => ({
  type: ADDBOOKMARK,
  id,
});

export const deleteBookMark = (id) => ({
  type: DELETEBOOKMARK,
  id,
});

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!

function bookmarking(state = initialState, action) {
  switch (action.type) {
    case ADDBOOKMARK:
      return [...state, action.id];
    case DELETEBOOKMARK:
      return state.filter((e) => e !== action.id);
    default:
      return state;
  }
}

export default bookmarking;
