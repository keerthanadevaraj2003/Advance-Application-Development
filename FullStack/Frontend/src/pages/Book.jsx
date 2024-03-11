import React, { useState, useEffect } from 'react';
import '../assets/css/book.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav1 from '../components/Nav1';
import { Link } from 'react-router-dom';

function BookingForm() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    applicant_name: '',
    event_name: '',
    applicant_address: '',
    applicant_mobile_no: '',
    applicant_email: '',
    date: '',
    time: '',
    no_of_people: '',
    food_type: 'Vegetarian',
    add_ons: [] 
  });

  const [addons, setAddons] = useState([]);

  const { applicant_name, event_name, applicant_address, applicant_mobile_no, applicant_email, date, time, no_of_people, food_type, add_ons } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onAddonsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setUser({ ...user, add_ons: selectedOptions });
  };
  const handleRecharge = () => {
    try {
      const amountx = 250;
      var options = {
        key: "rzp_test_i1tLowNKXmrrLX",
        key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
        amount: amountx * 100,
        currency: "INR",
        name: "D-Portal",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "DEEPAK",
          email: "deepakprabu1234@gmail.com",
          contact: "8754988838",
        },
        notes: {
          address: "Sri krishna college of Engineering and Technology",
        },
        theme: {
          color: "#3399cc",
        },
      };

      var pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:8081/add/event", user, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("YOUR FORM IS SUBMITTED");
      handleRecharge();
      navigate("/side");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  useEffect(() => {
    const fetchAddons = async () => {
      try {
        const response = await axios.get("http://localhost:8081/get/addon");
        setAddons(response.data);
      } catch (error) {
        console.error("Error fetching addons:", error);
     
      }
    };

    fetchAddons();
  }, []);


  return (
    <>
      <Nav1 />
      <div className="-container">
        <h2>Event Booking Form</h2>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="applicantName">Applicant Name:</label>
          <input type="text" id="applicantName" name="applicant_name" value={applicant_name} onChange={onInputChange} required />
          <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" name="event_name" value={event_name} onChange={onInputChange} required />
                    <label htmlFor="applicantAddress">Applicant Address:</label>
                    <input type="text" id="applicantAddress" name="applicant_address" value={applicant_address} onChange={onInputChange} required />
                    <label htmlFor="applicantMobile">Applicant Mobile Number:</label>
                    <input type="tel" id="applicantMobile" name="applicant_mobile_no" value={applicant_mobile_no} onChange={onInputChange} required />
                    <label htmlFor="applicantEmail">Applicant Email:</label>
                    <input type="email" id="applicantEmail" name="applicant_email" value={applicant_email} onChange={onInputChange} required />
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={onInputChange} required />
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" value={time} onChange={onInputChange} required />
                    <label htmlFor="numPeople">Number of People:</label>
                    <input type="number" id="numPeople" name="no_of_people" value={no_of_people} onChange={onInputChange} required />
                    <label htmlFor="foodType">Food Type:</label>
                    <select id="foodType" name="food_type" value={food_type} onChange={onInputChange} required>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Both">Both</option>
                    </select>
                    <br />
          <div>
            <label htmlFor="add_ons">Addons:</label>
            <select multiple id="add_ons" name="add_ons" value={add_ons} onChange={onAddonsChange} required>
              {addons.map(addon => (
                <option key={addon.id} value={addon.addon_name}>
                  {addon.addon_name}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center>
            <input type="submit" value="Submit" />
          </center>
        </form>
      </div>
    </>
  );
}

export default BookingForm;



// import React, { useState, useEffect } from 'react';
// import '../assets/css/book.css'; 
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Nav1 from '../components/Nav1';

// function BookingForm() {
//   let navigate = useNavigate();

//   const [user, setUser] = useState({
//     applicant_name: '',
//     event_name: '',
//     applicant_address: '',
//     applicant_mobile_no: '',
//     applicant_email: '',
//     date: '',
//     time: '',
//     no_of_people: '',
//     food_type: 'Vegetarian',
//     add_ons: [] 
//   });

//   const [themes, setThemes] = useState([]);

//   const { applicant_name, event_name, applicant_address, applicant_mobile_no, applicant_email, date, time, no_of_people, food_type, add_ons } = user;

//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const onAddonsChange = (e) => {
//     const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
//     setUser({ ...user, add_ons: selectedOptions });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     try {
//       await axios.post("http://localhost:8081/add/event", user, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       alert("YOUR FORM IS SUBMITTED");
//       navigate("/side");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error submitting form. Please try again later.");
//     }
//   };

//   useEffect(() => {
//     const fetchThemes = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/get/addon");
//         console.log(response);
//         setThemes(response.data);
//       } catch (error) {
//         console.error("Error fetching themes:", error);
//       }
//     };

//     fetchThemes();
//   }, []);

//   return (
//     <>
//     <Nav1 />
//     <div className="-container">
//         <h2>Event Booking Form</h2>
//         <form className="form" onSubmit={onSubmit}>
//             <label htmlFor="applicantName">Applicant Name:</label>
//             <input type="text" id="applicantName" name="applicant_name" value={applicant_name} onChange={onInputChange} required />
//             <label htmlFor="eventName">Event Name:</label>
//             <input type="text" id="eventName" name="event_name" value={event_name} onChange={onInputChange} required />
//             <label htmlFor="applicantAddress">Applicant Address:</label>
//             <input type="text" id="applicantAddress" name="applicant_address" value={applicant_address} onChange={onInputChange} required />
//             <label htmlFor="applicantMobile">Applicant Mobile Number:</label>
//             <input type="tel" id="applicantMobile" name="applicant_mobile_no" value={applicant_mobile_no} onChange={onInputChange} required />
//             <label htmlFor="applicantEmail">Applicant Email:</label>
//             <input type="email" id="applicantEmail" name="applicant_email" value={applicant_email} onChange={onInputChange} required />
//             <label htmlFor="date">Date:</label>
//             <input type="date" id="date" name="date" value={date} onChange={onInputChange} required />
//             <label htmlFor="time">Time:</label>
//             <input type="time" id="time" name="time" value={time} onChange={onInputChange} required />
//             <label htmlFor="numPeople">Number of People:</label>
//             <input type="number" id="numPeople" name="no_of_people" value={no_of_people} onChange={onInputChange} required />
//             <label htmlFor="foodType">Food Type:</label>
//             <select id="foodType" name="food_type" value={food_type} onChange={onInputChange} required>
//                 <option value="Vegetarian">Vegetarian</option>
//                 <option value="Non-Vegetarian">Non-Vegetarian</option>
//                 <option value="Both">Both</option>
//             </select>
//             <br />
//           <div>
//             <label htmlFor="add_ons">Addons:</label>
//             <select multiple id="add_ons" name="add_ons" value={add_ons} onChange={onAddonsChange} required>
//               {themes.map(theme => (
//                 <option key={theme.id} value={theme.addon_name}>
//                   {theme.theme_name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <br />
//           <center>
//             <input type="submit" value="Submit" />
//           </center>
//         </form>
//       </div>
//     </>
//   );
// }

// export default BookingForm;