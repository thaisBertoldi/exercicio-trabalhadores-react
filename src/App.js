import './App.css';
import EmployeeList from './components/EmployeeList';
import Employeer from './components/Employeer';
import EmployeeContext from './contexts/EmployeeContext';

function App() {
  return (
    <div className="App">
      <EmployeeContext>
        <Employeer />
        <EmployeeList />
      </EmployeeContext>
    </div>
  );
}

export default App;
