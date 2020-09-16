
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
    };
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleFirstNext = this.handleFirstNext.bind(this);
    this.handleSecondNext = this.handleSecondNext.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckOut(event) {
    event.preventDefault();
    this.setState({
      formOne: true
    });
  }

  handleFirstNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: true
    });
  }

  handleSecondNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: true
    });
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: false,
      allFormsCompleted: true
    });
  }

  handlePurchase(event) {
    event.preventDefault();
    this.setState({
      allFormsCompleted: false
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      this.state.formOne ? React.createElement(FormOne, { handleClick: this.handleFirstNext }) : this.state.formTwo ? React.createElement(FormTwo, { handleClick: this.handleSecondNext }) : this.state.formThree ? React.createElement(FormThree, { handleClick: this.handleLastClick }) : this.state.allFormsCompleted ? React.createElement(Confirmation, { handleClick: this.handlePurchase }) : React.createElement(Checkout, { handleClick: this.handleCheckOut })
    );
  }
}

var FormOne = props => React.createElement(
  "form",
  null,
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Name:"
    ),
    React.createElement("input", { type: "text", id: "name", name: "user_name" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "E-mail:"
    ),
    React.createElement("input", { type: "email", id: "mail", name: "user_email" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Password:"
    ),
    React.createElement("textarea", { type: "password", id: "password", name: "user_password" })
  ),
  React.createElement(
    "button",
    { onClick: props.handleClick },
    "Next"
  )
);

