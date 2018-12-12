class App extends React.Component {
  render() {
    return (
      <div>
        <h2>welcome to your virtual shopping experience</h2>
        <Checkout />
      </div>
    )
  }
}

const Checkout = props => {
  return (
    <button>Checkout</button>
  )
}



ReactDOM.render(<App/>, document.getElementById("app"));