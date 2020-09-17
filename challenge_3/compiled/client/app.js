
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
    // this.handlePurchase = this.handlePurchase.bind(this);
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
    document.getElementById('formOne').submit();
  }

  handleSecondNext(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: true
    });
    document.getElementById('formTwo').submit();
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      formOne: false,
      formTwo: false,
      formThree: false,
      allFormsCompleted: true
    });
    document.getElementById('formThree').submit();
  }

  // handlePurchase(event) {
  //   event.preventDefault();
  //   this.setState({
  //     allFormsCompleted: false
  //   })
  // }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.formOne ? React.createElement(FormOne, { handleClick: this.handleFirstNext }) : this.state.formTwo ? React.createElement(FormTwo, { handleClick: this.handleSecondNext }) : this.state.formThree ? React.createElement(FormThree, { handleClick: this.handleLastClick }) : this.state.allFormsCompleted ? React.createElement(Confirmation, { handleClick: this.handlePurchase }) : React.createElement(Checkout, { handleClick: this.handleCheckOut })
    );
  }
}

//need to make the next button also post a request
//sending a post request
//now need to just see if when I respond, I go to the correct page
//goes to the correct page and sends a post request
var FormOne = props => React.createElement(
  'form',
  { method: 'POST', id: 'formOne', onSubmit: props.handleClick },
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Name:'
    ),
    React.createElement('input', { type: 'text', id: 'name', name: 'name' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'E-mail:'
    ),
    React.createElement('input', { type: 'email', id: 'mail', name: 'email' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Password:'
    ),
    React.createElement('textarea', { type: 'password', id: 'password', name: 'password' })
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Next'
  )
);

var FormTwo = props => React.createElement(
  'form',
  { id: 'formTwo', method: 'POST' },
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Line One:'
    ),
    React.createElement('input', { type: 'text', id: 'lineOne', name: 'lineOne' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Line Two:'
    ),
    React.createElement('input', { type: 'text', id: 'lineTwo', name: 'lineTwo' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'City:'
    ),
    React.createElement('input', { type: 'text', id: 'city', name: 'city' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'State:'
    ),
    React.createElement('textarea', { type: 'text', id: 'state', name: 'state' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Zip Code:'
    ),
    React.createElement('textarea', { type: 'number', id: 'zipcode', name: 'zipcode' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Phone Number:'
    ),
    React.createElement('textarea', { type: 'tel', id: 'state', name: 'state' })
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Next'
  )
);

var FormThree = props => React.createElement(
  'form',
  { id: 'formThree', method: 'POST' },
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Credit Card Number:'
    ),
    React.createElement('input', { type: 'number', id: 'ccNumber', name: 'ccNumber' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Expiration Date:'
    ),
    React.createElement('input', { type: 'text', id: 'expiration', name: 'expiration' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'CCV:'
    ),
    React.createElement('input', { type: 'number', id: 'ccv', name: 'ccv' })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Billing Zip Code:'
    ),
    React.createElement('textarea', { type: 'number', id: 'billingzip', name: 'billingzip' })
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Next'
  )
);

var Confirmation = props => React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'All form Data / User data from the db should be here'
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Purchase'
  )
);

