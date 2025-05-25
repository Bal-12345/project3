
/*import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/store';

const circleStyle = {
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  border: '2px solid black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
};

const Player = ({ playerKey }) => {
  const player = useSelector((state) => state[playerKey]);
  const dispatch = useDispatch();

  return (
    <div style={circleStyle}>
      <h3>Name: {player.name}</h3>
      <h3>Score: {player.score}</h3>
      <div>
        <button onClick={() => dispatch(increment(playerKey))}>+</button>
        <button onClick={() => dispatch(decrement(playerKey))}>-</button>
        <button onClick={() => dispatch(reset(playerKey))}>r</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Player playerKey="bhav" />
      <Player playerKey="mithu" />
    </div>
  );
};

export default App;*/


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/store';

const bhavStyle = {
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  border: '3px solid blue',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  backgroundColor: '#e0f7fa',
};

const mithuStyle = {
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  border: '3px solid green',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  backgroundColor: '#f1f8e9',
};

const Player = ({ playerKey, style }) => {
  const player = useSelector((state) => state[playerKey]);
  const dispatch = useDispatch();

  return (
    <div style={style}>
      <h3>Name: {player.name}</h3>
      <h3>Score: {player.score}</h3>
      <div>
        <button onClick={() => dispatch(increment(playerKey))}>+</button>
        <button onClick={() => dispatch(decrement(playerKey))}>-</button>
        <button onClick={() => dispatch(reset(playerKey))}>r</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Player playerKey="bhav" style={bhavStyle} />
      <Player playerKey="mithu" style={mithuStyle} />
    </div>
  );
};

export default App;




























/*import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    name: 'bhav',
    score: 0,
  });
  const [state1, setState1] = useState({
    name: 'mithu',
    score: 0,
  });

  const circleStyle = {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={circleStyle}>
        <h3>Name: {state.name}</h3>
        <h3>Score: {state.score}</h3>
        <div>
          <button onClick={() => setState({ ...state, score: state.score + 1 })}>+</button>
          <button onClick={() => setState({ ...state, score: state.score - 1 })}>-</button>
          <button onClick={() => setState({ ...state, score: 0 })}>r</button>
        </div>
      </div>

      <div style={circleStyle}>
        <h3>Name: {state1.name}</h3>
        <h3>Score: {state1.score}</h3>
        <div>
          <button onClick={() => setState1({ ...state1, score: state1.score + 1 })}>+</button>
          <button onClick={() => setState1({ ...state1, score: state1.score - 1 })}>-</button>
          <button onClick={() => setState1({ ...state1, score: 0 })}>r</button>
        </div>
      </div>
    </div>
  );
};

export default App;*/

