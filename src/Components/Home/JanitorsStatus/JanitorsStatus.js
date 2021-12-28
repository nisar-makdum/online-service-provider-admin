import React from 'react';

const JanitorsStatus = () => {
  return (
    <div className='container offset-3'>
      <div className='row'>
        <div class='dropdown col-md-6'>
          <button
            class='btn btn-danger btn-lg dropdown-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Numbers Of Janitors
          </button>

          <div class=' dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {' '}
            <table class='table table-secondary table-hover pt-0 m-0'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Expertise</th>
                  <th scope='col'>Employee Location</th>
                  <th scope='col'>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Dishes</td>
                  <td>India</td>
                  <td>+888888</td>
                </tr>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Dishes</td>
                  <td>India</td>
                  <td>+888888</td>
                </tr>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Dishes</td>
                  <td>India</td>
                  <td>+888888</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class='dropdown col-md-6'>
          <button
            class='btn btn-danger btn-lg dropdown-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Busy
          </button>
          <div class=' dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            {' '}
            <table class='table table-secondary table-hover pt-0 m-0'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Working For</th>
                  <th scope='col'>From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Sid</td>
                  <td>11:30</td>
                </tr>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Sid</td>
                  <td>11:30</td>
                </tr>
                <tr>
                  <th scope='row'>Siddanth</th>
                  <td>Sid</td>
                  <td>11:30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanitorsStatus;
