import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Keys } from '../reducer/connectReducer';

type Props = { title : string, room : Keys};

function Title(props: Props) {
  const { title, room } = props;
  const invited = useSelector((state: RootState) => state.connectReducer);

  return (
    <div id='title'>
      <div>{ title }</div>
      <div>방문 횟수: {invited[room]}</div>
    </div>
  )
}

export default Title;