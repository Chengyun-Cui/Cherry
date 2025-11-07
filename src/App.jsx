import { useEffect, useState } from 'react';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';
import './App.css';
import avatar1 from './assets/avatar1.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [profile, setProfile] = useState({
    username: 'CherryLover',
    pic: avatar1,
  });

  useEffect(
    () => {
      const popSTateListener = () => {
        setCurrentPage(document.location.pathname);
      };

      window.addEventListener('popstate', popSTateListener);

      return () => {
        window.removeEventListener('popstate', popSTateListener);
    };
    }, []);
  
  return (
  <div className="app">
    <SkipLink />
    <Header profile={profile} setCurrentPage={setCurrentPage}/>
    <MainArea currentPage={currentPage} profile={profile} setProfile={setProfile} />
    <Footer/> 
  </div>
  );
}
export default App;