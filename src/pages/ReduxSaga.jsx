import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncIncrementCreator, asyncDecrementCreator } from "../store/reducers/countReducer";
import { fetchUsers } from "../store/reducers/userReducer";


const ReduxSaga = () => {
    const count = useSelector(state => state.countReducer.count);
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    return (
        <div className="reduxSaga">
            <div className="count">{count}</div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
                <button className="btn" onClick={() => dispatch(fetchUsers())}>ПОЛУЧИТЬ ЮЗЕРОВ</button>
            </div>
            <div className="users">
                {users.map(user => 
                    <div className="user" key={user.id}>
                        {user.name}
                    </div>    
                )}
            </div>
        </div>
    );
};

export default ReduxSaga;