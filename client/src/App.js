import { Component } from "react";
import { CompanyList, get_all_companies } from './components/companyData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Map</h1>
      </header>
      <main>
        <h2>{ get_all_companies() }</h2>
      </main>
    </div>
  );
}

export default App;
