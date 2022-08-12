import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pay" element={ <Pay />}>
        </Route>
        <Route path="/success" element={ <Success />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
