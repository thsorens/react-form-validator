import _findIndex from 'lodash/findIndex';
import * as ActionTypes from './actions';

export default function (state, action) {
  switch (action.type) {
    case ActionTypes.REGISTERED_FORM_ELEMENT: {
      return {
        ...state,
        components: [
          ...state.components, { id: action.id, rules: action.rules }
        ]
      };
    }
    case ActionTypes.FORM_ELEMENT_UPDATED: {
      return {
        ...state,
        values: {
          ...state.values, [action.id]: action.value
        }
      };
    }
    case ActionTypes.UNREGISTERED_FORM_ELEMENT: {
      const index = _findIndex(state.components, c => c.id === action.id);

      if (index > -1) {
        return {
          ...state,
          components: [...state.components.slice(0, index), ...state.components.slice(index + 1)]
        };
      }
      return state;
    }
    case ActionTypes.FORM_VALIDATION_RESULT: {
      return { ...state, invalid: action.invalid };
    }
    default: {
      return state;
    }
  }
}