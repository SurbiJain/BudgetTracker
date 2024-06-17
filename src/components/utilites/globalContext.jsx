import React, { useContext, createContext, useState   } from 'react'
import Goals from '../budget/Goals';



//totalBalance
 const BalanceContext = createContext();

export const BalanceContextProvider = ({ children }) => {
  const [totalBalance, setTotalBalance] = useState(1000);

  return (
    <BalanceContext.Provider value={[ totalBalance, setTotalBalance]}>
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalanceContext = () => {
  const [totalBalance, setTotalBalance]   = useContext(BalanceContext)
  return [totalBalance, setTotalBalance]
}
//spendhistory
 const historyContext = createContext();

export const HistoryContextProvider = ({ children }) => {
  const [spendHistory, setSpendHistory] = useState([]);

  return (
    <historyContext.Provider value={[spendHistory, setSpendHistory]}>
      {children}
    </historyContext.Provider>
  )
}

export const useHistoryContext = () => {
  const [spendHistory, setSpendHistory]   = useContext(historyContext)
  return [spendHistory, setSpendHistory]}



  //goals
export const GoalsContext = createContext();

export const GoalsContextProvider = ({ children }) => {
const [goals, setGoals] = useState([
  { id: 0, name: "Charity", budget: 1000 },
  { id: 1, name: "Travel", budget: 5000 },
  { id: 2, name: "Hobbies", budget: 10000 },
  { id: 3, name: "Investment", budget: 100000 },
  { id: 4, name: "Savings", budget: 10000 },
]);
return (
  <GoalsContext.Provider value={[goals, setGoals]}>
    {children}
  </GoalsContext.Provider>
)
}


export const useGoalsContext = () => {
  const [goals, setGoals]   = useContext(GoalsContext)
  return [goals, setGoals]}


//category
 const categoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState([
   
    { id: 0, name: "Bill", budget: 10000 },
    { id: 1, name: "Grocery", budget: 20000 },
    { id: 2, name: "Home Maintenance", budget: 5000 },
    { id: 3, name: "Education Fees ", budget: 20000 },
    { id: 4, name: "Transportation", budget: 10000 },
    
  ]);

  return (
    <categoryContext.Provider value={[category, setCategory]}>
      {children}
    </categoryContext.Provider>
  )
}

export const useCategoryContext = () => {
  const [category, setCategory]   = useContext(categoryContext)
  return [category, setCategory]}


  

//expense
export const ExpenseContext = createContext();
export const ExpenseContextProvider = ({ children }) => {
   const [expense, setExpense] = useState("");

  return (
    <ExpenseContext.Provider value={[expense, setExpense]}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpenseContext = () => {
  const [expense, setExpense]   = useContext(ExpenseContext)
  return [expense, setExpense]}


  //income
export const IncomeContext = createContext();
export const IncomeContextProvider = ({ children }) => {
  const [income, setIncome] = useState();

  return (
    <IncomeContext.Provider value={[income, setIncome]}>
      {children}
    </IncomeContext.Provider>
  )
}

export const useIncomeContext = () => {
  const [income, setIncome]   = useContext(IncomeContext)
  return [income, setIncome]}

  //totalExpense
export const TotalExpensesContext = createContext();
export const TotalExpensesContextProvider = ({ children }) => {
  const [totalExpenses, setTotalExpenses] = useState("")

  return (
    <TotalExpensesContext.Provider value={[totalExpenses, setTotalExpenses]}>
      {children}
    </TotalExpensesContext.Provider>
  )
}

export const useTotalExpensesContext = () => {
  const [totalExpenses, setTotalExpenses]   = useContext(TotalExpensesContext)
  return [totalExpenses, setTotalExpenses]}



  
 



