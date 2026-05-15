import React, { useState } from 'react';
import axios from 'axios';
import './HiringForm.css';

const CHECK_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
        <path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z" />
    </svg>
);

const LOCATIONS = [
    '829 W Higgins Rd, Schaumburg, IL 60195', '833 W Chicago Ave FL 1, Chicago, IL 60642',
    '8425 W Golf Rd, Niles, IL 60714', '8435 W Golf Rd, Niles, IL 60714',
    '1947 S Hurstbourne Pkwy, Louisville, KY 40220', '1679 Oak Tree Rd, Edison, NJ 08820',
    '4126 Harding Place, Suite 106, Nashville, TN 37211', '232 Highway 6, Suite 100, Sugar Land, TX 77478',
    '7750 N MacArthur Blvd, Suite 135, Irving, TX 75063', '13951 Metrotech Drive, Chantilly, VA 20151',
    '256-01 Hillside Ave, Queens, NY 11001', '1224 W 86th St, Indianapolis, IN 46260',
    '378 Maple Ave, Shrewsbury, MA 01545', '10 Wall St, Burlington, MA 01803',
    '490 Franklin Gateway SE, Marietta, GA 30067', '769 Newark Avenue, Jersey City, NJ 07306',
    '1990 M St NW, Unit 102, Washington, DC 20036', '9774 Cincinnati Columbus Road, Cincinnati, OH 45241',
    '9474 Black Mountain Rd, Suite G-H, San Diego, CA 92126', '5862 Mowry School Road, Newark, CA 94560',
    '601 North Polk Street, Suite G, Pineville, NC 28314', '168 Kennedy Rd S #1, Brampton, ON L6W 3G6, Canada',
    '3478 Lawrence Ave E, Scarborough, ON M1H 1A9, Canada', '31 University Ave E, Waterloo, ON N2J 2V9, Canada',
    '4150 109 Ave NE, Suite 08, Calgary, AB T3N 1A6, Canada', '2687 Kipling Ave, Toronto, ON M9V 5G6, Canada',
    '931 Oxford Street East, Unit 2, London, ON N5Y 3K1, Canada', '1036 Louise Ave, Saskatoon, SK S7H 2P6, Canada',
    '381 Uxbridge Road, Pinner, HA5 4JN, UK'
];

const INITIAL_STATE = {
    firstName: '', lastName: '', homeAddress: '', city: '', state: '', postalCode: '',
    phone: '', email: '', desiredLocation: '', employmentType: 'Full-time',
    position: '', startDate: '', eligible: 'Yes', veteran: 'No',
    backgroundCheck: 'Yes', education: '', references: '', employmentHistory: '',
    resume: null, consent: false, todaysDate: '',
};

const HiringForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(INITIAL_STATE);

    const steps = [
        { label: "Personal Info", width: 10 },
        { label: "Job Info", width: 30 },
        { label: "Background", width: 30 },
        { label: "Finalize", width: 30 },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
        }));
    };

    const nextStep = () => {
        // Basic Validation for Step 1
        if (step === 1 && (!formData.firstName || !formData.email || !formData.phone)) {
            alert("Please fill in all personal details.");
            return;
        }
        setStep((prev) => Math.min(prev + 1, steps.length));
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consent) return alert("Please accept the certification consent.");

        setLoading(true);
        const dataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if (formData[key] !== null) dataToSend.append(key, formData[key]);
        });

        try {
            const res = await axios.post('/hire.php', dataToSend);
            if (res.data.success) {
                alert('Application submitted successfully!');
                setFormData(INITIAL_STATE);
                setStep(1);
            } else {
                alert('Error: ' + res.data.message);
            }
        } catch (err) {
            alert('Failed to connect to server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="hiring-form" onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '40px' }}>Job Application</h2>

            {/* Progress Bar */}
            <div className="progress position-relative" style={{ height: "6px" }}>
                <div className="progress-bar" role="progressbar" 
                    style={{ width: `${steps.slice(0, step).reduce((acc, s) => acc + s.width, 0)}%` }} 
                />
            </div>

            <div className="d-flex justify-content-between position-relative" style={{ marginTop: "-20px" }}>
                {steps.map((s, i) => (
                    <div key={i} className="text-center">
                        <div className={`circle ${i + 1 < step ? 'completed' : (i + 1 === step ? 'active' : '')}`}>
                            <span className="mnone">{i + 1 < step ? CHECK_SVG : i + 1}</span>
                        </div>
                        <small className={i + 1 <= step ? "fw-bold text-primary mnone" : "mnone"}>{s.label}</small>
                    </div>
                ))}
            </div>

            <div className="form-grid mt-4">
                {step === 1 && (
                    <>
                        <div className="form-group"><label>First Name</label><input type='text' name="firstName" value={formData.firstName} onChange={handleChange} required /></div>
                        <div className="form-group"><label>Last Name</label><input type='text' name="lastName" value={formData.lastName} onChange={handleChange} required /></div>
                        <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
                        <div className="form-group"><label>Phone</label><input type='text' name="phone" value={formData.phone} onChange={handleChange} required /></div>
                        <div className="form-group"><label>Home Address</label><input type='text' name="homeAddress" value={formData.homeAddress} onChange={handleChange} /></div>
                        <div className="form-group"><label>City</label><input type='text' name="city" value={formData.city} onChange={handleChange} /></div>
                        <div className="form-group"><label>State</label><input type='text' name="state" value={formData.state} onChange={handleChange} /></div>
                        <div className="form-group"><label>Postal Code</label><input type='text' name="postalCode" value={formData.postalCode} onChange={handleChange} /></div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="form-group">
                            <label>Desired Location</label>
                            <select name="desiredLocation" value={formData.desiredLocation} onChange={handleChange} required>
                                <option value="">-- Select Location --</option>
                                {LOCATIONS.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Employment Type</label>
                            <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                            </select>
                        </div>
                        <div className="form-group"><label>Position</label><input type='text' name="position" value={formData.position} onChange={handleChange} placeholder="e.g. Server, Any" /></div>
                        <div className="form-group"><label>Start Date</label><input type="date" name="startDate" value={formData.startDate} onChange={handleChange} /></div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="form-group"><label>Eligible to work in US?</label>
                            <div className="radio-group">
                                <label><input type="radio" name="eligible" value="Yes" checked={formData.eligible === 'Yes'} onChange={handleChange} /> Yes</label>
                                <label><input type="radio" name="eligible" value="No" checked={formData.eligible === 'No'} onChange={handleChange} /> No</label>
                            </div>
                        </div>
                        <div className="form-group" style={{ gridColumn: '1 / -1' }}><label>Education</label><textarea name="education" value={formData.education} onChange={handleChange}></textarea></div>
                        <div className="form-group" style={{ gridColumn: '1 / -1' }}><label>Employment History</label><textarea name="employmentHistory" value={formData.employmentHistory} onChange={handleChange}></textarea></div>
                    </>
                )}

                {step === 4 && (
                    <>
                        <div className="form-group"><label>Resume (PDF/Image)</label><input type="file" name="resume" accept=".pdf,.jpg,.png" onChange={handleChange} /></div>
                        <div className="form-group"><label>Today's Date</label><input type="date" name="todaysDate" value={formData.todaysDate} onChange={handleChange} /></div>
                        <label className="checkbox-label">
                            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                            I certify that my answers are true and complete.
                        </label>
                        <button type="submit" className="btn btn-success w-100 mt-3" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </>
                )}
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-outline-secondary" onClick={prevStep} disabled={step === 1 || loading}>Previous</button>
                {step < 4 && <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>}
            </div>
        </form>
    );
};

export default HiringForm;