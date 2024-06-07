import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  portofolioPage: 'all',
  activeMenu: '',
};
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState }