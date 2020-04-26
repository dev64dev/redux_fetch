import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData, newSiteName } from '../actions/attacksActions';
// import Team from './Team';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
    // this.props.dispatch(fetchData());
    console.log('[componentDidMount] ', this.props.campaign_name);
  }

  render() {
    return (
      <div>
        <h1>Testtt</h1>
        <h3>{this.props.siteNameReducer.siteName}</h3>
        {/* <h1>{this.props.scenario.campaign_instance_id}</h1> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    siteNameReducer: state.siteNameReducer,
    attackReducer: state.attackReducer.campaign_name,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };

  // return bindActionCreators({ fetchData, newSiteName }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
