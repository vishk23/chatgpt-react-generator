import React, { useState } from 'react';

const Layout = () => {
  const [searchDetails, setSearchDetails] = useState({
    searchType: 'PROF',
    actvOnly: 'TRUE',
    sel_jnj_id: '',
    prof_jnj_id: ''
  });
  
  const [pDetails, setPDetails] = useState([]);
  
  const resetForm = () => {
    let newDetail = { ...searchDetails };
    newDetail.searchType = 'PROF';
    newDetail.actvOnly = 'TRUE';
    newDetail.sel_jnj_id = '';
    newDetail.prof_jnj_id = '';
    setSearchDetails(newDetail);
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // make fetch/AJAX call here
  };
    
  const handleClick = (pDetail) => {
    // define your function here
  };
    
  return (
    <div className="container text-center p-0 m-0">
      <div className="row p-0 m-0">
        <div className="col-sm-2  p-1 border border-dark">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="searchType" id="searchType" hidden value={searchDetails.searchType} />
            <input type="hidden" name="actvOnly" id="actvOnly" hidden value={searchDetails.actvOnly} />
            <input type="hidden" name="sel_jnj_id" id="sel_jnj_id" hidden value={searchDetails.sel_jnj_id} />

            <div className="text-start mb-0">
              <label htmlFor="exampleFormControlInput1" className="form-label p-0 m-0 text-start fw-bold">J&J ID</label> 
              <input 
                type="text" 
                className="form-control m-0 p-0" 
                id="prof_jnj_id" 
                name="prof_jnj_id" 
                value={searchDetails.prof_jnj_id} 
                onChange={(e) => setSearchDetails({ ...searchDetails, prof_jnj_id: e.target.value })} 
              />
            </div>
            
            <div className="d-grid gap-2 mt-2">
              <input type="submit" id="searchbtnId" value="Submit Search" className="btn btn-primary" />
              <input type="button" value="Clear" onClick={resetForm} className="btn btn-primary" />
            </div>
          </form>
        </div>  	
        <div className="col-sm-10  p-1 border border-dark">
          {/* Implement Table here */}
        </div>
      </div>
    </div>
  );
};

export default Layout;