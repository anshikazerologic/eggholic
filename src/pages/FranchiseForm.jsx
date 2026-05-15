import React, { useState, useEffect } from "react";
import axios from "axios";


// ✅ Reusable hook for screen size detection
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function FranchiseForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // ✅ Form State structured exactly for your PHP logic
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
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
    },
  });

  const steps = [
    { label: "Personal", width: 5 },
    { label: "Education", width: 17 },
    { label: "Occupation", width: 20 },
    { label: "Financials", width: 21 },
    { label: "General", width: 19 },
    { label: "Submit", width: 19 },
  ];

  // ✅ Updated Handle Change for Nested State
  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedInterests = [...formData.general.interestType];
      if (checked) {
        updatedInterests.push(value);
      } else {
        const index = updatedInterests.indexOf(value);
        if (index > -1) updatedInterests.splice(index, 1);
      }
      setFormData({
        ...formData,
        general: { ...formData.general, interestType: updatedInterests },
      });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [name]: value },
      });
    }
  };

  const nextStep = () => { if (step < steps.length) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/franchise.php", formData);
      if (response.data.success) {
        alert("Franchise application submitted successfully!");
        window.location.reload();
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Please check your API connection.");
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
      {/* Progress Bar */}
      <div className="progress position-relative" style={{ height: "6px" }}>
        <div className="progress-bar bg-primary" role="progressbar"
          style={{ width: `${steps.slice(0, step).reduce((acc, s) => acc + s.width, 0)}%` }}
        />
      </div>

      {/* Step Indicators */}
      <div className="d-flex justify-content-between position-relative" style={{ marginTop: "-20px" }}>
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className={`circle ${i + 1 < step ? "completed" : i + 1 === step ? "active" : ""}`}>
              <span className="mnone">{i + 1 < step ? svg : i + 1}</span>
            </div>
            <small className={i + 1 <= step ? "fw-bold text-primary mnone" : "text-muted mnone"}>{s.label}</small>
          </div>
        ))}
      </div>

      <form style={{ marginTop: "40px" }} onSubmit={handleSubmit}>

        {/* Step 1: Personal */}
        {step === 1 && (
          <div className="row">
            <h4 className="mb-3">Personal Information</h4>
            <div className="col-md-6 mb-3">
              <label>Full Name</label>
              <input type="text" name="fullName" className="form-control" value={formData.personal.fullName} onChange={(e) => handleChange(e, "personal")} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" value={formData.personal.email} onChange={(e) => handleChange(e, "personal")} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input type="text" name="phone" className="form-control" value={formData.personal.phone} onChange={(e) => handleChange(e, "personal")} required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Home Address</label>
              <input type="text" name="address" className="form-control" value={formData.personal.address} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-md-4 mb-3">
              <label>City</label>
              <input type="text" name="city" className="form-control" value={formData.personal.city} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-md-4 mb-3">
              <label>Province</label>
              <input type="text" name="province" className="form-control" value={formData.personal.province} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-md-4 mb-3">
              <label>Postal Code</label>
              <input type="text" name="postalCode" className="form-control" value={formData.personal.postalCode} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Country of Citizen?</label>
              <input type="text" name="citizenOf" className="form-control" value={formData.personal.citizenOf} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Country of Legal Resident?</label>
              <input type="text" name="legalResident" className="form-control" value={formData.personal.legalResident} onChange={(e) => handleChange(e, "personal")} />
            </div>
            <div className="col-12 mb-3">
              <label>Why Eggholic?</label>
              <textarea name="interestReason" className="form-control" rows="3" value={formData.personal.interestReason} onChange={(e) => handleChange(e, "personal")}></textarea>
            </div>
          </div>
        )}

        {/* Step 2: Education */}
        {step === 2 && (
          <div className="row">
            <h4 className="mb-3">Education</h4>
            <div className="col-md-6 mb-3">
              <label>High School</label>
              <input type="text" name="highSchool" className="form-control" value={formData.education.highSchool} onChange={(e) => handleChange(e, "education")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Graduated?</label>
              <select name="graduate" className="form-select" value={formData.education.graduate} onChange={(e) => handleChange(e, "education")}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <label>Diploma/Degree Name</label>
              <input type="text" name="diploma" className="form-control" value={formData.education.diploma} onChange={(e) => handleChange(e, "education")} />
            </div>
          </div>
        )}

        {/* Step 3: Occupation */}
        {step === 3 && (
          <div className="row">
            <h4 className="mb-3">Current Occupation</h4>
            <div className="col-md-6 mb-3">
              <label>Occupation</label>
              <input type="text" name="occupation" className="form-control" value={formData.occupation.occupation} onChange={(e) => handleChange(e, "occupation")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Position</label>
              <input type="text" name="position" className="form-control" value={formData.occupation.position} onChange={(e) => handleChange(e, "occupation")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Employer Name</label>
              <input type="text" name="employer" className="form-control" value={formData.occupation.employer} onChange={(e) => handleChange(e, "occupation")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Employer Phone</label>
              <input type="text" name="phone" className="form-control" value={formData.occupation.phone} onChange={(e) => handleChange(e, "occupation")} />
            </div>
            <div className="col-12 mb-3">
              <label>Employer Address</label>
              <input type="text" name="address" className="form-control" value={formData.occupation.address} onChange={(e) => handleChange(e, "occupation")} />
            </div>
          </div>
        )}

        {/* Step 4: Financials */}
        {step === 4 && (
          <div className="row">
            <h4 className="mb-3">Financial Information</h4>
            <div className="col-md-6 mb-3"><label>Liquid Assets</label><input type="text" name="liquidAssets" className="form-control" value={formData.financials.liquidAssets} onChange={(e) => handleChange(e, "financials")} /></div>
            <div className="col-md-6 mb-3"><label>Tangible Assets</label><input type="text" name="tangibleAssets" className="form-control" value={formData.financials.tangibleAssets} onChange={(e) => handleChange(e, "financials")} /></div>
            <div className="col-md-6 mb-3"><label>Liabilities</label><input type="text" name="liabilities" className="form-control" value={formData.financials.liabilities} onChange={(e) => handleChange(e, "financials")} /></div>
            <div className="col-md-6 mb-3"><label>Net Worth</label><input type="text" name="netWorth" className="form-control" value={formData.financials.netWorth} onChange={(e) => handleChange(e, "financials")} /></div>
            <div className="col-md-6 mb-3">
              <label>Financing Needed?</label>
              <select name="financing" className="form-select" value={formData.financials.financing} onChange={(e) => handleChange(e, "financials")}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 5: General */}
        {step === 5 && (
          <div className="row">
            <h4 className="mb-3">General & Operations</h4>
            <div className="col-md-6 mb-3">
              <label>Preferred Location</label>
              <select
                name="preferredArea"
                className="form-select"
                value={formData.general.preferredArea}
                onChange={(e) => handleChange(e, "general")}
              >
                <option value="">Select a Location</option>

                {/* Illinois */}
                <option value="829 W Higgins Rd, Schaumburg, IL 60195">Schaumburg, IL</option>
                <option value="833 W Chicago Ave FL 1, Chicago, IL 60642">Chicago, IL</option>
                <option value="8425 W Golf Rd, Niles, IL 60714">Niles, IL (8425)</option>
                <option value="8435 W Golf Rd, Niles, IL 60714">Niles, IL (8435)</option>

                {/* Kentucky */}
                <option value="1947 S Hurstbourne Pkwy, Louisville, KY 40220">Louisville, KY</option>

                {/* New Jersey */}
                <option value="1679 Oak Tree Rd, Edison, NJ 08820">Edison, NJ</option>
                <option value="769 Newark Avenue, Jersey City, NJ 07306">Jersey City, NJ</option>

                {/* Tennessee */}
                <option value="4126 Harding Place, Suite 106, Nashville, TN 37211">Nashville, TN</option>

                {/* Texas */}
                <option value="232 Highway 6, Suite 100, Sugar Land, TX 77478">Sugar Land, TX</option>
                <option value="7750 N MacArthur Blvd, Suite 135, Irving, TX 75063">Irving, TX</option>

                {/* Virginia & DC */}
                <option value="13951 Metrotech Drive, Chantilly, VA 20151">Chantilly, VA</option>
                <option value="1990 M St NW, Unit 102, Washington, DC 20036">Washington, DC</option>

                {/* New York */}
                <option value="256-01 Hillside Ave, Queens, NY 11001">Queens, NY</option>

                {/* Indiana */}
                <option value="1224 W 86th St, Indianapolis, IN 46260">Indianapolis, IN</option>

                {/* Massachusetts */}
                <option value="378 Maple Ave, Shrewsbury, MA 01545">Shrewsbury, MA</option>
                <option value="10 Wall St, Burlington, MA 01803">Burlington, MA</option>

                {/* Georgia */}
                <option value="490 Franklin Gateway SE, Marietta, GA 30067">Marietta, GA</option>

                {/* Ohio */}
                <option value="9774 Cincinnati Columbus Road, Cincinnati, OH 45241">Cincinnati, OH</option>

                {/* California */}
                <option value="9474 Black Mountain Rd, Suite G-H, San Diego, CA 92126">San Diego, CA</option>
                <option value="5862 Mowry School Road, Newark, CA 94560">Newark, CA</option>

                {/* North Carolina */}
                <option value="601 North Polk Street, Suite G, Pineville, NC 28314">Pineville, NC</option>

                {/* Canada */}
                <option value="168 Kennedy Rd S #1, Brampton, ON L6W 3G6, Canada">Brampton, ON, Canada</option>
                <option value="3478 Lawrence Ave E, Scarborough, ON M1H 1A9, Canada">Scarborough, ON, Canada</option>
                <option value="31 University Ave E, Waterloo, ON N2J 2V9, Canada">Waterloo, ON, Canada</option>
                <option value="4150 109 Ave NE, Suite 08, Calgary, AB T3N 1A6, Canada">Calgary, AB, Canada</option>
                <option value="2687 Kipling Ave, Toronto, ON M9V 5G6, Canada">Toronto, ON, Canada</option>
                <option value="931 Oxford Street East, Unit 2, London, ON N5Y 3K1, Canada">London, ON, Canada</option>
                <option value="1036 Louise Ave, Saskatoon, SK S7H 2P6, Canada">Saskatoon, SK, Canada</option>

                {/* UK */}
                <option value="381 Uxbridge Road, Pinner, HA5 4JN, UK">Pinner, UK</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Restaurant Experience?</label>
              <select name="experience" className="form-select" value={formData.general.experience} onChange={(e) => handleChange(e, "general")}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Who will manage?</label>
              <input type="text" name="manager" className="form-control" value={formData.general.manager} onChange={(e) => handleChange(e, "general")} />
            </div>
            <div className="col-md-6 mb-3">
              <label>Site Selected?</label>
              <select name="siteSelected" className="form-select" value={formData.general.siteSelected} onChange={(e) => handleChange(e, "general")}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <label>Interest Type</label><br />
              {["Single Location", "Multiple Location", "Area Development"].map(type => (
                <div key={type} className="form-check form-check-inline">
                  <input type="checkbox" className="form-check-input" value={type} checked={formData.general.interestType.includes(type)} onChange={(e) => handleChange(e, "general")} />
                  <label className="form-check-label">{type}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {step === 6 && (
          <div className="text-center">
            <h4 className="mb-3">Ready to Submit?</h4>
            <p>Please double-check all fields. By submitting, you are applying for an Eggholic franchise.</p>
            <button type="submit" className="btn btn-success btn-lg w-100" disabled={loading}>
              {loading ? "Processing..." : "Submit Application"}
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-5">
          {step > 1 && <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>}
          {step < 6 && <button type="button" className="btn btn-primary px-4" onClick={nextStep}>Next</button>}
        </div>
      </form>
    </div>
  );
}

export default FranchiseForm;