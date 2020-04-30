import { FETCH_DATA } from '../actions/types';

const initialState = {
  campaign_name: '',
  team_instances: [],
};
export const attackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        campaign_name: action.payload.campaign_name,
        team_instances: action.payload.team_instances,
      };
    default:
      return state;
  }
};
