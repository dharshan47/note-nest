import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <Home />
      <Toaster/>
    </div>
  );
};

export default App;
