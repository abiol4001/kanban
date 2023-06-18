import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App flex max-w-[1440px]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
