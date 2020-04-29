import React, { useState, Fragment } from 'react';

const Team = (props) => {
  const [state, setState] = useState();

  const getColor = (status) => {
    switch (status) {
      case 'DONE':
        return 'done';
      case 'IN PROGRESS':
        return 'in_progress';
      case 'NOT STARTED':
        return 'not_started';
      default:
        return 'default';
    }
  };

  const cappitalize = (word) => {
    let upper = word.charAt(0).toUpperCase().trim() + word.slice(1).trim();
    let teamRGX = upper.replace(/([A-Z])/g, ' $1');
    return teamRGX;
  };

  const toggleStatus = (status) => {
    const stat = status.status.toUpperCase().replace('_', ' ');
    console.log(stat);
    setState(stat);
  };

  return (
    <div className="container">
      <div className="team_name">
        <span>{cappitalize(props.team.team_name)}: </span>
      </div>
      <div className="steps">
        {props.team.steps.length === 0 ? (
          <div className="no-steps-msg">
            <h2>Can't find any steps here..</h2>
          </div>
        ) : (
          <Fragment>
            {props.team.steps.map((item, idx) => (
              <div key={idx}>
                <button className="step" onClick={() => toggleStatus(item)}>
                  {item.step_name}
                </button>
              </div>
            ))}
            <div className="status">
              <button className={`${getColor(state)}`}>{state}</button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Team;
