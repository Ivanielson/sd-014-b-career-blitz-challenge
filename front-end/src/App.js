import './App.css';
import TaskProvider from './context/TaskProvider';

function App() {
  return (
    <main>
      <TaskProvider>
        <h1>Career Blitz Challenge</h1>
      </TaskProvider>
    </main>
  );
}

export default App;
