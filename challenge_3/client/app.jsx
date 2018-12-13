class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isF1: false,
      isF2: false,
      isF3: false,
      isConfirmation: false,
      
      name: '',
      email: '',
      password: '',
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      zip: '',
      phonenumber: '',
      creditcardnumber: '',
      expiry: '',
      cvv: '',
      billingzip: '',

    }
    this.handleClickCheckout = this.handleClickCheckout.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.value)
  }
  handleSubmitF1(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/info', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(()=>{
      this.setState({isF1: false});
      this.setState({isF2: true});
      console.log('Posted!');
    })
  }
  handleSubmitF2(event) {
    event.preventDefault();
    var data = {
      addressline1: this.state.addressline1,
      addressline2: this.state.addressline2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phonenumber: this.state.phonenumber
    }
    fetch('/info', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(data)
    })
    .then(()=>{
      this.setState({isF2: false});
      this.setState({isF3: true});
      console.log('Posted!');
    })
  }
  handleSubmitF3(event) {
    event.preventDefault();
    var data = {
      creditcardnumber: this.state.creditcardnumber,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingzip: this.state.billingzip
    }
    fetch('/info', {
      method: "POST",
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(data), 
    })
    .then(()=>{
      this.setState({isF3: false});
      this.setState({isConfirmation: true});
      console.log('Posted!')
    })
    
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
        <F1 isF1={this.state.isF1} handleSubmit={this.handleSubmitF1} handleChange={this.handleChange}/>
        <F2 isF2={this.state.isF2} handleSubmit={this.handleSubmitF2} handleChange={this.handleChange}/>
        <F3 isF3={this.state.isF3} handleSubmit={this.handleSubmitF3} handleChange={this.handleChange}/>
        <Confirmation isConfirmation={this.state.isConfirmation} handleClick={this.handleClickConfirmation}/>
      </div>
    )
  }
}

const Checkout = props => {
  if (props.isHome) {
    return (
      <button onClick={props.handleClick} >checkout</button>
    )
  }
  return null;
}

const F1 = props => {

  
  if (props.isF1) {
    return (
      <div>
        <h3>please create an account</h3>
        <form onSubmit={props.handleSubmit}>
          <label>
            name: 
            <input type="text" name="name" id="name" onChange={props.handleChange}/>
            email: 
            <input type="email" name="email" onChange={props.handleChange}/>
            password:
            <input type="password" name="password" onChange={props.handleChange}/>
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
            <input type="text" name="addressline1" placeholder="address line 1" onChange={props.handleChange}/>
            <input type="text" name="addressline2" placeholder="address line 2" onChange={props.handleChange}/>
            <input type="text" name="city" placeholder="city" onChange={props.handleChange}/>
            <input type="text" name="state" placeholder="state" onChange={props.handleChange}/>
            <input type="number" name="zip" placeholder="zip" onChange={props.handleChange}/>
            phone number
            <input type="number" name="phonenumber" placeholder="415-CALLMEE" onChange={props.handleChange}/>
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
            <input type="text" name="creditcardnumber" onChange={props.handleChange}/>
            expiry date
            <input type="month" name="expiry" onChange={props.handleChange}/>
            CVV
            <input type="text" name="cvv" onChange={props.handleChange}/>
            billing zip code
            <input type="number" name="billingzip" onChange={props.handleChange}/>
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