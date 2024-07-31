import React from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';

console.log('anan');

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={'X'} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> X
              </span>
              <span id="memory">
                <b>Memory:</b> X
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} />
              <CalcButton value={'MR'} />
              <CalcButton value={'MC'} />
            </div>
            <div className="row">
              <CalcButton value={1} />
              <CalcButton value={2} />
              <CalcButton value={3} />
            </div>

            <div className="row">
              <CalcButton value={4} />
              <CalcButton value={5} />
              <CalcButton value={6} />
            </div>

            <div className="row">
              <CalcButton value={7} />
              <CalcButton value={8} />
              <CalcButton value={9} />
            </div>
            <div className="row">
              <CalcButton value={'+'} />
              <CalcButton value={0} />
              <CalcButton value={'-'} />
            </div>
            <div className="row">
              <CalcButton value={'*'} />
              <CalcButton value={'/'} />
              <CalcButton value={'CE'} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
