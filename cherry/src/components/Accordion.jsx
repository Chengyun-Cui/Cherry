import { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div
        className="accordion-summary"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        aria-expanded={open}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" aria-hidden="true" />
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}
export default Accordion;