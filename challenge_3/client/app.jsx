
//time to make componenets for the app
//make one giant app class that will return everything for the final render

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOne: false,
      formTwo: false,
      formThree: false,
      allFormsCompleted: false
    }
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleFirstNext = this.handleFirstNext.bind(this);
    this.handleSecondNext = this.handleSecondNext.bind(this);
    this.handleLastClick =  this.handleLastClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckOut(event) {
    event.preventDefault();
    this.setState({
      formOne: true
    })
  }

  handleFirstNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: true
    })
  }

  handleSecondNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: true
    })
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: false,
      allFormsCompleted: true
    })
  }

  handlePurchase(event) {
    event.preventDefault();
    this.setState({
      allFormsCompleted: false
    })
  }

  render() {
    return (
      <div>
        {this.state.formOne
        ? <FormOne handleClick={this.handleFirstNext}/>
        : this.state.formTwo
        ? <FormTwo handleClick={this.handleSecondNext}/>
        : this.state.formThree
        ? <FormThree handleClick={this.handleLastClick}/>
        : this.state.allFormsCompleted
        ? <Confirmation handleClick={this.handlePurchase}/>
        : <Checkout handleClick={this.handleCheckOut}/>}
      </div>
    )
  }
}

var FormOne = (props) => (
  <form >
    <p>
    <label>Name:</label>
    <input type="text" id="name" name="user_name"></input>
    </p>
    <p>
    <label>E-mail:</label>
    <input type="email" id="mail" name="user_email"></input>
    </p>
    <p>
    <label>Password:</label>
    <textarea type="password" id="password" name="user_password"></textarea>
    </p>
    <button onClick={props.handleClick}>Next</button>
</form>
);

var FormTwo = (props) => (
  <form >
    <p>
    <label>Line One:</label>
    <input type="text" id="lineOne" name="lineOne"></input>
    </p>
    <p>
    <label>Line Two:</label>
    <input type="text" id="lineTwo" name="lineTwo"></input>
    </p>
    <p>
    <label>City:</label>
    <input type="text" id="city" name="city"></input>
    </p>
    <p>
    <label>State:</label>
    <textarea type="text" id="state" name="state"></textarea>
    </p>
    <p>
    <label>Zip Code:</label>
    <textarea type="number" id="zipcode" name="zipcode"></textarea>
    </p>
    <p>
    <label>Phone Number:</label>
    <textarea type="tel" id="state" name="state"></textarea>
    </p>
    <button onClick={props.handleClick}>Next</button>
</form>
);
var Checkout = (props) => (
  <button onClick={props.handleClick}>Check Out</button>
);

var FormThree = (props) => (
  <form >
    <p>
    <label>Credit Card Number:</label>
    <input type="number" id="ccNumber" name="ccNumber"></input>
    </p>
    <p>
    <label>Expiration Date:</label>
    <input type="text" id="expiration" name="expiration"></input>
    </p>
    <p>
    <label>CCV:</label>
    <input type="number" id="ccv" name="ccv"></input>
    </p>
    <p>
    <label>Billing Zip Code:</label>
    <textarea type="number" id="billingzip" name="billingzip"></textarea>
    </p>
    <button onClick={props.handleClick}>Next</button>
</form>
);

var Confirmation = (props) => (
  <div>
  <p>All form Data / User data from the db should be here</p>
  <button onClick={props.handleClick}>Purchase</button>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);