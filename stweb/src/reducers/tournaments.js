export default function tournaments(state = [], action) {
  switch (action.type) {
    case "FETCH_TOURNAMENTS": {
      return Object.assign({}, state, {
        tournamentsList: action.tournamentsList
      });
    }

    default:
      return state;
  }
}
