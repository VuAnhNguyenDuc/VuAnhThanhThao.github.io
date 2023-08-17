import NavBar from './components/navbar/NavBar';
import MainBodySection from './components/mainbody/MainBodySection';

function App() {
  return (
    <div className="App">
      {/* NavBar Start */}
      <NavBar />
      {/* NavBar End */}

      {/* Main Body Start */}
      <MainBodySection />
      {/* Main Body End */}
    </div>
  );
}

export default App;
