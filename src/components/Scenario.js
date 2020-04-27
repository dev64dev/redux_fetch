import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/attacksActions';
import { Button } from '@material-ui/core';

class Scenario extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.fetchData();
    console.log('[componentDidMount] ', this.props.attackReducer);
  }

  render() {
    return (
      <div>
        <Button>BTN</Button>
        <Button variant='contained' color='primary'>
          asdasd
        </Button>

        <h3>{this.props.siteNameReducer.siteName}</h3>
        <h1>{this.props.attackReducer.campaign_name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    siteNameReducer: state.siteNameReducer,
    attackReducer: state.attackReducer,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scenario);
