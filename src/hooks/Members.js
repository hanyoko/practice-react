import axios from 'axios';
import React from 'react';
import useAsync from './useAsync';

async function getMembers(){
    const response = await axios.get('http://localhost:8080/members');
    return response;
}

const Members = () => {
    const [state, refetch] = useAsync();
    const {loading, data, error} = state;
    if(loading) return <div>로딩 중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>데이터가 없습니다.</div>
    return (
        <div>
            <ul>
                {data.map(d=><li key={d.m_no}>{d.m_name}</li>)}
            </ul>
        </div>
    );
};

export default Members;