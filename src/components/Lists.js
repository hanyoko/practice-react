import React from 'react';

const Lists = ({lists, delList, toggleList}) => {
    
    return (
        <div>
            {lists.map((list, index)=>
            <div key={index} style={{background: list.isToggle ? 'pink' : 'yellow'}}>
                <span onClick={()=>toggleList(index)}>{list.name} {list.nickname}</span>
            <button onClick={()=>delList(index)}>삭제</button></div>)}
        </div>
    );
};

export default Lists;