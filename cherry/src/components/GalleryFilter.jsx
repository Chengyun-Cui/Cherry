import { useState } from 'react';
import Card from './Card';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import './GalleryFilter.css';

const RECIPES = [
  { id: 1, title: 'Fresh Cherry Salad', category: 'fresh', img: gallery1 },
  { id: 2, title: 'Cherry Pie', category: 'baked', img: gallery2 },
  { id: 3, title: 'Cherry Smoothie', category: 'drink', img: gallery3 },
  { id: 4, title: 'Baked Cherry Tart', category: 'baked', img: gallery4 },
];

 function GalleryFilter() {
  const [filter, setFilter] = useState('all');
  const filtered = RECIPES.filter((r) => filter === 'all' || r.category === filter);

  return (
    <section className="gallery">
      <div>
        <button className="filter-button" onClick={() => setFilter('all')}>
          All
        </button>
        <button className="filter-button" onClick={() => setFilter('fresh')}>
          Fresh
        </button>
        <button className="filter-button" onClick={() => setFilter('baked')}>
          Baked
        </button>
        <button className="filter-button" onClick={() => setFilter('drink')}>
          Drink
        </button>
      </div>
      <div className="card-grid">
        {filtered.map((r) => (
          <Card key={r.id} img={r.img} alt={`${r.title}`} title={r.title} className="gallery-card">
            A delicious cherry {r.category} recipe.
          </Card>
        ))}
      </div>
    </section>
  );
}
export default GalleryFilter;