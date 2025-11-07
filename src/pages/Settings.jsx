import React, { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import ModalForm from '../components/ModalForm';
import './Setting.css';
import EditableField from '../components/EditableField.jsx';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import editIcon from '../assets/edit-icon.png';

function Settings({ profile, setProfile } ) {
  const [displayName, setDisplayName] = useState('Guest');
  const [showModal, setShowModal] = useState(false);
  const picture = [
  { label: 'Avatar 1', key: 'avatar1', img: avatar1 },
  { label: 'Avatar 2', key: 'avatar2', img: avatar2 },
  { label: 'Avatar 3', key: 'avatar3', img: avatar3 },
];

const update = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }))
  };

return (
    <div>
      <div className="title">
        <div  className="title-row">
      <h2>Welcome, {displayName}!</h2>
      <button className="edit-button" onClick={() => setShowModal(true)}>
         <img
                src={editIcon }
                alt={'Edit Display Name'}
                className='edit-icon'
              />
              Change Display Name
      </button>
     </div>

      {showModal && (
        <ModalForm
          currentName={displayName}
          onSave={(name) => { setDisplayName(name); setShowModal(false); }}
          onClose={() => setShowModal(false)}
        />
      )}



      <ThemeToggle />
      </div>
      
      <EditableField
        label="Profile Picture"
        type="select"
        options={picture}
        current={picture.find(o => o.img === profile.pic)?.key}
        onSave={val =>
          update('pic', picture.find(o => o.key === val)?.img)
        }
      />

       <EditableField
        label="Username"
        type="text"
        current={profile.username}
        onSave={val => update('username', val)}
        validate={val =>
          val.trim() === ''
            ? 'Cannot be empty'
            : null
        }
      />
    </div>
  );
}
export default Settings;