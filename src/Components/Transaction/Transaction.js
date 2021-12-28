import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Tagline from '../Home/Tagline/Tagline';

const Transaction = () => {
  return (
    <section className='bg-watermark'>
      <Navbar />
      <Tagline />
      <div className='container pt-5'>
        <p className='fs-2 text-center'>Transaction Details</p>
        <table class='table table-secondary table-hover'>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Payee Name</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Employee Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
            <tr>
              <th scope='row'>12/6/21</th>
              <td>Sid</td>
              <td>1200</td>
              <td>Siddanth</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transaction;
