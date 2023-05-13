import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Clock from './Components/Clock';
import AlarmContainer from './Components/AlarmContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setAlarmsFromStorage } from './Redux/actions/AlarmAction';
// import './App.css';
import AllRoutes from './Routes/AllRoutes';
function App() {
  // const activeAlarms = useSelector<any>((state) => state.alarmReducer.activeAlarm)
  const dispatch = useDispatch<any>()
  useEffect(() => {
    const myAlarms = localStorage.getItem('myAlarms');
    if (myAlarms) {
      dispatch:(setAlarmsFromStorage(JSON.parse(myAlarms)))
    }
  }, []);
  // style={{ backgroundColor: activeAlarms ? activeAlarms.bgColor : "#000" }}
  return (
    <div className="App">
      <Clock />
      <AlarmContainer />
      <AllRoutes />
    </div>
  );
}
export default App;
