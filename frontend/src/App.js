import './App.css';
import {Provider} from "react-redux";
import generateStore from "./redux/store";
import Shows from "./components/shows";
import {Route, Routes} from "react-router";
import Show from "./components/show";

function App() {
  return (
      <Provider store={generateStore()}>
        <Routes>
          <Route path="/" element={<Shows/>}/>
          <Route path="show/:id" element={<Show/>}/>
        </Routes>
      </Provider>
  );
}

export default App;
