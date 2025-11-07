import { useEffect, useRef, useState } from 'react';
import './ModalForm.css';

function ModalForm({ currentName, onSave, onClose }) {
  const [name, setName] = useState(currentName);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name.trim());
      dialogRef.current.close();
    }
  };

  const handleCancel = () => {
    dialogRef.current.close();
    onClose();
  };

  return (
    <dialog ref={dialogRef} onClose={onClose} className="modal-dialog">
      <form className='modal-form' method="dialog" onSubmit={handleSubmit}>
        <h2>Change Display Name</h2>
        <label>
          Display Name:
          <input
            type="text"
            value={name}
            className='name-input'
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className='modal-actions'>
          <button className='save-button' type="submit">Save</button>
          <button className='cancel-button' type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </dialog>
  );
}

export default ModalForm;
