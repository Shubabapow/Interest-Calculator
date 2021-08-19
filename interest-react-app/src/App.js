import './App.css';
import PageView from './components/calculator-page';
import NavBar from './components/nav-bar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NavBar/>
      <PageView/>
      <Footer/>
    </div>
  );
}

export default App;
