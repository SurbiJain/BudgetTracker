import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Budget from "./components/budget/Budget";
import Transaction from "./components/budget/Transaction";
import Home from "./components/budget";
import Goals from "./components/budget/Goals";
import Overview from "./components/budget/Overview";
import {BalanceContextProvider, HistoryContextProvider, CategoryContextProvider, GoalsContextProvider, ExpenseContextProvider, TotalExpensesContextProvider, IncomeContextProvider} from "./components/utilites/globalContext.jsx"


function App() {

  return (
    <div className="w-1/2 m-auto">
     <BalanceContextProvider>
        <HistoryContextProvider>
          <CategoryContextProvider>
            <GoalsContextProvider>
              <IncomeContextProvider>
                <TotalExpensesContextProvider>
                  <ExpenseContextProvider>
                          <Routes>
                            <Route path="/" element={<Landing />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/home" element={<Home />}></Route>
                            <Route path="/overview" element={<Overview />}></Route>
                            <Route path="/budget" element={<Budget />}></Route>
                            <Route
                              path="/transaction"
                              element={<Transaction />}
                            ></Route>
                            <Route path="/goals" element={<Goals />}></Route>
                          </Routes>
                   </ExpenseContextProvider>
                   </TotalExpensesContextProvider>
                   </IncomeContextProvider>
              </GoalsContextProvider>
          </CategoryContextProvider>
        </HistoryContextProvider>
        </BalanceContextProvider>
    </div>
  );
}

export default App;
