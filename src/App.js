import "./App.css";

import Header from "./component/Header";
import Balance from "./component/Balance";
import AddTransaction from "./component/AddTransaction";
import TransactionList from "./component/TransactionList";

function App() {
  return (
    <div className="mx-auto">
      <Header />
      <div >
        <Balance />
        <div className="flex  justify-center text-center">
          
          <AddTransaction />
        
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
