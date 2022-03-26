import './App.css';
import Employeer from './components/Employeer';
import EmployeeContext from './contexts/EmployeeContext';

function App() {
  return (
    <div className="App">
      <EmployeeContext>
        <Employeer />
      </EmployeeContext>
    </div>
  );
}

export default App;
