
//time to make componenets for the app
//make one giant app class that will return everything for the final render
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 0,
      name: '',
      email: '',
      password: '',
      lineOne: '',
      lineTwo: '',
      city: '',
      state: '',
      zipcode: '',
      phoneNumber: '',
      creditcard: '',
      expiration: '',
      ccv: '',
      billingzip: '',
      finalData: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.form === 3) {
      var allValues = Object.values(this.state);
      allValues.shift();
      axios.post('/', {
        values: allValues
      })
      .then((response) => {
        this.setState({
          finalData: response.data
        })
      })
      .catch((error) => console.log(error));
    }
    this.setState((state) => {
      return {form: state.form === 5 ? 0 : state.form + 1}
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        {this.state.form === 1
        ? <FormOne handleClick={this.handleClick} handleChange={this.handleChange} input={this.state}/>
        : this.state.form === 2
        ? <FormTwo handleClick={this.handleClick} handleChange={this.handleChange} input={this.state}/>
        : this.state.form === 3
        ? <FormThree handleClick={this.handleClick} handleChange={this.handleChange} input={this.state}/>
        : this.state.form === 4
        ? <WaitForConfirmation handleClick={this.handleClick}/>
        : this.state.form === 5
        ? <Confirmation handleClick={this.handleClick} handleChange={this.handleChange} finalDataFields={Object.keys(this.state.finalData)} finalDataValues={Object.values(this.state.finalData)}/>
        : <Checkout handleClick={this.handleClick}/>}
      </div>
    )
  }
}

var FormOne = (props) => (
  <form method="POST" id="formOne" onSubmit={props.handleClick}>
    <p>
    <label>Name:</label>
    <input type="text" id="name" name="name" value={props.input.name} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>E-mail:</label>
    <input type="email" id="mail" name="email" value={props.input.email} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>Password:</label>
    <textarea type="password" id="password" name="password" value={props.input.password} onChange={props.handleChange}></textarea>
    </p>
   <button onClick={props.handleClick}>Next</button>
</form>
);

var FormTwo = (props) => (
  <form  id="formTwo" method='POST'>
    <p>
    <label>Line One:</label>
    <input type="text" id="lineOne" name="lineOne" value={props.input.lineOne} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>Line Two:</label>
    <input type="text" id="lineTwo" name="lineTwo" value={props.input.lineTwo} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>City:</label>
    <input type="text" id="city" name="city" value={props.input.city} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>State:</label>
    <textarea type="text" id="state" name="state" value={props.input.state} onChange={props.handleChange}></textarea>
    </p>
    <p>
    <label>Zip Code:</label>
    <textarea type="text" id="zipcode" name="zipcode" value={props.input.zipcode} onChange={props.handleChange}></textarea>
    </p>
    <p>
    <label>Phone Number:</label>
    <textarea type="text" id="phoneNumber" name="phoneNumber" value={props.input.phoneNumber} onChange={props.handleChange}></textarea>
    </p>
    <button onClick={props.handleClick}>Next</button>
</form>
);


var FormThree = (props) => (
  <form id="formThree" method='POST'>
    <p>
    <label>Credit Card Number:</label>
    <input type="text" id="creditcard" name="creditcard" value={props.input.creditcard} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>Expiration Date:</label>
    <input type="text" id="expiration" name="expiration" value={props.input.expiration} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>CCV:</label>
    <input type="text" id="ccv" name="ccv" value={props.input.ccv} onChange={props.handleChange}></input>
    </p>
    <p>
    <label>Billing Zip Code:</label>
    <textarea type="text" id="billingzip" name="billingzip" value={props.input.billingzip} onChange={props.handleChange}></textarea>
    </p>
    <button onClick={props.handleClick}>Next</button>
  </form>
);

var WaitForConfirmation = (props) => (
  <div>
    <h1>Compiling All Your Data...</h1>
    <button onClick={props.handleClick}>Continue</button>
  </div>
);

var Confirmation = ({finalDataValues, finalDataFields, handleClick}) => (
  <div>
  <ul>
    {finalDataValues.map((value) => {if (value) { return <li key={value}>{value}</li>}})}
  </ul>
  <button onClick={handleClick}>Purchase</button>
  </div>
);

var Checkout = (props) => (
  <button onClick={props.handleClick}>Check Out</button>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);