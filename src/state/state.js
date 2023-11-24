import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  content: 'about',
  portofolioPage: 'all'
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState }