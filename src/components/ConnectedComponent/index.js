import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ConnectedComponent = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.testReducer);
  if (loading) return <div onClick={() => dispatch({ type: 'toggle' })}>Loading....</div>;
  return <div>Hello!!connected</div>;
};

export default ConnectedComponent;
