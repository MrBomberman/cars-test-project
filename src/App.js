import './App.css';
import CarsTable from './components/СarsTable';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import ActiveCarPanel from './components/ActiveCarPanel';

function App() {
  const [search, setSearch] = useState('');
  const [activeCar, setActiveCar] = useState(null);

  return (
    <div>
      <div className="main">
        <div className="header">HEADER</div>
        <div className="mainContent">
          <div className="sidebar">SIDEBAR</div>
          <div className="content">
            <SearchBar onChange={(value) => setSearch(value)} />
            <CarsTable
              search={search}
              onChangeActive={(value) => setActiveCar(value)}
              activeCar={activeCar}
            />
            <ActiveCarPanel activeCar={activeCar} />
          </div>
        </div>
      </div>

      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;
