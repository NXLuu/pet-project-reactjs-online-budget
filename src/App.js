import './App.css';
import './component/card/Card.css'
import './component/user/User.css'
import User from './component/user/User'
import MoneyCard from './component/card/MoneyCard'
import Chart from './component/chart/Chart'
import TableTransaction from './component/transaction/TableTransaction'
import Transaction from './component/transaction/Transaction';
import Layout from './component/layout/Layout'

let json = [
  {
    "Month": "Jan",
    "Income": 200,
    "Expense": 499,
  },

  {
    "Month": "Feb",
    "Income": 100,
    "Expense": 39,
  },
  
]
let dataTable = [
  {
    "name": "Mua rua",
    "type": "expense",
    "date": "16/06/2124",
    "total": "1000"
  },
  {
    "name": "Mua hoa qua",
    "type": "expense",
    "date": "16/06/2025",
    "total": "5060"
  },
{
    "name": "Tiền mẹ gửi",
    "type": "income",
    "date": "16/06/2025",
    "total": "5060"
  }
]

const total = <MoneyCard title="Total Money" money="1000" />;
const income = <MoneyCard title="Income" money="2000" />;
const expense = <MoneyCard title="Outcome" money="431" />;
const user = <User name="Henry Price"/>;
const chart = <Chart data={json}/>;
const table = <TableTransaction data={dataTable}/>;
function App() {
  return (

    <div className="App">
      <Layout
        total={total}
        income={income}
        expense={expense}
        user={user}
        chart={chart}
      />
      {table}
    </div>
  );
}

export default App;
