import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import Tagline from '../Home/Tagline/Tagline';

const ServiceSupport = () => {
    return (
        <section className="bg-watermark">
            <Navbar/>
            <Tagline/>

        <div className='container pt-5'>
    <p className='fs-2 text-center'>Customer's Order Details</p>
      <table class='table table-secondary table-hover'>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Description</th>
            <th scope='col'>Hours Worked</th>
            <th scope='col'>Transaction</th>
            <th scope='col'>Employee Feed Back</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
          <tr>
            <th scope='row'>12/6/21</th>
            <td>
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>             
            </td>
            <td><input className="px-3" type="time"/> <span className="px-3"> To </span> <input type="time" className="px-3"/></td>
            <td>1200</td>
            <td> 
            <textarea style={{height:"20px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>

        </section>
    );
};

export default ServiceSupport;