import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="md:w-[400px] mx-auto bg-[#141313] text-[#e5e7eb] h-full">
      <div className="grid grid-flow-row grid-rows-[80px_1fr_60px] h-full">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
