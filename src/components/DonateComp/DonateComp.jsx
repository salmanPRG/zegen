import React, { useState } from "react";
import "./DonateComp.css";
import { CgCross } from "react-icons/cg";
import donate1 from "../Assets/donation3-768x456.jpg";
import donate2 from "../Assets/donation5-768x456.jpg";
import donate3 from "../Assets/donation2-768x456.jpg";
import donate4 from "../Assets/donation7-768x456.jpg";
import donate5 from "../Assets/donation6-768x456.jpg";
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const DonateComp = () => {
  const [donationOptions, setDonationOptions] = useState({
    paypal: false,
    offline: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setDonationOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  return (
    <div className="container2">
      <div className="donate-container">
        <div className="info1">
          <p>
            Home -<span> Donate Now</span>
          </p>
        </div>
        <h1>Donate Now</h1>
        <div className="cross1">
          <div className="cross2">
            <CgCross />
          </div>
        </div>
      </div>
      <div class="row">
        <div className="main-Donate">
          <div class="col col-xl-3 mt-5">
            <div className="section1">
              <h4 className="title">Our Campaigns</h4>
              <div className="Donate-card1">
                <img src={donate1} alt="" />
                <h5>Medical Treatment</h5>
                <p>665 Days Left</p>
              </div>
              <div className="Donate-card2">
                <img src={donate2} alt="" />
                <h5>Donate Clothes</h5>
                <p>665 Days Left</p>
              </div>
              <div className="Donate-card3">
                <img src={donate3} alt="" />
                <h5>Shelters For Needy</h5>
                <p>665 Days Left</p>
              </div>
              <div className="Donate-card4">
                <img src={donate4} alt="" />
                <h5>Hygienic Food</h5>
                <p>665 Days Left</p>
              </div>
              <div className="Donate-card5">
                <img src={donate5} alt="" />
                <h5>Education For Children</h5>
                <p>665 Days Left</p>
              </div>
            </div>
          </div>
          <div class="col col-lg-6 mt-5">
            <div className="section2">
              <div className="head">
                <h5>DONATE HERE!</h5>
                <h2>Save the Humanity, Save Life</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisi cing elit dolo
                  rem consequ untur natus laudantium commodie adipis.
                </p>
                <a>Registered before? Log in to use your saved details.</a>
              </div>
              <div className="donation">
                <p>Your Donation</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter donation amount"
                  required
                />
              </div>
              <div className="user-details1">
                <label>First name *</label>
                <input type="text" name="name" required />
                <label>Last name *</label>
                <input type="text" name="name" required />
                <label>Email *</label>
                <input type="email" name="email" required />
                <label>Address</label>
                <input type="text" name="address" required />
                <label>Address2</label>
                <input type="text" name="address2" required />
                <label>City</label>
                <input type="text" name="city" required />
                <label>State</label>
                <input type="text" name="state" required />
                <label>Postcode</label>
                <input type="number" name="code" required />
                <label>Country</label>
                <select id="country" name="country">
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <label>Phone Number</label>
                <input type="phone" name="phone" required />
              </div>
              <div className="payments">
                <h5>Payment</h5>
                <h6>Choose Your Payment</h6>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="paypal"
                    checked={donationOptions.paypal}
                    onChange={handleChange}
                  />
                  PayPal
                  <span className="checkmark"></span>
                </label>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="offline"
                    checked={donationOptions.offline}
                    onChange={handleChange}
                  />
                  Offline Donation
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateComp;
