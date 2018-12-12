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
  }

  render() {
    return (
      <div>
        <h2>welcome to your virtual shopping experience</h2>
        <Checkout isHome={this.state.isHome} handleClick={this.handleClickCheckout}/>
        <F1 isF1={this.state.isF1}/>
        <F2 isF2={this.state.isF2}/>
        <F3 isF3={this.state.isF3}/>
        <Confirmation isConfirmation={this.state.isConfirmation} />
      </div>
    )
  }

  handleClickCheckout() {
    event.preventDefault();
    this.setState({isHome: false})
    this.setState({isF1: true})
  }



}

const Checkout = props => {
  if (props.isHome) {
    return (
      <button onClick={props.handleClick}>checkout</button>
    )
  }
  return null;
}

const F1 = props => {
  if (props.isF1) {
    return (
      <form>
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
    )
  }
  return null;
}

const F2 = props => {
  if (props.isF2) {
    return (
      <form>
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
    )
  }
  return null;
}
const F3 = props => {
  if (props.isF3) {
    return (
      <form>
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
    )
  }
  return null;
}
const Confirmation = props => {
  if (props.Confirmation) {
    return (
      <div>
        <h2>confirmation </h2>
        <button>purchase</button>
      </div>
    )
  }
  return null;
}
ReactDOM.render(<App/>, document.getElementById("app"));