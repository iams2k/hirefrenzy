import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Profile() {
  //back end

  const [userData, setUserData] = useState({});
  const history = useHistory();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/userData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("");
    }
  };

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  //update data functions
  const updateData = async (e) => {
    e.preventDefault();

    const {
      userName,
      name,
      email,
      phone,
      address,
      department,
      portfolio,
      links,
    } = userData;

    try {
      const res = await fetch("/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          name,
          email,
          phone,
          address,
          department,
          portfolio,
          links,
        }),
      });

      // const data = await res.json();

      if (res.status === 202) {
        console.log("User updated successfully");
        window.alert("User Updated successfully");
      } else {
        console.log("User updated unsuccessful");
        window.alert("User Updated unsuccessful");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callAboutPage();
  });

  return (
    <>
      <Header />
      <main id="main">
        <h2 id="webpageTitle" className="text-center">
          Profile
        </h2>
        <hr />
        <form id="profileForm" action="" method="POST">
          <div className="container-fluid">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10 input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputs}
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Middle Name (Optional)"
                  name="studentProfileMiddleName"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="studentProfileLastName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-6">
                <label className="col-form-label">E-mail Address</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="E-mail Address"
                  name="email"
                  value={userData.email}
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="col-sm-6">
                <label className="col-form-label">Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <label className="col-form-label">Address</label>
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Address"
                  name="address"
                  value={userData.address}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-5">
                <label className="col-form-label">Department</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Department"
                  name="department"
                  value={userData.department}
                  onChange={handleInputs}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-4">
                <label
                  htmlFor="studentProfilePortfolioLink"
                  className="col-form-label"
                >
                  Portfolio Link
                </label>
                <input
                  id="studentProfilePortfolioLink"
                  className="form-control"
                  type="text"
                  placeholder="Portfolio Link"
                  name="portfolio"
                  onChange={handleInputs}
                  value={userData.portfolio}
                  required
                />
              </div>
              <div className="col-sm-4">
                <label htmlFor="studentProfileLink" className="col-form-label">
                  Link
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Link"
                  id="studentProfileLink"
                  name="links"
                  value={userData.links}
                  onChange={handleInputs}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary float-end"
            type="submit"
            onClick={updateData}
          >
            Save Changes
          </button>
          <button className="btn btn-danger float-end me-3" type="button">
            Cancel
          </button>
        </form>
      </main>
    </>
  );
}

export default Profile;
