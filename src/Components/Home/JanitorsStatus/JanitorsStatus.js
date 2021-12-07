import React from 'react';

const JanitorsStatus = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div class='btn-group'>
          <button class='btn btn-danger btn-lg' type='button'>
            Numbers Of Janitors
          </button>
          <button
            type='button'
            class='btn btn-lg btn-danger dropdown-toggle dropdown-toggle-split'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span class='visually-hidden'>Toggle Dropdown</span>
          </button>
          <ul class='dropdown-menu   fs-5' style={{ width: '20px' }}>
            <li className='dropdown-item fs-5 drop'>1</li>
            <li className='dropdown-item fs-5 drop'>2</li>
            <li className='dropdown-item fs-5 drop'>3</li>
            <li className='dropdown-item fs-5 drop'>4</li>
            <li className='dropdown-item fs-5 drop'>5</li>
          </ul>
        </div>

        <div class='btn-group'>
          <button class='btn btn-danger btn-lg' type='button'>
            Busy
          </button>
          <button
            type='button'
            class='btn btn-lg btn-danger dropdown-toggle dropdown-toggle-split'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span class='visually-hidden'>Toggle Dropdown</span>
          </button>
          <ul class='dropdown-menu'>
            <li className='dropdown-item fs-5 drop'>2 are busy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JanitorsStatus;
