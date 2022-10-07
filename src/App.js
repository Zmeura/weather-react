import "./styles.css";
import Cities from "./Cities";
import SearchingForm from "./SearchingForm";
import CurrentCity from "./CurrentCity";
import Discription from "./Discription";
import WeekForecast from "./WeekForecast";
import BuildBy from "./BuildBy";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <Cities />
        <SearchingForm />
        <CurrentCity />
        <Discription />
        <WeekForecast />
        <BuildBy />
      </div>
    </div>
  );
}