var Checkout = props => React.createElement(
  'button',
  { onClick: props.handleClick },
  'Check Out'
);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybU9uZSIsImZvcm1Ud28iLCJmb3JtVGhyZWUiLCJhbGxGb3Jtc0NvbXBsZXRlZCIsImhhbmRsZUNoZWNrT3V0IiwiYmluZCIsImhhbmRsZUZpcnN0TmV4dCIsImhhbmRsZVNlY29uZE5leHQiLCJoYW5kbGVMYXN0Q2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0IiwicmVuZGVyIiwiaGFuZGxlUHVyY2hhc2UiLCJGb3JtT25lIiwiaGFuZGxlQ2xpY2siLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiQ29uZmlybWF0aW9uIiwiQ2hlY2tvdXQiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLEtBREU7QUFFWEMsZUFBUyxLQUZFO0FBR1hDLGlCQUFXLEtBSEE7QUFJWEMseUJBQW1CO0FBSlIsS0FBYjtBQU1BLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJELElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsU0FBS0UsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0csZUFBTCxHQUF3QixLQUFLQSxlQUFMLENBQXFCSCxJQUFyQixDQUEwQixJQUExQixDQUF4QjtBQUNBO0FBQ0Q7O0FBRURE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QWFFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEQTtBQUVBLHNDQUFVLE1BQUssUUFBZixFQUF3QixJQUFHLFlBQTNCLEVBQXdDLE1BQUssWUFBN0M7QUFGQSxHQWJGO0FBaUJFO0FBQUE7QUFBQSxNQUFRLFNBQVNBLE1BQU1vQixXQUF2QjtBQUFBO0FBQUE7QUFqQkYsQ0FERjs7QUFzQkEsSUFBSUcsZUFBZ0J2QixLQUFELElBQ2pCO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FEQTtBQUVBO0FBQUE7QUFBQSxNQUFRLFNBQVNBLE1BQU1vQixXQUF2QjtBQUFBO0FBQUE7QUFGQSxDQURGOztBQU9BLElBQUlJLFdBQVl4QixLQUFELElBQ2I7QUFBQTtBQUFBLElBQVEsU0FBU0EsTUFBTW9CLFdBQXZCO0FBQUE7QUFBQSxDQURGOztBQUlBSyxTQUFTUixNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVILFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vdGltZSB0byBtYWtlIGNvbXBvbmVuZXRzIGZvciB0aGUgYXBwXG4vL21ha2Ugb25lIGdpYW50IGFwcCBjbGFzcyB0aGF0IHdpbGwgcmV0dXJuIGV2ZXJ5dGhpbmcgZm9yIHRoZSBmaW5hbCByZW5kZXJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICAgYWxsRm9ybXNDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hlY2tPdXQgPSB0aGlzLmhhbmRsZUNoZWNrT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaXJzdE5leHQgPSB0aGlzLmhhbmRsZUZpcnN0TmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2Vjb25kTmV4dCA9IHRoaXMuaGFuZGxlU2Vjb25kTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlTGFzdENsaWNrID0gIHRoaXMuaGFuZGxlTGFzdENsaWNrLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVQdXJjaGFzZSA9IHRoaXMuaGFuZGxlUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoZWNrT3V0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlRmlyc3ROZXh0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgZm9ybVR3bzogdHJ1ZVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1PbmUnKS5zdWJtaXQoKTtcbiAgfVxuXG4gIGhhbmRsZVNlY29uZE5leHQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybU9uZTogZmFsc2UsXG4gICAgICBmb3JtVHdvOiBmYWxzZSxcbiAgICAgIGZvcm1UaHJlZTogdHJ1ZVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Ud28nKS5zdWJtaXQoKTtcbiAgfVxuXG4gIGhhbmRsZUxhc3RDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmb3JtT25lOiBmYWxzZSxcbiAgICAgIGZvcm1Ud286IGZhbHNlLFxuICAgICAgZm9ybVRocmVlOiBmYWxzZSxcbiAgICAgIGFsbEZvcm1zQ29tcGxldGVkOiB0cnVlXG4gICAgfSlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRocmVlJykuc3VibWl0KCk7XG4gIH1cblxuICAvLyBoYW5kbGVQdXJjaGFzZShldmVudCkge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBhbGxGb3Jtc0NvbXBsZXRlZDogZmFsc2VcbiAgLy8gICB9KVxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtT25lXG4gICAgICAgID8gPEZvcm1PbmUgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlRmlyc3ROZXh0fS8+XG4gICAgICAgIDogdGhpcy5zdGF0ZS5mb3JtVHdvXG4gICAgICAgID8gPEZvcm1Ud28gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlU2Vjb25kTmV4dH0vPlxuICAgICAgICA6IHRoaXMuc3RhdGUuZm9ybVRocmVlXG4gICAgICAgID8gPEZvcm1UaHJlZSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVMYXN0Q2xpY2t9Lz5cbiAgICAgICAgOiB0aGlzLnN0YXRlLmFsbEZvcm1zQ29tcGxldGVkXG4gICAgICAgID8gPENvbmZpcm1hdGlvbiBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVQdXJjaGFzZX0vPlxuICAgICAgICA6IDxDaGVja291dCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDaGVja091dH0vPn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vL25lZWQgdG8gbWFrZSB0aGUgbmV4dCBidXR0b24gYWxzbyBwb3N0IGEgcmVxdWVzdFxuLy9zZW5kaW5nIGEgcG9zdCByZXF1ZXN0XG4vL25vdyBuZWVkIHRvIGp1c3Qgc2VlIGlmIHdoZW4gSSByZXNwb25kLCBJIGdvIHRvIHRoZSBjb3JyZWN0IHBhZ2Vcbi8vZ29lcyB0byB0aGUgY29ycmVjdCBwYWdlIGFuZCBzZW5kcyBhIHBvc3QgcmVxdWVzdFxudmFyIEZvcm1PbmUgPSAocHJvcHMpID0+IChcbiAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGlkPVwiZm9ybU9uZVwiIG9uU3VibWl0PXtwcm9wcy5oYW5kbGVDbGlja30+XG4gICAgPHA+XG4gICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiPjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5FLW1haWw6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJtYWlsXCIgbmFtZT1cImVtYWlsXCI+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIj48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+ICovfVxuICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TmV4dDwvYnV0dG9uPlxuPC9mb3JtPlxuKTtcblxudmFyIEZvcm1Ud28gPSAocHJvcHMpID0+IChcbiAgPGZvcm0gIGlkPVwiZm9ybVR3b1wiIG1ldGhvZD0nUE9TVCc+XG4gICAgPHA+XG4gICAgPGxhYmVsPkxpbmUgT25lOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaW5lT25lXCIgbmFtZT1cImxpbmVPbmVcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+TGluZSBUd286PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxpbmVUd29cIiBuYW1lPVwibGluZVR3b1wiPjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5DaXR5OjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgbmFtZT1cImNpdHlcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+U3RhdGU6PC9sYWJlbD5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCI+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlppcCBDb2RlOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJudW1iZXJcIiBpZD1cInppcGNvZGVcIiBuYW1lPVwiemlwY29kZVwiPjwvdGV4dGFyZWE+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRlbFwiIGlkPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIj48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG48L2Zvcm0+XG4pO1xuXG5cbnZhciBGb3JtVGhyZWUgPSAocHJvcHMpID0+IChcbiAgPGZvcm0gaWQ9XCJmb3JtVGhyZWVcIiBtZXRob2Q9J1BPU1QnPlxuICAgIDxwPlxuICAgIDxsYWJlbD5DcmVkaXQgQ2FyZCBOdW1iZXI6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiY2NOdW1iZXJcIiBuYW1lPVwiY2NOdW1iZXJcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+RXhwaXJhdGlvbiBEYXRlOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJleHBpcmF0aW9uXCIgbmFtZT1cImV4cGlyYXRpb25cIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+Q0NWOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImNjdlwiIG5hbWU9XCJjY3ZcIj48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+QmlsbGluZyBaaXAgQ29kZTo8L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwibnVtYmVyXCIgaWQ9XCJiaWxsaW5nemlwXCIgbmFtZT1cImJpbGxpbmd6aXBcIj48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG4gIDwvZm9ybT5cbik7XG5cbnZhciBDb25maXJtYXRpb24gPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgPHA+QWxsIGZvcm0gRGF0YSAvIFVzZXIgZGF0YSBmcm9tIHRoZSBkYiBzaG91bGQgYmUgaGVyZTwvcD5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+UHVyY2hhc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG52YXIgQ2hlY2tvdXQgPSAocHJvcHMpID0+IChcbiAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+Q2hlY2sgT3V0PC9idXR0b24+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXX0=