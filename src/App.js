import './App.scss';
import ChatComponent from './components/chat/ChatComponent';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <div className="left-side">
      <Profile />
      </div>
      <div className ="right-side">
        <ChatComponent />
      </div>
   
    </div>
  );
}

export default App;
