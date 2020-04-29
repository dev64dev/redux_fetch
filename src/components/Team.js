import React from 'react';

const Team = (props) => {
  const getColor = (status) => {
    switch (status) {
      case 'done':
        return 'done';
        break;
      case 'in_progress':
        return 'in_progress';
        break;
      case 'not_started':
        return 'not_started';
        break;
      default:
        return 'light';
    }
  };

  const cappitalize = (word) => {
    let upper = word.charAt(0).toUpperCase().trim() + word.slice(1).trim();
    let teamRGX = upper.replace(/([A-Z])/g, ' $1');
    return teamRGX;
  };

  return (
    <div className='container'>
      <div className='team_name'>
        <h1>{cappitalize(props.team.team_name)}</h1>
      </div>
      <div className='steps'>
        {props.team.steps.length === 0 ? (
          <div className='no-steps-msg'>
            <p>'Not Steps here..'</p>
          </div>
        ) : (
          props.team.steps.map((item, idx) => (
            <div key={idx} className={`p-2 m-2 bg-light`}>
              <div className='step_name'>{item.step_name}</div>
              <div className='status'>
                <p className={`${getColor(item.status)}`}>
                  {item.status.toUpperCase().replace('_', ' ')}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Team;