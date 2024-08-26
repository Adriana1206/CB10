import styles from './Form.module.css';
import { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    enquiry: "",
    request: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <form className={styles['form-group']}>
        <h1>Contact Us</h1>
        <div className={styles.row}>
          <div className={styles.column}>
            <label>First Name *</label>
            <input name="name" onChange={handleChange} />
          </div>
          <div className={styles.column}>
            <label>Last Name *</label>
            <input name="surname" onChange={handleChange} />
          </div>
        </div>
        
        <label>Email Address *</label>
        <input name="email" onChange={handleChange} />
    
        <label>Query Type *</label>
        <div className={styles.row}>
          <input className={styles.type} name="enquiry" placeholder="General Enquiry" onChange={handleChange} />
          <input className={styles.type} name="request" placeholder="Support Request" onChange={handleChange} />
        </div>
    
        <label>Message *</label>
        <textarea name="message" onChange={handleChange} />
    
        <button type="submit">Submit</button>
      </form>
      <div className={styles.input}>
        <h1>{input.name}</h1>
        <h1>{input.surname}</h1>
        <h1>{input.email}</h1>
        <h1>{input.enquiry}</h1>
        <h1>{input.request}</h1>
        <h1>{input.message}</h1>
      </div>
    </>
  );
}

export default Form;
