import { SideBar } from './components/SideBar';
import './assets/css/app.css';
import ContentWrapper from './components/ContentWrapper';


function App() {
  return (
    <>
      <div id='wrapper'>

      <SideBar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <ContentWrapper/>

      </div>
      </div>
    </>
    
    );
}

export default App;
