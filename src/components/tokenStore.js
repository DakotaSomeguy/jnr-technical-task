import create from 'zustand';

const useTokenStore = create((set) => ({
  selectedTokens: [],
  addToken: (token) => set((state) => {
    // Check if the token is already in the list
    if (!state.selectedTokens.some((t) => t.index === token.index)) {
      return { selectedTokens: [...state.selectedTokens, token] };
    }
    return state;
  }),
}));

export default useTokenStore;
