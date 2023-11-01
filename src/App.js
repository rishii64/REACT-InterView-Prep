import './App.css';
import Counter from './Day1/Counter';
// import Child from './ClassCompo/Child'
import Parent from './Day2/Props/Parent';
import RoutesCompo from './Day2/Route/RouteCompo';
import APIData from './Day3/Axios/APIData';
import UseEffectCompo from './Day3/Hooks/UseEffect';
import UseReducer from './Day4/UseReducer';
import Opponent1 from './Day5/HOC/Opponent1';
import Opponent2 from './Day5/HOC/Opponent2';
import ClassCompo from './Day5/LifeCycle/ClassCompo';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
          {/* <Child /> */}
      {/* <Parent /> */}
      {/* <RoutesCompo /> */}
      {/* < APIData/> */}
      {/* <UseEffectCompo /> */}
      {/* <UseReducer /> */}
      {/* <Opponent1 /> */}
      {/* <Opponent2 /> */}
      <ClassCompo />
    </div>
  );
}

export default App;
