import ViewCredito from './viewCredito'
import CreditoProvider from './conteiners/CreditoProvider'
import Class from './viewCredito.css';

function App() {
  return (
    <CreditoProvider>
      <div className="App">
            <ViewCredito></ViewCredito>      
      </div>
    </CreditoProvider>

  );
}

export default App;
