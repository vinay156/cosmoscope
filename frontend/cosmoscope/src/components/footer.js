import React, { Component } from 'react';

class Footer extends Component {
    // state = {  }
    render() { 
        return (
            <div className="custom-footer col p-3 d-flex justify-content-center " style={{color:'black', background:'#c0b9b924'}}>
                <form class="col-md-8 form-inline my-2">
                    <input class="form-control col-lg-10" type="search" placeholder="Search" aria-label="Search" style={{opacity:1}} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
          );
    }
}
 
export default Footer;