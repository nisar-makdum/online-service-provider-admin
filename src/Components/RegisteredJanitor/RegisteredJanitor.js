import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Tagline from '../Home/Tagline/Tagline';

const RegisteredJanitor = () => {
  const [janitorDetails, setJanitorDetails] = useState([{ details: '' }]);

  const addJanitorDetails = () => {
    setJanitorDetails([...janitorDetails, { details: '' }]);
  };
  return (
    <section className='bg-watermark'>
      <Navbar />
      <Tagline />

      <div className='container pt-5'>
        <p className='fs-2 text-center'>Janitor Details</p>
        <table class='table table-secondary table-hover'>
          <thead>
            <tr>
              <th scope='col'>Date & Joining</th>
              <th scope='col'>Name & Description</th>
              <th scope='col'>Address</th>
              <th scope='col'>Documents</th>
            </tr>
          </thead>
          <tbody>
            {janitorDetails.map((janitor, index) => (
              <tr>
                <th contentEditable='true' scope='row'>
                  12/6/21
                </th>
                <td>
                  <textarea
                    style={{ height: '70px' }}
                    class='form-control'
                    id='exampleFormControlTextarea1'
                    rows='3'
                  ></textarea>
                </td>
                <td>
                  <textarea
                    style={{ height: '70px' }}
                    class='form-control'
                    id='exampleFormControlTextarea1'
                    rows='3'
                  ></textarea>
                </td>
                <td>
                  <td>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label class='form-check-label' for='flexCheckDefault'>
                        Adhaar Card
                      </label>
                    </div>

                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label class='form-check-label' for='flexCheckDefault'>
                        Pan Card
                      </label>
                    </div>

                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label class='form-check-label' for='flexCheckDefault'>
                        Bank Details
                      </label>
                    </div>

                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckDefault'
                      />
                      <label class='form-check-label' for='flexCheckDefault'>
                        Photo
                      </label>
                    </div>
                  </td>
                </td>
              </tr>
            ))}
            {/* <tr>
              <th contentEditable='true' scope='row'>
                12/6/21
              </th>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label class='form-check-label' for='flexCheckDefault'>
                    Adhaar Card
                  </label>
                </div>

                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label class='form-check-label' for='flexCheckDefault'>
                    Pan Card
                  </label>
                </div>

                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label class='form-check-label' for='flexCheckDefault'>
                    Bank Details
                  </label>
                </div>
              </td>
            </tr>
            
            <tr>
              <th contentEditable='true' scope='row'>
                12/6/21
              </th>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <td>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Adhaar Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Pan Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Bank Details
                    </label>
                  </div>
                </td>
              </td>
            </tr>
            <tr>
              <th contentEditable='true' scope='row'>
                12/6/21
              </th>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <td>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Adhaar Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Pan Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Bank Details
                    </label>
                  </div>
                </td>
              </td>
            </tr>
            <tr>
              <th contentEditable='true' scope='row'>
                12/6/21
              </th>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <textarea
                  style={{ height: '70px' }}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </td>
              <td>
                <td>
                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Adhaar Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Pan Card
                    </label>
                  </div>

                  <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <label class='form-check-label' for='flexCheckDefault'>
                      Bank Details
                    </label>
                  </div>
                </td>
              </td>
            </tr> */}
          </tbody>
        </table>
        {janitorDetails.length ? (
          <div className='text-end mb-5'>
            <button
              className='btn btn-danger btn-lg'
              onClick={addJanitorDetails}
            >
              Add More Janitor Details
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default RegisteredJanitor;
