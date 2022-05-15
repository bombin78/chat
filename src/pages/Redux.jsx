import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Временно отключено так как отключен thunk из 'redux-thunk'
// import { fetchCustomers } from '../asyncAction/customers';
import { addCustomerAction, removeCustomerAction } from '../store/reducers/customerReducer';

const Redux = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const addCash = (cash) => {
        dispatch({
            type: 'ADD_CASH', payload: cash,
        })
    }

    const getCash = (cash) => {
        dispatch({
            type: 'GET_CASH', payload: cash,
        })
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    // Временно отключено так как отключен thunk из 'redux-thunk'
    // const getCustomers = () => {
    //     dispatch(fetchCustomers());
    // }

    // const fetchCustomers = () => {
    //     return function(dispatch) {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //             .then(response => response.json())
    //             .then(json => dispatch(addManyCustomersAction(json)))
    //     }
    // }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <>
            <div>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>
                    Пополнить счет
                </button>
                <button onClick={() => getCash(Number(prompt()))}>
                    Снять со счета
                </button>
            </div>
            <div style={{display: 'flex', paddingTop: '20px'}}>
                <button onClick={() => addCustomer(prompt())}>
                    Добавить клиента
                </button>
                {/* Временно отключено так как отключен thunk из 'redux-thunk' */}
                {/* <button onClick={() => getCustomers())}>
                    Получить клиентов из базы
                </button> */}
            </div>
            { customers.length > 0
                ? <div>
                    {customers.map(customer =>
                        <div
                            key={customer.id}
                            onClick={() => removeCustomer(customer)}
                            style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}
                        >
                            {customer.name}
                        </div>
                    )}
                </div>
                : <div style={{fontSize: '2rem'}}>
                    Клиенты отсутствуют!
                </div>
            }
        </>

    );
};

export default Redux;