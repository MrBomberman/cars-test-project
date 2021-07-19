// import logo from './logo.svg';
import './App.css';
import CarsTable from './components/СarsTable';

function App() {
  return (
    <div>
      <div className='main'>
        <div className='header'>
        HEADER
        </div>
        <div className='mainContent'>
          <div className='sidebar'>SIDEBAR</div>
        <div className='content' >
          <CarsTable/>
        </div>
        </div>
      </div>
      <div className='footer'>FOOTER</div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
