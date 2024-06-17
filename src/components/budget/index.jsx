import React, { useState, useContext, useEffect } from "react";
import AddSpend from "./AddSpend";
import AddIncome from "./AddIncome";
import Footer from "../Footer";
import Button from "react-bootstrap/button";
import { useBalanceContext, useHistoryContext, useCategoryContext, useGoalsContext, useExpenseContext, useIncomeContext, useTotalExpensesContext } from "../utilites/globalContext"
import TotalBalance from "./TotalBalance";


let spendId = 0;
const Home = () => {
  const [totalExpenses, setTotalExpenses] = useTotalExpensesContext();
  const [income, setIncome] = useIncomeContext();
  const [goals, setGoals] = useGoalsContext();
  const [category, setCategory] = useCategoryContext();
  const [expense, setExpense] = useExpenseContext();
  const [totalBalance, setTotalBalance] = useBalanceContext()
  const [categoryType, setCategoryType] = useState("");
  const [spendHistory, setSpendHistory] = useHistoryContext();
  const [addMoney, setAddMoney] = useState(false);
  const [open, setOpen] = useState(false);
  const isOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);

  let total = Number(totalBalance) + income;
  const handleSubmit = (event) => {
    event.preventDefault();
    setSpendHistory([
      ...spendHistory,
      {
        id: spendId++,
        name: categoryType,
        spend: expense,
      },
    ]);
  

    setTotalExpenses(expense + Number(totalExpenses));

    category.map((e)=>{
      if(e.name === categoryType){
        return (
         (e.budget = e.budget - expense), 
         (e.spend =expense)
        )
      }
     })

   goals.map((e)=>{
    if(e.name === categoryType){
      return (
       (e.budget = e.budget - expense), 
       (e.spend =expense)
      )
    }
   })
    

    setTotalBalance(totalBalance - expense);
    setOpen(false);
  };

  
  const handleAddClick = () => {
    setTotalBalance(total);
    setAddMoney(false);
  };
  

  
  return (
    <div>
      <TotalBalance/>
      <div className="flex m-3 justify-between gap-2">
        <div className="flex container1 basis-1/2 py-4">
          <div className="m-auto">
            <h6>Add Income</h6>
            {addMoney ? (
              <div className="m-auto">
                <AddIncome setIncome={setIncome} income={income} />

                <Button
                  className="px-5 m-3"
                  variant="primary"
                  onClick={handleAddClick}
                >
                  Add
                </Button>
              </div>
            ) : (
              <div className="m-auto">
                <div> {income ? income : 0} INR </div>
                <Button
                  className="px-3 m-auto mt-2"
                  variant="secondary"
                  onClick={() => {
                    setIncome("");
                    setAddMoney(!addMoney);
                  }}
                >
                  Add
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex   container1 basis-1/2 py-4">
          <div className="m-auto">
            <h6>Expenses</h6>
            <div className="m-auto">
              {totalExpenses ? totalExpenses : 0} INR
            </div>
            <Button
              className="bg-transparent shadow mt-2  border"
              onClick={() => {
                setOpen(true);
              }}
            >
              Add Expense{" "}
            </Button>
          </div>
          <div>
            {open && (
              <AddSpend
                closeModal={closeModal}
                isOpen={isOpen}
                handleSubmit={handleSubmit}
                setCategoryType={setCategoryType}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col  mt-3  rounded-t-lg bg-white  m-auto min-w-96  p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex   container3 bg-transparent py-4 mb-3 text-black   shade   border">
            <h6 className="m-auto">Goals</h6>
            <div className="m-auto">{goals.length}</div>
          </div>
          <div className="flex   container3 bg-transparent py-4 mb-3 text-black   shade   border">
            <h6 className="m-auto">Budget</h6>
            <div className="m-auto">{category.length}</div>
          </div>
          <div className="flex   container3 bg-transparent py-4 mb-3 text-black   shade   border">
            <h6 className="m-auto">Transaction</h6>
            <div className="m-auto">{spendHistory.length}</div>
          </div>
          <div className="flex   container3 bg-transparent py-4 mb-3 text-black   shade   border">
            <h6 className="m-auto">Money Saved</h6>
            <div className="m-auto">0</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
