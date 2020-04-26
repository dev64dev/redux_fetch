import { FETCH_DATA, SITE_NAME } from '../actions/types';

const initialState = {
  campaign_instance_id: 0,
  campaign_name: 'Fake..',
  team_instances: [],
};

const myState = {
  siteName: 'Yaniv Zoie',
};

export const attackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log('action.payload', action.payload.campaign_name);
      return {
        ...state,
        campaign_name: action.payload.campaign_name,
      };
    default:
      return state;
  }
};

export const siteNameReducer = (state = myState, action) => {
  switch (action.type) {
    case SITE_NAME:
      return { ...state, siteName: action.payload };
      break;
    default:
      return state;
  }
};

// console.log(this.campaign_name);

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA:
//       return {
//         ...state,
//         campaign_instance_id: action.payload.campaign_instance_id,
//         campaign_name: action.payload.campaign_name,
//         team_instances: action.payload.team_instances,
//       };
//     default:
//       return state;
//   }
// };
