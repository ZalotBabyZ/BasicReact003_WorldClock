import React from 'react';
import './App.css';
import Clock from './components/Clock.js'

class App extends React.Component {
  render() {
  return(
    <div className = "App" style={{display: "flex",flexFlow: "column"}}>
      <h1 className="header" style={{display: "flex",color: "	#cd950c",backgroundColor: "	#000033", margin: "0px", height: "80px", justifyContent: "center", alignItems: "center",borderBottom: "5px #8b6508 solid"}}> World Clock </h1>
      <Clock order={1} location="Bangkok" time={0} />
      <Clock order={2} location="Japan" time={2} />
      <Clock order={3} location="London" time={-6} />
    </div>
  );
}
}
export default App;
