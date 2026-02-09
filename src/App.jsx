import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sections from "./components/Sections";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Sidebar />
        <Sections />
      </div>
    </>
  );
}

export default App;
