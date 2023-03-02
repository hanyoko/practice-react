import './App.css';
import InputSample from './components/InputSample';
import Lists from './components/Lists';
import TextSample from './components/TextSample';
import Members from './hooks/Members';
import useLists from './hooks/useLists';

function App() {
  const [state, addLists, delList, toggleList] = useLists()
 
  return (
    <div className="App">
    <InputSample title="green" addLists={addLists}>
      <TextSample />
    </InputSample>
    <Lists lists={state} delList={delList} toggleList={toggleList}/>
    <Members/>
    </div>
  );
}

export default App;
