const posts = (state = {}, action: any) => {
  switch (action.type) {
    case "ADD_TEST":
      return {
        ...state,
        ...{
          number: action.number
        }
      }

    default:
      return state
  }
}


export default posts;