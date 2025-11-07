import Accordion from '../components/Accordion';
import GalleryFilter from '../components/GalleryFilter';
import ThemeToggle from '../components/ThemeToggle';


function Varieties() {
  return (
    <div>
      <div className="title">
        <h2>Cherry Facts & Varieties</h2>
        <ThemeToggle />
      </div>
      <Accordion title="Sweet Cherries">
        Sweet cherries are often eaten fresh; they are firm and juicy. Popular sweet cherry varieties include Bing, Rainier, and Chelan. 
        They are typically deep red or yellowish-pink in color and have a high sugar content. Sweet cherries are also used in salads, desserts, and beverages.
      </Accordion>
      <Accordion title="Sour / Tart Cherries">
        Tart cherries are great for pies and preserves; more tart in flavor.
      </Accordion>
      <Accordion title="Climate & Season">
        Cherry season generally peaks in late spring to early summer.
      </Accordion>
      
      <h2>Cherry Recipes</h2>
      <GalleryFilter />
</div>
  );
}
export default Varieties;