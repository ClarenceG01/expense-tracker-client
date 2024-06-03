import RecentTransactions from "./components/Holders/RecentTransactions";
import TopSummary from "./components/Holders/TopSummary";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>Expensify</h1>
      <TopSummary />
      <RecentTransactions />
    </div>
  );
}

export default App;
