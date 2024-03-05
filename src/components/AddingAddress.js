import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddingAddress = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [addressList, setAddressList] = useState(() => {
    const storedAddresses = localStorage.getItem('addresses');
    return storedAddresses ? JSON.parse(storedAddresses) : [];
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressList.includes(inputValue)) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setAddressList(prevList => {
        const updatedList = [...prevList, inputValue];
        console.log("Updated address list:", updatedList);
        localStorage.setItem('addresses', JSON.stringify(updatedList));
        return updatedList;
      });
      setInputValue('');
      window.location.href = '/verify';
      
    }
  };

  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  placeholder='Example: 0x888D3A1...'
                  type="text"
                  className="form-control form-control-lg border shadow-lg bg-info-subtle"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your address with anyone else.
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree with the terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {showAlert && (
                <div className="alert alert-danger mt-3" role="alert">
                  You have already Voted!!!!
                </div>
              )}
            </form>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Blockchain Address
            </h1>
            <p className="lead">
               Please provide us with your Blockchain Account Address.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddingAddress