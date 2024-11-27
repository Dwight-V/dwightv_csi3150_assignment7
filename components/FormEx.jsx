import React from 'react'

function FormEx() {
    const [ myForm, setMyForm ] = React.useState({
        fullName: "",
        username: "",
        email: "",
        address: "",
        phoneNum: ""
    });

  let handleChange = (e) => {
    const { name, value } = e.target;

    setMyForm((prevState) => {
      return {
        ...prevState, 
        [name]: value,
      };
    });
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(myForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="full-name">Full Name: </label>
      <input 
      type="text" 
      name="fullName" 
      className='text-input'
      id="full-name" 
      placeholder="Enter name"
      value={myForm.fullName} // Called a controlled input
      onChange={handleChange}/>
      <br/>
      
      <label htmlFor="username">Username: </label>
      <input 
      type="text" 
      name="username" 
      className='text-input'
      id="username" 
      placeholder="Enter username"
      value={myForm.username}
      onChange={handleChange}/>
      <br/>
      
      <label htmlFor="email">Email: </label>
      <input 
      type="email" 
      name="email"
      className='text-input' 
      id="email" 
      placeholder="Enter email" 
      value={myForm.email}
      onChange={handleChange}/>
      <br/>

      <label htmlFor="address">Address: </label>
      <input 
      type="text" 
      name="address" 
      className='text-input'
      id="adddress" 
      placeholder="Enter address"
      value={myForm.address} 
      onChange={handleChange}/>
      <br/>
      
      <label htmlFor="phoneNum">Phone Num: </label>
      {/* From https://www.w3schools.com/html/html_form_input_types.asp */}
      <input 
      type="tel" 
      name="phoneNum" 
      className='text-input'
      id="phone-num" 
      placeholder="XXX-XXX-XXXX"
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      value={myForm.phoneNum}
      onChange={handleChange}/>

      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormEx;