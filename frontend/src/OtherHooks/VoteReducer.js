const VoteReducer = (state, action) => {
    switch (action) {
      case 'increment': return state + 1;
      case 'decrement': return state - 1;
      case 'reset': return 0;
      default: throw new Error('Unexpected action');
    }
};

export default VoteReducer;