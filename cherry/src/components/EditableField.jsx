import { useState } from 'react';
import editIcon from '../assets/edit-icon.png';
import './EditableField.css';

function EditableField({
  label,
  type,
  current,
  onSave,
  validate,
  options = [],
})

{
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(current);
  const [error, setError] = useState(null);

  function start() {
    setValue(current)
    setError(null)
    setEditing(true)
  };

  function cancel() {
    setEditing(false)
    setError(null)
  };

  function save() {
    const err = validate ? validate(value) : null
    if (err) {
      setError(err)
      return
    }
    onSave(value);
    setEditing(false);
  };

  return (
    <div className="field-line">
      <span>{label}:</span>
      {editing ? (
        <>
          {type === 'text' && (
            <input
              type="text"
              name="text-input"
              aria-label={label}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          )}
          {type === 'select' && (
            <select
              value={value}
              name="select-input"
              onChange={e => setValue(e.target.value)}
            >
              {options.map(o => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </select>
          )}

          <button className='save-button' onClick={save}>Save</button>
          <button className='cancel-button' onClick={cancel}>Cancel</button>
          
          {error && (
            <div className="alert">
              {error}
            </div>
          )}
        </>
      ) : (
        <>
          <span className="current-value">
            {type === 'checkbox'
              ? current
                ? 'Yes'
                : 'No'
              : label === 'Profile Picture'
              ? <img src={options.find(o => o.key === current)?.img} alt="Avatar preview" className='pic-pre' />
              : current}
          </span>
          <button onClick={start} className='edit-button'>
            <img src={editIcon} alt={`Edit ${label}`} className='edit-icon' />
            Edit
          </button>
        </>
      )}
    </div>
  )
}
export default EditableField;