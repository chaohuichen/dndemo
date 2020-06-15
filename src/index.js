import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Board from './Board';
import { observe } from './Game';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const root = document.getElementById('root');
observe((knightPostion) =>
  ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
      <Board knightPosition={knightPostion} />
    </DndProvider>,
    root
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
