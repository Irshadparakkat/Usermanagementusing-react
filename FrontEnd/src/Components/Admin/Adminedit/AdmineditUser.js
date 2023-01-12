import React from 'react'

function AdmineditUser() {
  return (
    <div >
    <div className="container ">
            <h1 className="fw-bold mb-5 text-center">Edit Details</h1>

            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1"> name</label>
                <input name="Name" type="text" id="username"  className="form-control"  />
            </div>
            <div className="form-outline mb-4 mt-5">
                <label className="form-label" for="form2Example1">Email address</label>
                <input type="email" id="userEmail" className="form-control" name="Email"  />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label" for="form3Example1"> phone</label>
                <input name="Name" type="number" id="username"  className="form-control"  />
            </div>

            <div className="text-center">
                <small className="text-danger"></small>
            </div>
            <div className="text-center">
                <button id="btn-submit" type="button" className="btn btn-primary btn-block mb-4">Edit Details</button>
            </div>
            

    </div>

</div>
  )
}

export default AdmineditUser