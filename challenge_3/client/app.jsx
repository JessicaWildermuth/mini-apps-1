
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
    // this.handlePurchase = this.handlePurchase.bind(this);
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
    document.getElementById('formOne').submit();
  }

  handleSecondNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: true
    })
    document.getElementById('formTwo').submit();
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: false,
      allFormsCompleted: true
    })
    document.getElementById('formThree').submit();
  }

  // handlePurchase(event) {
  //   event.preventDefault();
  //   this.setState({
  //     allFormsCompleted: false
  //   })
  // }

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

//need to make the next button also post a request
//sending a post request
//now need to just see if when I respond, I go to the correct page
//goes to the correct page and sends a post request
var FormOne = (props) => (
  <form method="POST" id="formOne" onSubmit={props.handleClick}>
    <p>
    <label>Name:</label>
    <input type="text" id="name" name="name"></input>
    </p>
    <p>
    <label>E-mail:</label>
    <input type="email" id="mail" name="email"></input>
    </p>
    <p>
    <label>Password:</label>
    <textarea type="password" id="password" name="password"></textarea>
    </p>
   {/* <button onClick={props.handleClick}>Next</button> */}
   <button onClick={props.handleClick}>Next</button>
</form>
);

var FormTwo = (props) => (
  <form  id="formTwo" method='POST'>
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


var FormThree = (props) => (
  <form id="formThree" method='POST'>
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

var Checkout = (props) => (
  <button onClick={props.handleClick}>Check Out</button>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);