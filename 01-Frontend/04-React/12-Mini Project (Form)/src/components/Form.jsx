import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Pakistan",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification : ''
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((previousFormData) => {
      return {
        ...previousFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="first-name">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          placeholder="Enter first name"
        />
      </div>
      <div className="last-name">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          placeholder="Enter last name"
        />
      </div>
      <div className="email-address">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
        />
      </div>
      <div className="country">
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          id="country"
          value={formData.country.value}
          onChange={changeHandler}
        >
          <option value="Pakistan">Pakistan</option>
          <option value="China">China</option>
          <option value="Turkey">Turkey</option>
          <option value="India">India</option>
        </select>
      </div>
      <div className="street-address">
        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          name="street"
          id="street"
          value={formData.street}
          onChange={changeHandler}
          placeholder="Enter street address"
        />
      </div>
      <div className="city">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          placeholder="Enter city"
        />
      </div>
      <div className="state">
        <label htmlFor="state">State / Province</label>
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          placeholder="Enter state"
        />
      </div>
      <div className="postal-code">
        <label htmlFor="zip">Zip / Postal Code </label>
        <input
          type="number"
          name="zip"
          id="zip"
          value={FormData.zip}
          onChange={changeHandler}
          placeholder="Enter zip code"
        />
      </div>
      <fieldset className="by-email">

        <legend>By Email</legend>

        <div className="comments">
             <input
          type="checkbox"
          name="comments"
          id="by-email"
          checked={formData.comments}
          onChange={changeHandler}
        />
        <label htmlFor="by-email">Comments</label>
          <p>Get notified when someone posts a comment on a posting.</p>
        </div>




        <div className="candidates">
            <input 
            type="checkbox" 
            name="candidates" 
            id="comments" 
            checked={formData.candidates}
             onChange={changeHandler}  
             />
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candiate applies for a job.</p>
        </div>


        <div className="offers">
            <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}  />
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </fieldset>

      <fieldset>
        <legend>Push Notification</legend>
        <p>These are delivered via sms to your phone.</p>
        <div className="everything">
            <input type="radio" name="pushNotifications" id="pushEverything" value="Everything" onChange={changeHandler}  />
        <label htmlFor="everything">Everything</label>
        </div>
        <div className="same-as-email">
            <input type="radio" name="pushNotifications" id="sameAsEmail" value="Same as email" onChange={changeHandler} />
            <label htmlFor="sameAsEmail">Same as email</label>
        </div>
        <div className="no-push-notifications">
            <input type="radio" name="pushNotifications" id="noPushNotifications" value="No push notifications" onChange={changeHandler} />
            <label htmlFor="noPushNotifications">No push notifications</label>
        </div>
      </fieldset>
      <button>save</button>
    </form>
  );
}
export default Form;
