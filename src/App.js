
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './_utils/RouterApp';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>



    </div>
  );
}

export default App;
