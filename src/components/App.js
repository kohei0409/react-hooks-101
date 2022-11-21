import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Event from "./Event";

import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid mt-5">
      <div className="mt-5">
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
