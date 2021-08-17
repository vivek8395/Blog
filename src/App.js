import Navbar from './components/Navbar';
import Blog from './components/Blog'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Blog/>
        <Cards/>
      </header>
    </div>
  );
}

export default App;
