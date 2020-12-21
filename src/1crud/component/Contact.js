import React, { useEffect, useState } from 'react';
import ContactFrom from './ContactFrom';
import firebaseDb from '../Firebase';

const Contact = () => {
  const [ContactObj, setContactObj] = useState({});
  useEffect(() => {
    firebaseDb.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() !== null) setContactObj({ ...snapshot.val() });
    });
  }, []);

  const addOrEdit = (obj) => {
    console.log('firebaseDb2', firebaseDb);
    firebaseDb.child('contacts').push(obj);
  };

  return (
    <>
      <div className='jumbotron jumbotron-fluid bg-light'>
        <div className='container'>
          <div className='display-4 text-center'>Contact Register</div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
          <ContactFrom addOrEdit={addOrEdit} />
        </div>
        <div className='col-md-7'>
          <table className='table table-borderless table-striped'>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact;
