import React from 'react';
import Welcome from './components/Welcome';
import TodoList from './components/Todo';
import './style/main.scss';
import frenchFriesImg from './assets/images/french-fries.png';
import smallImg from './assets/images/SVG_Simple_Icon.svg';

const App = () => {
  const title = 'hello';
  return (
    <div className="main">
      <h1>{title}</h1>
      <Welcome message="Welcome" />
      <TodoList />
      <img src={frenchFriesImg} alt="tempImg" />
      <img src={smallImg} alt="notImportantImg" />
      <div>{__VERSION__}</div>
    </div>
  );
};

export default App;
