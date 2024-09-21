import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4a49a3c-599a-49ab-8836-fae011b4aec3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="msg_icon" /> </h3>
        <p>
          Feel free to reach out- we're here to answer your questions, address your concerns, and help you on your journey.
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" />avadhanisoftwares@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 - 9902014879</li>
          <li><img src={location_icon} alt="" /> Karnataka, India</li>
        </ul>
      </div>
<div className="contact-col">
  <form onSubmit={onSubmit} >
    <label>  Name</label>
    <input type="text" name='name' placeholder='Enter name' required />
    <label> Phone Number</label>
    <input type="tel" name='phone' placeholder='Enter mobile number' required />

    <label> Write your message here </label>
<textarea name="message" rows="6" placeholder='message' required></textarea>
<button type='submit' className='btn dark-btn'> Submit </button>
  </form>
  <span>{result}</span>
</div>

    </div>
  )
}

export default Contact