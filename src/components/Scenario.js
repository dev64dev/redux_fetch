import React, { Component } from 'react';
import Team from './Team';
import { connect } from 'react-redux';
import { fetchData } from '../actions/attacksActions';

class Scenario extends Component {
  async componentDidMount() {
    await this.props.fetchData();
  }

  render() {
    const team = this.props.attackReducer.team_instances.map((item, idx) => (
      <Team team={item} key={idx} />
    ));
    return (
      <div>
        <div className="camp-name">
          <h1>Scenario: {this.props.attackReducer.campaign_name}</h1>
        </div>
        <div className="modal">{team}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    attackReducer: state.attackReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scenario);
