import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  content: 'about'
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState }