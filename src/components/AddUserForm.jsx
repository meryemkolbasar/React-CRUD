import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/userSlice';

const AddUserForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      username,
      email,
      phone,
      website,
      address: { street: address, city: 'New City', zipcode: '12345' },
      company: { name: company, catchPhrase: 'Company slogan', bs: 'Company business' },
    };

    dispatch(addUser(newUser));

    setName('');
    setUsername('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setAddress('');
    setCompany('');
  };

  return (
    <div className="card p-3 mb-4">
      <h4 className="text-center mb-3">Add New User</h4>
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-100">
          Add New User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
