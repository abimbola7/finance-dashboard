import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import Header from './components/header';

function App() {
  return (
    <div className='w-full h-screen bg-[#3326AE] flex flex-row'>
      <SideBar />
      <div className='w-full h-full bg-[#ffffff] rounded-tl-[3rem] overflow-hidden'>
        <Header />
      </div>
    </div>
  );
}

export default App;
