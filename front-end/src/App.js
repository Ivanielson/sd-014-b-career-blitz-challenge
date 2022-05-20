import './App.css';
import TaskProvider from './context/TaskProvider';
import Router from './routes/Routes';

function App() {
  return (
    <TaskProvider>
      <main>
        <header className="bg-secondary p-2 text-white text-center">
          <h1 className="display-6">🚨 Career Blitz Challenge 🚨</h1>
        </header>
        <Router />
      </main>
    </TaskProvider>
  );
}

export default App;
