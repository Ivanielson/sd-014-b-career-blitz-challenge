import './App.css';
import TaskProvider from './context/TaskProvider';
import Router from './routes/Routes';

function App() {
  return (
    <TaskProvider>
      <main>
        <h1>Career Blitz Challenge</h1>
        <Router />
      </main>
    </TaskProvider>
  );
}

export default App;
