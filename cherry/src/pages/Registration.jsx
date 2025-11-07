import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import './Registration.css';

function Registration() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    vip: '',
    otherVip: '',
    send: true,
    shippingAddress: '',
    billingAddress: '',
    billingSameAsShipping: false,
    firstSelect: '',
    secondSelect: '',
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

    const secondOptionsMap = {
    Yes: ['Sweet Cherry', 'Tart Cherry', 'Bing Cherry'],
    No: ['I don\'t like cherries'],
  };

  const validate = () => {
    const errs = {};

    if (!values.username.trim()) errs.username = 'Username required';

    if (!values.email.trim()) {
      errs.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = 'Email is Not valid';
    }

    if (values.password.length < 6)
      errs.password = 'Password must be ≥ 6 characters';

    if (!values.vip) errs.vip = 'VIP level required';

    if (values.vip === 'other' && !values.otherVip.trim())
      errs.otherVip = 'Enter other VIP level';

    return errs;
  };

  const Submit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {     
      setValues(initialValues);     
      setErrors({});  
      setShowModal(true);            
    }
  };

  const Change = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: undefined,
  }));

  if (name === 'billingSameAsShipping') {
      if (checked) {
        setValues((v) => ({
          ...v,
          billingSameAsShipping: true,
          billingAddress: v.shippingAddress,
        }));
      } else {
        setValues((v) => ({
          ...v,
          billingSameAsShipping: false,
        }));
      }
      return;
    }

    if (name === 'shippingAddress') {
      setValues((v) => {
        const newBillingAddress = v.billingSameAsShipping ? value : v.billingAddress;
        return {
          ...v,
          shippingAddress: value,
          billingAddress: newBillingAddress,
        };
      });
      return;
    }

    if (name === 'firstSelect') {
      setValues((v) => ({
        ...v,
        firstSelect: value,
        secondSelect: '',
      }));
      return;
    }

    if (name === 'secondSelect') {
      setValues((v) => ({
        ...v,
        secondSelect: value,
      }));
      return;
    }

    setValues((v) => ({
      ...v,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div>
      <div className='title'>
        <h2>Registration</h2>
        <ThemeToggle />
      </div>

      <form className="register" noValidate onSubmit={Submit}>
        <p className="form-info">
          Fields marked with <span className="required">*</span> are required.
        </p>

        <div className="form-group">
          <label htmlFor="username">
            Username: <span className="required">*</span>
          </label>
          <input id="username" name="username" value={values.username} onChange={Change} />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email:<span className="required">*</span>
          </label>
          <input id="email" name="email" value={values.email} onChange={Change} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password:<span className="required">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={Change}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="vip">VIP Level: <span className="required">*</span></label>
          <select name="vip" id="vip" value={values.vip} onChange={Change}>
            <option value="">Select</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="other">Other</option>
          </select>
          {errors.vip && <div className="error">{errors.vip}</div>}
        </div>   

        {values.vip === 'other' && (
          <div className="form-group">
          <label htmlFor="otherVip"> Other VIP level:</label>
            <input id="otherVip" name="otherVip" value={values.otherVip} onChange={Change} />    
        </div> )}
        {errors.otherVip && <div className="error">{errors.otherVip}</div>}

       <div className="form-group">
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            id="shippingAddress"
            name="shippingAddress"
            value={values.shippingAddress}
            onChange={Change}
          />
        </div>

        <div className="form-group checkbox-group">
          <input
            id="billingSame"
            type="checkbox"
            name="billingSameAsShipping"
            checked={values.billingSameAsShipping}
            onChange={Change}
          />
          <label htmlFor="billingSame">Billing address same as shipping address</label>
        </div>

        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address:</label>
          <input
            id="billingAddress"
            name="billingAddress"
            value={values.billingAddress}
            onChange={Change}
            readOnly={values.billingSameAsShipping}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstSelect">Do you like cherries:</label>
          <select
            id="firstSelect"
            name="firstSelect"
            value={values.firstSelect}
            onChange={Change}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="secondSelect">Which kind:</label>
          <select
            id="secondSelect"
            name="secondSelect"
            value={values.secondSelect}
            onChange={Change}
            disabled={!values.firstSelect}
          >
            <option value="">Select</option>
            {(values.firstSelect
              ? secondOptionsMap[values.firstSelect]
              : []
            ).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group checkbox-group">      
            <input 
              id="send"
              type="checkbox"
              name="send"
              checked={values.send}
              onChange={Change}
            /> 
            <label htmlFor="send">Subscribe to our newsletter</label> 
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>✅ Registration Successful</h2>
            <p>Thank you for registering!</p>
            <button className='close-button' onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Registration;
