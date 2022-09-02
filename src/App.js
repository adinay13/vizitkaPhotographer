import './App.css';
import MainPage from "./components/mainPage/MainPage";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio_two from "./components/portfolio/Portfolio_two";
import Footer from "./components/footer/Footer";
import By from "./components/footer/By"


function App() {
  return (
    <div>
      <MainPage/>
        <Portfolio/>
        <Portfolio_two/>
      <Footer/>
        <By/>

    </div>
  );
}

export default App;
