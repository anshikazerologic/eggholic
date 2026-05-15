import React, { useState, useEffect } from "react";
import axios from "axios";

// ✅ Reusable hook for screen size detection
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener(); // run once on mount
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function FranchiseForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ✅ Form State Initialization
  // ✅ Corrected nested structure to match PHP expectation
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "", // Note: you used 'homeAddress' in inputs, changed to 'address' for PHP
      city: "",
      province: "",
      postalCode: "",
      citizenOf: "",
      legalResident: "",
      interestReason: "",
    },
    education: {
      highSchool: "",
      graduate: "Yes",
      diploma: "",
    },
    occupation: {
      occupation: "",
      position: "",
      employer: "",
      phone: "",
      address: "",
    },
    financials: {
      liquidAssets: "",
      tangibleAssets: "",
      liabilities: "",
      netWorth: "",
      availableCapital: "",
      financing: "No",
    },
    general: {
      experience: "No",
      expDescription: "",
      manager: "",
      preferredArea: "",
      interestType: [],
      siteSelected: "No",
      siteAddress: "",
    }
  });
  const steps = [
    { label: "Personal", width: 5 },
    { label: "Education", width: 17 },
    { label: "Occupation", width: 20 },
    { label: "Financials", width: 21 },
    { label: "General", width: 19 },
    { label: "Submit", width: 19 },
  ];

  // ✅ Handle Input Changes
  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedInterests = [...formData.general.interestType];
      if (checked) updatedInterests.push(value);
      else updatedInterests.splice(updatedInterests.indexOf(value), 1);

      setFormData({
        ...formData,
        general: { ...formData.general, interestType: updatedInterests }
      });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [name]: value }
      });
    }
  };


  const nextStep = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // ✅ Final Submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual Franchise API endpoint
      const response = await axios.post("https://eggholic.whattheaargh.com/franchise.php", formData);

      if (response.data.success) {
        alert("Franchise application submitted successfully!");
        window.location.reload();
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const svg = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
      <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
    </svg>
  );

  return (
    <div className="container bhjk my-5">
      {/* Step Progress */}
      <div className="progress position-relative" style={{ height: "6px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{
            width: `${steps.slice(0, step).reduce((acc, s) => acc + s.width, 0)}%`,
          }}
        />
      </div>

      {/* Step Circles */}
      <div className="d-flex justify-content-between position-relative" style={{ marginTop: "-20px" }}>
        {steps.map((s, i) => {
          let circleClass = "circle";
          if (i + 1 < step) circleClass += " completed";
          else if (i + 1 === step) circleClass += " active";

          return (
            <div key={i} className="text-center">
              <div className={circleClass}>
                <span className="mnone">{i + 1 < step ? svg : i + 1}</span>
              </div>
              <small className={i + 1 <= step ? "fw-bold text-primary mnone" : "text-muted mnone"}>
                {s.label}
              </small>
            </div>
          );
        })}
      </div>

      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        {/* Step 1: Personal */}
        {step === 1 && (
          <>
            <h4 className="mb-3">Personal Information</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Full Name</label>
                <input type="text" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Date</label>
                <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Home Address</label>
                <input type="text" name="homeAddress" className="form-control" value={formData.homeAddress} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>City</label>
                <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label>Province</label>
                <input type="text" name="province" className="form-control" value={formData.province} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label>Postal Code</label>
                <input type="text" name="postalCode" className="form-control" value={formData.postalCode} onChange={handleChange} />
              </div>
              <div className="col-md-4 mb-3">
                <label>Phone</label>
                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label>Country of Citizen?</label>
                <input type="text" name="citizenCountry" className="form-control" value={formData.citizenCountry} onChange={handleChange} />
              </div>
              <div className="col-md-12 mb-3">
                <label>Country of Legal Residents?</label>
                <input type="text" name="legalResidentCountry" className="form-control" value={formData.legalResidentCountry} onChange={handleChange} />
              </div>
              <div className="col-12 mb-4">
                <label>Why are you interested in the Eggholic Franchise?</label>
                <textarea name="interestReason" className="form-control" rows="3" value={formData.interestReason} onChange={handleChange}></textarea>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Education */}
        {step === 2 && (
          <>
            <h4 className="mb-3">Education</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>High School</label>
                <input type="text" name="highSchool" className="form-control" value={formData.highSchool} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Did you graduate?</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="graduate" value="Yes" checked={formData.graduate === "Yes"} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input type="radio" name="graduate" value="No" checked={formData.graduate === "No"} onChange={handleChange} className="form-check-input" />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <label>Diploma/Degree Name</label>
                <input type="text" name="diploma" className="form-control" value={formData.diploma} onChange={handleChange} />
              </div>
            </div>
          </>
        )}

        {/* Step 3: Occupation */}
        {step === 3 && (
          <>
            <h4 className="mb-3">Occupation</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Current Occupation</label>
                <input type="text" name="occupation" className="form-control" value={formData.occupation} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Position</label>
                <input type="text" name="position" className="form-control" value={formData.position} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Name of Employer</label>
                <input type="text" name="employerName" className="form-control" value={formData.employerName} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Employer Phone</label>
                <input type="text" name="employerPhone" className="form-control" value={formData.employerPhone} onChange={handleChange} />
              </div>
              <div className="col-md-12 mb-3">
                <label>Employer Address</label>
                <input type="text" name="employerAddress" className="form-control" value={formData.employerAddress} onChange={handleChange} />
              </div>
            </div>
          </>
        )}

        {/* Step 4: Financials */}
        {step === 4 && (
          <>
            <h4 className="mb-3">Financial Information</h4>
            <div className="row">
              <div className="col-md-6 mb-3"><label>Total Liquid Assets</label><input type="text" name="liquidAssets" className="form-control" value={formData.liquidAssets} onChange={handleChange} /></div>
              <div className="col-md-6 mb-3"><label>Total Tangible Assets</label><input type="text" name="tangibleAssets" className="form-control" value={formData.tangibleAssets} onChange={handleChange} /></div>
              <div className="col-md-6 mb-3"><label>Total Liabilities</label><input type="text" name="liabilities" className="form-control" value={formData.liabilities} onChange={handleChange} /></div>
              <div className="col-md-6 mb-3"><label>Total Net Worth</label><input type="text" name="netWorth" className="form-control" value={formData.netWorth} onChange={handleChange} /></div>
              <div className="col-md-6 mb-3"><label>Total Capital Available</label><input type="text" name="availableCapital" className="form-control" value={formData.availableCapital} onChange={handleChange} /></div>
              <div className="col-md-6 mb-3">
                <label>Will you need financing?</label>
                <div>
                  <label className="me-3"><input type="radio" name="financing" value="Yes" checked={formData.financing === "Yes"} onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="financing" value="No" checked={formData.financing === "No"} onChange={handleChange} /> No</label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 5: General */}
        {step === 5 && (
          <>
            <h4 className="mb-3">General Information</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Restaurant management experience?</label>
                <div>
                  <label className="me-3"><input type="radio" name="restaurantExp" value="Yes" checked={formData.restaurantExp === "Yes"} onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="restaurantExp" value="No" checked={formData.restaurantExp === "No"} onChange={handleChange} /> No</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>If "Yes", describe</label>
                <input type="text" name="expDescription" className="form-control" value={formData.expDescription} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Who will manage operations?</label>
                <input type="text" name="operationsManager" className="form-control" value={formData.operationsManager} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label>Preferred City/Area</label>
                <input type="text" name="preferredArea" className="form-control" value={formData.preferredArea} onChange={handleChange} />
              </div>
              <div className="col-md-12 mb-3">
                <label>Interest Type</label>
                <div>
                  {["Single Location", "Multiple Location", "Area Development"].map((type) => (
                    <div className="form-check form-check-inline" key={type}>
                      <input type="checkbox" name="interestType" value={type} checked={formData.interestType.includes(type)} onChange={handleChange} className="form-check-input" />
                      <label className="form-check-label">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>Site Selected?</label>
                <div>
                  <label className="me-3"><input type="radio" name="siteSelected" value="Yes" checked={formData.siteSelected === "Yes"} onChange={handleChange} /> Yes</label>
                  <label><input type="radio" name="siteSelected" value="No" checked={formData.siteSelected === "No"} onChange={handleChange} /> No</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>Site Address</label>
                <input type="text" name="siteAddress" className="form-control" value={formData.siteAddress} onChange={handleChange} />
              </div>
            </div>
          </>
        )}

        {/* Step 6: Review & Submit */}
        {step === 6 && (
          <>
            <h4 className="mb-3">Review & Submit</h4>
            <div className="alert alert-info">
              ✅ Please review all your information. By clicking submit, you agree to our franchise terms.
            </div>
            <button type="submit" className="btn btn-success mt-3 w-100" disabled={loading}>
              {loading ? "Submitting..." : "Submit Franchise Application"}
            </button>
          </>
        )}

        {/* Navigation */}
        <div className="d-flex justify-content-between mt-4">
          {step > 1 ? (
            <button type="button" className="btn btn-outline-secondary" onClick={prevStep} disabled={loading}>
              Previous
            </button>
          ) : (
            <div></div>
          )}
          {step < steps.length ? (
            <button type="button" className="btn btn-primary" onClick={nextStep}>
              Next
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default FranchiseForm;