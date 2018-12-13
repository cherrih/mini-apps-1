class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isF1: false,
      isF2: false,
      isF3: false,
      isConfirmation: false
    }
    this.handleClickCheckout = this.handleClickCheckout.bind(this);
    this.handleSubmitF1 = this.handleSubmitF1.bind(this);
    this.handleSubmitF2 = this.handleSubmitF2.bind(this);
    this.handleSubmitF3 = this.handleSubmitF3.bind(this);
    this.handleClickConfirmation = this.handleClickConfirmation.bind(this);
  }

  handleClickCheckout(event) {
    event.preventDefault();
    this.setState({isHome: false});
    this.setState({isF1: true});
  }
  handleSubmitF1(event) {
    event.preventDefault();
    this.setState({isF1: false});
    this.setState({isF2: true});
  }
  handleSubmitF2(event) {
    event.preventDefault();
    this.setState({isF2: false});
    this.setState({isF3: true});
  }
  handleSubmitF3(event) {
    event.preventDefault();
    this.setState({isF3: false});
    this.setState({isConfirmation: true});
  }
  handleClickConfirmation(event) {
    event.preventDefault();
    this.setState({isConfirmation: false});
    this.setState({isHome: true});
  }

  render() {
    return (
      <div>
        <h2>welcome to your virtual shopping experience</h2>
        <Checkout isHome={this.state.isHome} handleClick={this.handleClickCheckout}/>
        <F1 isF1={this.state.isF1} handleSubmit={this.handleSubmitF1}/>
        <F2 isF2={this.state.isF2} handleSubmit={this.handleSubmitF2}/>
        <F3 isF3={this.state.isF3} handleSubmit={this.handleSubmitF3}/>
        <Confirmation isConfirmation={this.state.isConfirmation} handleClick={this.handleClickConfirmation}/>
      </div>
    )
  }
}

const Checkout = props => {
  if (props.isHome) {
    return (
      <button onClick={props.handleClick} id="hello">checkout</button>
    )
  }
  return null;
}

const F1 = props => {
  //ajax
  if (props.isF1) {
    return (
      <div>
        <h3>please create an account</h3>
        <form onSubmit={props.handleSubmit}>
          <label>
            name: 
            <input type="text" name="name" />
          </label>
          <label>
            email: 
            <input type="email" name="email"/>
          </label>
          <label>
            password:
            <input type="password" name="password"/>
          </label>
          <input type="submit" value="next" />
        </form>
      </div>
    )
  }
  return null;
}

const F2 = props => {
  if (props.isF2) {
    return (
      <div>
        <h3>where shall we send your stuff</h3>
        <form onSubmit={props.handleSubmit}>
          <label>
            ship to
            <input type="text" name="addressline1" placeholder="address line 1"/>
            <input type="text" name="addressline2" placeholder="address line 2"/>
            <input type="text" name="addresscity" placeholder="city"/>
            <input type="text" name="addressstate" placeholder="state"/>
            <input type="number" name="addresszip" placeholder="zip"/>
            phone number
            <input type="number" name="phonenumber" placeholder="415-CALLMEE"/>
          </label>
          <input type="submit" value="next" />
        </form>
      </div>
    )
  }
  return null;
}
const F3 = props => {
  if (props.isF3) {
    return (
      <div>
        <h3>this is where you give us funds</h3>
        <form onSubmit={props.handleSubmit}>
          <label>
            credit card #
            <input type="number" name="creditcardnum" placeholder=""/>
            expiry date
            <input type="month" name="expiry"/>
            CVV
            <input type="number" name="cvv"/>
            billing zip code
            <input type="number" name="billingzip"/>
          </label>
          <input type="submit" value="next" />
        </form>
      </div>
    )
  }
  return null;
}
const Confirmation = props => {
  if (props.isConfirmation) {
    return (
      <div>
        <h3>does this look right?</h3>
        <button onClick={props.handleClick}>yup, purchase away!</button>
      </div>
    )
  }
  return null;
}
ReactDOM.render(<App/>, document.getElementById("app"));