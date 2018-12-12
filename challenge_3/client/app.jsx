class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h2>welcome to your virtual shopping experience</h2>
        <Checkout />
        <F1 />
        <F2/>
        <F3/>
        <Confirmation/>
      </div>
    )
  }
}

const Checkout = props => {
  return (
    <button>checkout</button>
  )
}

const F1 = props => {
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

const F2 = props => {
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
const F3 = props => {
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
const Confirmation = props => {
  return (
    <div>
      <h2>confirmation </h2>
      <button>purchase</button>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("app"));