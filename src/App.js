import Header from './elements/Header';
import {Services, Creativity, How_we_work, Opininon, OurTeam, Map} from './elements/Section';
import Footer from './elements/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Creativity />
      <How_we_work />
      <Opininon />
      <OurTeam />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
