
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
    };
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
      }).then(response => {
        this.setState({
          finalData: response.data
        });
      }).catch(error => console.log(error));
    }
    this.setState(state => {
      return { form: state.form === 4 ? 0 : state.form + 1 };
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.state.form === 1 ? React.createElement(FormOne, { handleClick: this.handleClick, handleChange: this.handleChange, input: this.state }) : this.state.form === 2 ? React.createElement(FormTwo, { handleClick: this.handleClick, handleChange: this.handleChange, input: this.state }) : this.state.form === 3 ? React.createElement(FormThree, { handleClick: this.handleClick, handleChange: this.handleChange, input: this.state }) : this.state.finalData ? React.createElement(Confirmation, { handleClick: this.handleClick, handleChange: this.handleChange, finalDataFields: Object.keys(this.state.finalData), finalDataValues: Object.values(this.state.finalData) }) : React.createElement(Checkout, { handleClick: this.handleClick })
    );
  }
}

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
    React.createElement('input', { type: 'text', id: 'name', name: 'name', value: props.input.name, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'E-mail:'
    ),
    React.createElement('input', { type: 'email', id: 'mail', name: 'email', value: props.input.email, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Password:'
    ),
    React.createElement('textarea', { type: 'password', id: 'password', name: 'password', value: props.input.password, onChange: props.handleChange })
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
    React.createElement('input', { type: 'text', id: 'lineOne', name: 'lineOne', value: props.input.lineOne, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Line Two:'
    ),
    React.createElement('input', { type: 'text', id: 'lineTwo', name: 'lineTwo', value: props.input.lineTwo, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'City:'
    ),
    React.createElement('input', { type: 'text', id: 'city', name: 'city', value: props.input.city, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'State:'
    ),
    React.createElement('textarea', { type: 'text', id: 'state', name: 'state', value: props.input.state, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Zip Code:'
    ),
    React.createElement('textarea', { type: 'text', id: 'zipcode', name: 'zipcode', value: props.input.zipcode, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Phone Number:'
    ),
    React.createElement('textarea', { type: 'text', id: 'phoneNumber', name: 'phoneNumber', value: props.input.phoneNumber, onChange: props.handleChange })
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
    React.createElement('input', { type: 'text', id: 'creditcard', name: 'creditcard', value: props.input.creditcard, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Expiration Date:'
    ),
    React.createElement('input', { type: 'text', id: 'expiration', name: 'expiration', value: props.input.expiration, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'CCV:'
    ),
    React.createElement('input', { type: 'text', id: 'ccv', name: 'ccv', value: props.input.ccv, onChange: props.handleChange })
  ),
  React.createElement(
    'p',
    null,
    React.createElement(
      'label',
      null,
      'Billing Zip Code:'
    ),
    React.createElement('textarea', { type: 'text', id: 'billingzip', name: 'billingzip', value: props.input.billingzip, onChange: props.handleChange })
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Next'
  )
);

var WaitForConfirmation = props => React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Compiling All Your Data...'
  ),
  React.createElement(
    'button',
    { onClick: props.handleClick },
    'Continue'
  )
);

var Confirmation = ({ finalDataValues, finalDataFields, handleClick }) => React.createElement(
  'div',
  null,
  React.createElement(
    'ul',
    null,
    finalDataValues.map(value => {
      if (value) {
        return React.createElement(
          'li',
          { key: value },
          value
        );
      }
    })
  ),
  React.createElement(
    'button',
    { onClick: handleClick },
    'Purchase'
  )
);

var Checkout = props => React.createElement(
  'button',
  { onClick: props.handleClick },
  'Check Out'
);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGluZU9uZSIsImxpbmVUd28iLCJjaXR5IiwiemlwY29kZSIsInBob25lTnVtYmVyIiwiY3JlZGl0Y2FyZCIsImV4cGlyYXRpb24iLCJjY3YiLCJiaWxsaW5nemlwIiwiZmluYWxEYXRhIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsbFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsInNoaWZ0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciIsImtleXMiLCJGb3JtT25lIiwiaW5wdXQiLCJGb3JtVHdvIiwiRm9ybVRocmVlIiwiV2FpdEZvckNvbmZpcm1hdGlvbiIsIkNvbmZpcm1hdGlvbiIsImZpbmFsRGF0YVZhbHVlcyIsImZpbmFsRGF0YUZpZWxkcyIsIm1hcCIsIkNoZWNrb3V0IiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxDQURLO0FBRVhDLFlBQU0sRUFGSztBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxlQUFTLEVBTEU7QUFNWEMsZUFBUyxFQU5FO0FBT1hDLFlBQU0sRUFQSztBQVFYUCxhQUFPLEVBUkk7QUFTWFEs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QkUsR0FBaEIsQ0FBcUJYLEtBQUQsSUFBVztBQUFDLFVBQUlBLEtBQUosRUFBVztBQUFFLGVBQU87QUFBQTtBQUFBLFlBQUksS0FBS0EsS0FBVDtBQUFpQkE7QUFBakIsU0FBUDtBQUFvQztBQUFDLEtBQWxGO0FBREgsR0FEQTtBQUlBO0FBQUE7QUFBQSxNQUFRLFNBQVNwQixXQUFqQjtBQUFBO0FBQUE7QUFKQSxDQURGOztBQVNBLElBQUlnQyxXQUFZaEQsS0FBRCxJQUNiO0FBQUE7QUFBQSxJQUFRLFNBQVNBLE1BQU1nQixXQUF2QjtBQUFBO0FBQUEsQ0FERjs7QUFJQWlDLFNBQVNaLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRWEsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy90aW1lIHRvIG1ha2UgY29tcG9uZW5ldHMgZm9yIHRoZSBhcHBcbi8vbWFrZSBvbmUgZ2lhbnQgYXBwIGNsYXNzIHRoYXQgd2lsbCByZXR1cm4gZXZlcnl0aGluZyBmb3IgdGhlIGZpbmFsIHJlbmRlclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IDAsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGxpbmVPbmU6ICcnLFxuICAgICAgbGluZVR3bzogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcGNvZGU6ICcnLFxuICAgICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgICAgY3JlZGl0Y2FyZDogJycsXG4gICAgICBleHBpcmF0aW9uOiAnJyxcbiAgICAgIGNjdjogJycsXG4gICAgICBiaWxsaW5nemlwOiAnJyxcbiAgICAgIGZpbmFsRGF0YTogbnVsbFxuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5mb3JtID09PSAzKSB7XG4gICAgICB2YXIgYWxsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlKTtcbiAgICAgIGFsbFZhbHVlcy5zaGlmdCgpO1xuICAgICAgYXhpb3MucG9zdCgnLycsIHtcbiAgICAgICAgdmFsdWVzOiBhbGxWYWx1ZXNcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmluYWxEYXRhOiByZXNwb25zZS5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7Zm9ybTogc3RhdGUuZm9ybSA9PT0gNCA/IDAgOiBzdGF0ZS5mb3JtICsgMX1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5mb3JtID09PSAxXG4gICAgICAgID8gPEZvcm1PbmUgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0PXt0aGlzLnN0YXRlfS8+XG4gICAgICAgIDogdGhpcy5zdGF0ZS5mb3JtID09PSAyXG4gICAgICAgID8gPEZvcm1Ud28gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlucHV0PXt0aGlzLnN0YXRlfS8+XG4gICAgICAgIDogdGhpcy5zdGF0ZS5mb3JtID09PSAzXG4gICAgICAgID8gPEZvcm1UaHJlZSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaW5wdXQ9e3RoaXMuc3RhdGV9Lz5cbiAgICAgICAgOiB0aGlzLnN0YXRlLmZpbmFsRGF0YVxuICAgICAgICA/IDxDb25maXJtYXRpb24gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGZpbmFsRGF0YUZpZWxkcz17T2JqZWN0LmtleXModGhpcy5zdGF0ZS5maW5hbERhdGEpfSBmaW5hbERhdGFWYWx1ZXM9e09iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5maW5hbERhdGEpfS8+XG4gICAgICAgIDogPENoZWNrb3V0IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfS8+fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbnZhciBGb3JtT25lID0gKHByb3BzKSA9PiAoXG4gIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBpZD1cImZvcm1PbmVcIiBvblN1Ym1pdD17cHJvcHMuaGFuZGxlQ2xpY2t9PlxuICAgIDxwPlxuICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17cHJvcHMuaW5wdXQubmFtZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPkUtbWFpbDo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cIm1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17cHJvcHMuaW5wdXQuZW1haWx9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Byb3BzLmlucHV0LnBhc3N3b3JkfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9Pk5leHQ8L2J1dHRvbj5cbjwvZm9ybT5cbik7XG5cbnZhciBGb3JtVHdvID0gKHByb3BzKSA9PiAoXG4gIDxmb3JtICBpZD1cImZvcm1Ud29cIiBtZXRob2Q9J1BPU1QnPlxuICAgIDxwPlxuICAgIDxsYWJlbD5MaW5lIE9uZTo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGluZU9uZVwiIG5hbWU9XCJsaW5lT25lXCIgdmFsdWU9e3Byb3BzLmlucHV0LmxpbmVPbmV9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5MaW5lIFR3bzo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGluZVR3b1wiIG5hbWU9XCJsaW5lVHdvXCIgdmFsdWU9e3Byb3BzLmlucHV0LmxpbmVUd299IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5DaXR5OjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgbmFtZT1cImNpdHlcIiB2YWx1ZT17cHJvcHMuaW5wdXQuY2l0eX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlN0YXRlOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHZhbHVlPXtwcm9wcy5pbnB1dC5zdGF0ZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlppcCBDb2RlOjwvbGFiZWw+XG4gICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ6aXBjb2RlXCIgbmFtZT1cInppcGNvZGVcIiB2YWx1ZT17cHJvcHMuaW5wdXQuemlwY29kZX0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVOdW1iZXJcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17cHJvcHMuaW5wdXQucGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvdGV4dGFyZWE+XG4gICAgPC9wPlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9Pk5leHQ8L2J1dHRvbj5cbjwvZm9ybT5cbik7XG5cblxudmFyIEZvcm1UaHJlZSA9IChwcm9wcykgPT4gKFxuICA8Zm9ybSBpZD1cImZvcm1UaHJlZVwiIG1ldGhvZD0nUE9TVCc+XG4gICAgPHA+XG4gICAgPGxhYmVsPkNyZWRpdCBDYXJkIE51bWJlcjo8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY3JlZGl0Y2FyZFwiIG5hbWU9XCJjcmVkaXRjYXJkXCIgdmFsdWU9e3Byb3BzLmlucHV0LmNyZWRpdGNhcmR9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgIDxsYWJlbD5FeHBpcmF0aW9uIERhdGU6PC9sYWJlbD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImV4cGlyYXRpb25cIiBuYW1lPVwiZXhwaXJhdGlvblwiIHZhbHVlPXtwcm9wcy5pbnB1dC5leHBpcmF0aW9ufSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L2lucHV0PlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICA8bGFiZWw+Q0NWOjwvbGFiZWw+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjY3ZcIiBuYW1lPVwiY2N2XCIgdmFsdWU9e3Byb3BzLmlucHV0LmNjdn0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+PC9pbnB1dD5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgPGxhYmVsPkJpbGxpbmcgWmlwIENvZGU6PC9sYWJlbD5cbiAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBpZD1cImJpbGxpbmd6aXBcIiBuYW1lPVwiYmlsbGluZ3ppcFwiIHZhbHVlPXtwcm9wcy5pbnB1dC5iaWxsaW5nemlwfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT48L3RleHRhcmVhPlxuICAgIDwvcD5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5OZXh0PC9idXR0b24+XG4gIDwvZm9ybT5cbik7XG5cbnZhciBXYWl0Rm9yQ29uZmlybWF0aW9uID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgxPkNvbXBpbGluZyBBbGwgWW91ciBEYXRhLi4uPC9oMT5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5Db250aW51ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbnZhciBDb25maXJtYXRpb24gPSAoe2ZpbmFsRGF0YVZhbHVlcywgZmluYWxEYXRhRmllbGRzLCBoYW5kbGVDbGlja30pID0+IChcbiAgPGRpdj5cbiAgPHVsPlxuICAgIHtmaW5hbERhdGFWYWx1ZXMubWFwKCh2YWx1ZSkgPT4ge2lmICh2YWx1ZSkgeyByZXR1cm4gPGxpIGtleT17dmFsdWV9Pnt2YWx1ZX08L2xpPn19KX1cbiAgPC91bD5cbiAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+UHVyY2hhc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG52YXIgQ2hlY2tvdXQgPSAocHJvcHMpID0+IChcbiAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+Q2hlY2sgT3V0PC9idXR0b24+XG4pO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXX0=