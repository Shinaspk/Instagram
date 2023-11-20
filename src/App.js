import Timeline from './components/Timeline';
import './App.css';
import Posts from './components/Posts';
import Suggestion from './components/Suggestion';
import Story from './components/Story';


function App() {
  return (
  <>
  <div className="story">
    <Story/>
   
   </div>
    
      <div className='insta' >
        <div className='timeline'><Timeline/></div>
        <div className='post'><Posts fetchURL="https://fakestoreapi.com/products "/></div>
     <div className='suggestion'>   <Suggestion/></div>
      </div>
  </>
  );
  }

export default App;
