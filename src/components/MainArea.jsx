import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Varieties from '../pages/Varieties';
import Settings from '../pages/Settings';
import './MainArea.css';

function MainArea({currentPage, profile, setProfile}){

    return (
        <main id='main' className='main' tabIndex="-1">
            {currentPage === '/' && <Home />}
            {currentPage === '/varieties' && <Varieties />}
            {currentPage === '/register' && <Registration />}
            {currentPage === '/settings' && (<Settings profile={profile} setProfile={setProfile} />) }
        </main>
    ); 
}
export default MainArea;