import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/"></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
          <Route path="/review/:review_id/comments"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