var FormTwo = props => React.createElement(
  "form",
  null,
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Line One:"
    ),
    React.createElement("input", { type: "text", id: "lineOne", name: "lineOne" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Line Two:"
    ),
    React.createElement("input", { type: "text", id: "lineTwo", name: "lineTwo" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "City:"
    ),
    React.createElement("input", { type: "text", id: "city", name: "city" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "State:"
    ),
    React.createElement("textarea", { type: "text", id: "state", name: "state" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Zip Code:"
    ),
    React.createElement("textarea", { type: "number", id: "zipcode", name: "zipcode" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Phone Number:"
    ),
    React.createElement("textarea", { type: "tel", id: "state", name: "state" })
  ),
  React.createElement(
    "button",
    { onClick: props.handleClick },
    "Next"
  )
);
var Checkout = props => React.createElement(
  "button",
  { onClick: props.handleClick },
  "Check Out"
);

var FormThree = props => React.createElement(
  "form",
  null,
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Credit Card Number:"
    ),
    React.createElement("input", { type: "number", id: "ccNumber", name: "ccNumber" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Expiration Date:"
    ),
    React.createElement("input", { type: "text", id: "expiration", name: "expiration" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "CCV:"
    ),
    React.createElement("input", { type: "number", id: "ccv", name: "ccv" })
  ),
  React.createElement(
    "p",
    null,
    React.createElement(
      "label",
      null,
      "Billing Zip Code:"
    ),
    React.createElement("textarea", { type: "number", id: "billingzip", name: "billingzip" })
  ),
  React.createElement(
    "button",
    { onClick: props.handleClick },
    "Next"
  )
);

var Confirmation = props => React.createElement(
  "div",
  null,
  React.createElement(
    "p",
    null,
    "All form Data / User data from the db should be here"
  ),
  React.createElement(
    "button",
    { onClick: props.handleClick },
    "Purchase"
  )
);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybU9uZSIsImZvcm1Ud28iLCJmb3JtVGhyZWUiLCJhbGxGb3Jtc0NvbXBsZXRlZCIsImhhbmRsZUNoZWNrT3V0IiwiYmluZCIsImhhbmRsZUZpcnN0TmV4dCIsImhhbmRsZVNlY29uZE5leHQiLCJoYW5kbGVMYXN0Q2xpY2siLCJoYW5kbGVQdXJjaGFzZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIkZvcm1PbmUiLCJoYW5kbGVDbGljayIsIkZvcm1Ud28iLCJDaGVja291dCIsIkZvcm1UaHJlZSIsIkNvbmZpcm1hdGlvbiIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLEtBREU7QUFFWEMsZUFBUyxLQUZFO0FBR1hDLGlCQUFXLEtBSEE7QUFJWEMseUJBQW1CO0FBSlIsS0FBYjtBQU1BLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBS0UsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0csZUFBTCxHQUF3QixLQUFLQSxlQUFMLENBQXFCSCxJQUFyQixDQUEwQixJQUExQixDQUF4QjtBQUNBLFNBQUtJLGNBQUwsR0FBc0IsS0FB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LEVBQXdDLE1BQUssWUFBN0M7QUFGQSxHQWJGO0FBaUJFO0FBQUE7QUFBQSxNQUFRLFNBQVNBLE1BQU1pQixXQUF2QjtBQUFBO0FBQUE7QUFqQkYsQ0FERjs7QUFzQkEsSUFBSUksZUFBZ0JyQixLQUFELElBQ2pCO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FEQTtBQUVBO0FBQUE7QUFBQSxNQUFRLFNBQVNBLE1BQU1pQixXQUF2QjtBQUFBO0FBQUE7QUFGQSxDQURGOztBQU9BSyxTQUFTUCxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVRLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vdGltZSB0byBtYWtlIGNvbXBvbmVuZXRzIGZvciB0aGUgYXBwXG4vL21ha2Ugb25lIGdpYW50IGFwcCBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGV2ZXJ5dGhpbmcgZm9yIHRoZSBmaW5hbCByZW5kZXJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICAgYWxsRm9ybXNDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hlY2tPdXQgPSB0aGlzLmhhbmRsZUNoZWNrT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaXJzdE5leHQgPSB0aGlzLmhhbmRsZUZpcnN0TmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2Vjb25kTmV4dCA9IHRoaXMuaGFuZGxlU2Vjb25kTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTGFzdENsaWNrID0gIHRoaXMuaGFuZGxlTGFzdENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVQdXJjaGFzZSA9IHRoaXMuaGFuZGxlUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrT3V0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRmlyc3ROZXh0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTZWNvbmROZXh0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlTGFzdENsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICAgYWxsRm9ybXNDb21wbGV0ZWQ6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUHVyY2hhc2UoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWxsRm9ybXNDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuZm9ybU9uZVxuICAgICAgICA/IDxGb3JtT25lIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUZpcnN0TmV4dH0vPlxuICAgICAgICA6IHRoaXMuc3RhdGUuZm9ybVR3b1xuICAgICAgICA/IDxGb3JtVHdvIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVNlY29uZE5leHR9Lz5cbiAgICAgICAgOiB0aGlzLnN0YXRlLmZvcm1UaHJlZVxuICAgICAgICA/IDxGb3JtVGhyZWUgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdENsaWNrfS8+XG4gICAgICAgIDogdGhpcy5zdGF0ZS5hbGxGb3Jtc0NvbXBsZXRlZFxuICAgICAgICA/IDxDb25maXJtYXRpb24gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlUHVyY2hhc2V9Lz5cbiAgICAgICAgOiA8Q2hlY2tvdXQgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2hlY2tPdXR9Lz59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxudmFyIEZvcm1PbmUgPSAocHJvcHMpID0+IChcbiAgPGZvcm0gPlxuICAgIDxwPlxuICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cInVzZXJfbmFtZVwiPjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5FLW1haWw6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJtYWlsXCIgbmFtZT1cInVzZXJfZW1haWxcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJ1c2VyX3Bhc3N3b3JkXCI+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dDwvYnV0dG9uPlxuPC9mb3JtPlxuKTtcblxudmFyIEZvcm1Ud28gPSAocHJvcHMpID0+IChcbiAgPGZvcm0gPlxuICAgIDxwPlxuICAgIDxsYWJlbD5MaW5lIE9uZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGluZU9uZVwiIG5hbWU9XCJsaW5lT25lXCI+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPkxpbmUgVHdvOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaW5lVHdvXCIgbmFtZT1cImxpbmVUd29cIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+Q2l0eTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCI+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiPjwvdGV4dGFyZWE+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5aaXAgQ29kZTo8L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ6aXBjb2RlXCIgbmFtZT1cInppcGNvZGVcIj48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZWxcIiBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCI+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dDwvYnV0dG9uPlxuPC9mb3JtPlxuKTtcbnZhciBDaGVja291dCA9IChwcm9wcykgPT4gKFxuICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5DaGVjayBPdXQ8L2J1dHRvbj5cbik7XG5cbnZhciBGb3JtVGhyZWUgPSAocHJvcHMpID0+IChcbiAgPGZvcm0gPlxuICAgIDxwPlxuICAgIDxsYWJlbD5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiY2NOdW1iZXJcIiBuYW1lPVwiY2NOdW1iZXJcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+RXhwaXJhdGlvbiBEYXRlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJleHBpcmF0aW9uXCIgbmFtZT1cImV4cGlyYXRpb25cIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+Q0NWOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImNjdlwiIG5hbWU9XCJjY3ZcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+QmlsbGluZyBaaXAgQ29kZTo8L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwibnVtYmVyXCIgaWQ9XCJiaWxsaW5nemlwXCIgbmFtZT1cImJpbGxpbmd6aXBcIj48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG48L2Zvcm0+XG4pO1xuXG52YXIgQ29uZmlybWF0aW9uID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gIDxwPkFsbCBmb3JtIERhdGEgLyBVc2VyIGRhdGEgZnJvbSB0aGUgZGIgc2hvdWxkIGJlIGhlcmU8L3A+XG4gIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PlB1cmNoYXNlPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19