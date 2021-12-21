import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import { increaseConnecting } from '../action/connectAct'; 

function Sideber(props: any) {
  const { history } = props;
  const dispatch = useDispatch();
  
  return (
    <div id='sideber'>
      <h3>경제</h3>
      <div />
      <li><button onClick={() => { history.push('/finance'); dispatch(increaseConnecting('finance'))}}>금융</ button></li>
      <li><button onClick={() => { history.push('/securities'); dispatch(increaseConnecting('securities'))}}>증권</ button></li>
      <li><button onClick={() => { history.push('/industry'); dispatch(increaseConnecting('indu'))}}>산업</ button></li>
      <li><button onClick={() => { history.push('/venture'); dispatch(increaseConnecting('venture'))}}>중기/벤쳐</ button></li>
      <li><button onClick={() => { history.push('/real'); dispatch(increaseConnecting('real'))}}>부동산</ button></li>
      <li><button onClick={() => { dispatch(increaseConnecting('top')); history.push('/'); }}>top5</button></li>
    </div>
  )
}

export default withRouter(Sideber);