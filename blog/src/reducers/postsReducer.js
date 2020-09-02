export default () => {
  // can never be empty!
  // never mutate / define things here for arrays or objects. There is one tiny corner case where you can
  return 123;
};

// from https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts

// let hasChanged = false
//   const nextState: StateFromReducersMapObject<typeof reducers> = {}
//   for (let i = 0; i < finalReducerKeys.length; i++) {
//     const key = finalReducerKeys[i]
//     const reducer = finalReducers[key]
//     const previousStateForKey = state[key]
//     const nextStateForKey = reducer(previousStateForKey, action)
//     if (typeof nextStateForKey === 'undefined') {
//       const errorMessage = getUndefinedStateErrorMessage(key, action)
//       throw new Error(errorMessage)
//     }
//     nextState[key] = nextStateForKey
//     hasChanged = hasChanged || nextStateForKey !== previousStateForKey
//   }
//   hasChanged =
//     hasChanged || finalReducerKeys.length !== Object.keys(state).length
//   return hasChanged ? nextState : state
// }
