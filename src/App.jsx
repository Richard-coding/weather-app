import { WeatherStorage } from "./context/WeatherContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <WeatherStorage>
        <Home />
      </WeatherStorage>
    </>
  );
};

export default App;
