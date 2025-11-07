import Card from '../components/Card';
import Carousel from '../components/Carousel';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';
function Home() {
return (
    <div className="home">
      <Carousel />
      <div className='title'>
        <h2>Welcome to Cherry Home</h2>
        <ThemeToggle />
      </div>
      <div className="card-group">
        <Card img={card1} alt="Sweet Cherry" title="Sweet Cherry" link="https://en.wikipedia.org/wiki/Prunus_avium" className="home-card">
          Sweet cherries are juicy and perfect for eating fresh.
        </Card>
        <Card img={card2} alt="Tart Cherry" title="Tart Cherry" link="https://en.wikipedia.org/wiki/Prunus_cerasus" className="home-card">
          Tart cherries are great for pies and preserves.
        </Card>
        <Card img={card3} alt="Bing Cherry" title="Bing Cherry" link="https://en.wikipedia.org/wiki/Bing_cherry" className="home-card">
          Bing cherries are firm and sweet—a classic favorite.
        </Card>
      </div>
     
    </div>
  );
}
export default Home;