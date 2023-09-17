import './App.scss'
import { Actions } from './components/Actions/Actions';
import { BalanceCard } from './components/BalanceCard/BalanceCard';
import { Statistic } from './components/Statistic/Statistic';

function App() {
  return (
    <div className="App">
		<BalanceCard/>
    <Actions/>
    <Statistic/>
    </div>
  );
}

export default App;
