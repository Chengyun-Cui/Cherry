 import './Card.css';
 function Card({ img, alt, title, children, link, className = ''}) {
  return (
    <div className={`card ${className}`}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{children}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      )}
    </div>
  );
}
export default Card;