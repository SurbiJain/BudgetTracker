import React from 'react'
import {useHistoryContext} from './../utilites/globalContext'
import Container from '../utilites/Container'
import Moment from 'react-moment'


const Transaction = () => {
  const [spendHistory, setSpendHistory] = useHistoryContext()

 
  return (
   <Container>
    <table className="mt-4 w-full" id="List">
      <tbody>
        {spendHistory?.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td> - {item.spend ? item.spend : 0}{" "}INR</td>
            <td>{<Moment format="DD/MM/YY">
               {new Date()}
            </Moment>}</td>
            <td>
              {" "}
              <button
                onClick={() => {
                  setSpendHistory(
                    spendHistory.filter((a) => a.name !== item.name)
                  );
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Container>
  )
}

export default Transaction