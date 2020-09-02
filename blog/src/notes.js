// notes;
// 
// 
// 

// from https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts

let hasChanged = false
  const nextState: StateFromReducersMapObject<typeof reducers> = {}
  for (let i = 0; i < finalReducerKeys.length; i++) {
    const key = finalReducerKeys[i]
    const reducer = finalReducers[key]
    const previousStateForKey = state[key]
    const nextStateForKey = reducer(previousStateForKey, action)
    if (typeof nextStateForKey === 'undefined') {
      const errorMessage = getUndefinedStateErrorMessage(key, action)
      throw new Error(errorMessage)
    }
    nextState[key] = nextStateForKey
    hasChanged = hasChanged || nextStateForKey !== previousStateForKey
  }
  hasChanged =
    hasChanged || finalReducerKeys.length !== Object.keys(state).length
  return hasChanged ? nextState : state
 }

// how to edit arrays correctly

const colors = ['red', 'green']

// append array
[...colors, 'pink']
(3) ["red", "green", "pink"]

// prepend array
['purple',...colors]
(3) ["purple", "red", "green"]

// remove green from result
colors.filter(color =>color !=='green')
["red"]

// show only matching eval
// 
colors.filter(color =>color ==='green')
["green"]

// We alwasy want to be returning brand new arrays and objects
colors.filter(color =>color !=='green') === colors
false


// And with Objects

const profile = {name:'sam'}
undefined
{...profile, name:'alex'}
{name: "alex"}
{...profile, name:'alex',age :30}
{name: "alex", age: 30}
{...profile,  age :30}
{name: "sam", age: 30}
{name:'alex', ...profile}
{name: "sam"}


// #remove

// ##lodash library https://lodash.com/docs/4.17.15

_.omit(profile,'name')
{}