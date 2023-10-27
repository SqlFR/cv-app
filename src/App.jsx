import './App.css';
import GeneralInformations from './components/GeneralInformations';
import SaveInfos from './components/SaveInfos';
import ViewInfos from './components/ViewInfos';


function App() { 

    return (
        <div>
            <GeneralInformations onSubmit={SaveInfos}/>
            {SaveInfos() && (<ViewInfos/>)}
        </div>
    )
}


// function SaveInfos(data) {
  
  
// }
function View() {
    return (
        <div className='view'>
          
        </div>
    )
}

export default App
 