import React, { useState } from 'react';

const InputSample = ({ title, children, addLists }) => {
    const [inputs, setInputs] = useState({
        userName: "",
        userNickName: ""
    })
    //inputs = { username: "", userNickName: ""}
    const { userNickName, userName} = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onClick = () => {
        addLists(userNickName, userName)
        setInputs({
            userName: "",
            userNickName: ""
        })
    }
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
            <input type="text" name="userName" value={userName} onChange={onChange} />
            <input type="text" name="userNickName" value={userNickName} onChange={onChange} />
            <button onClick={onClick}>추가</button>
        </div>
    );
};

export default InputSample;