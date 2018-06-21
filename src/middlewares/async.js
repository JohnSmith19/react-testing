export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return naxt(action);
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
