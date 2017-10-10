import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateRealestateAgent } from '../../ducks/reducer.js';

class WizardFive extends Component {

    render(){
      const {updateRealestateAgent} = this.props;
        return(
            <div className="parent-div">
                    <div className="vert-align">

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={(e) => updateRealestateAgent(true)}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={(e) => updateRealestateAgent(false)}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    realEstateAgent: state.realEstateAgent
  };
}

export default connect(mapStateToProps, {updateRealestateAgent})(WizardFive);
