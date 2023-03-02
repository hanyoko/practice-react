import { useReducer } from 'react';

function reducer(state, action){
    let newList;
    switch(action.type){
      case "ADDLIST":
        return [
          ...state,
          action.list
        ]
      case "DELLIST":
        newList = state.filter((li,index) => index !== action.delindex)
        return newList
      case "ToggleLIST":
        newList = state.map((li,index) => index !== action.toggleindex ? {
          ...li,
          isToggle: !li.isToggle
        }: li)
          return newList;
      default:
        return state;
    }
  }

const useLists = () => {
    const [state, dispatch] = useReducer(reducer, [])
    // const [lists, setLists] = useState([]);
    
    const addLists = (nickname, name) => {
      dispatch({
        type: "ADDLIST",
        list: { nickname: nickname, name: name }
      })
      // console.log(lists);
    }
    // const delList = (delindex) => {
    //   //[{nickname: "a", name: "b"}, {nickname: "c", name: "d"}]
    //   const newList = lists.filter((li, index) => index !== delindex)
    //   setLists(newList)
    // }
    const delList = (delindex) => {
      //[{nickname: "a", name: "b"}, {nickname: "c", name: "d"}]
      dispatch({
        type: "DELLIST",
        delindex: delindex
      })
    }
    // const toggleList = (toggleIndex) => {
    //   const newList = lists.map((li, index)=> index === toggleIndex ? {
    //     ...li,
    //     isToggle: !li.isToggle
    //   }: li)
    //   setLists(newList);
    // }
    const toggleList = (toggleIndex) => {
      dispatch({
        type: "ToggleLIST",
        toggleIndex: toggleIndex
      })
    }
    return [state, addLists, delList, toggleList]
};

export default useLists;