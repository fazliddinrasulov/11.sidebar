import "./App.css";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import AppProvider from "./context";

function App() {
  return (
    <AppProvider>
      <>
        <Home />
        <Modal />
        <Sidebar />
      </>
    </AppProvider>
  );
}

export default App;
