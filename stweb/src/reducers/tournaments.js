export default function tournaments(state = [], action) {
  switch (action.type) {
    case "FETCH_TOURNAMENTS":
      return [...state, Object.assign({}, action.tournaments)];

    default:
      return state;
  }
}
