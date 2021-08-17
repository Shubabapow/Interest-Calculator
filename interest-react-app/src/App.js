import logo from './logo.svg';
import './App.css';
import PageView from './components/calculator-page';
import NavBar from './components/nav-bar';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <main>
      <NavBar/>
      <PageView/>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
