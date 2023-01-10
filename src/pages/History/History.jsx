import React from "react";
import { useSelector } from "react-redux";
import { selectHistory } from "../../redux/video/videoSlice";

function History() {
  const history = useSelector(selectHistory);
  console.log(history);
  return <div>History</div>;
}

export default History;
