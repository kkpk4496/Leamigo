import {Component} from 'react'
import {Container, MainHead, Input, Button} from './styledComponents'

import './App.css'

const dummyData = [
  {id: 1, name: 'Car', type: 'Sedan'},
  {id: 2, name: 'Car', type: 'SUV'},
  {id: 3, name: 'Van', type: 'Minivan'},
  {id: 4, name: 'Bus', type: 'Coach'},
]

class App extends Component {
  state = {jsonData: [], from: '', to: '', selectedDate: ''}

  getData = async () => {
    const apiUrl = dummyData
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({jsonData: fetchedData})
    }
  }

  dateSelect = event => {
    this.setState({selectedDate: event.target.value})
  }

  fromAddress = event => {
    this.setState({from: event.target.value})
  }

  toAddress = event => {
    this.setState({to: event.target.value})
  }

  onClickSearch = () => {
    this.getData()
  }

  render() {
    const {selectedDate, from, to, jsonData} = this.state
    console.log(jsonData)
    return (
      <Container>
        <MainHead>Airport Transfer Booking App</MainHead>
        <Input
          type="search"
          value={from}
          placeholder="From"
          onChange={this.fromAddress}
        />
        <Input
          type="search"
          value={to}
          placeholder="To"
          onChange={this.toAddress}
        />
        <Input type="date" value={selectedDate} onChange={this.dateSelect} />
        <Button type="button" onClick={this.onClickSearch}>
          Search
        </Button>
        <ul className="lists col-12">
          {jsonData.map(vehicle => (
            <li key={vehicle.id}>
              {vehicle.name} - {vehicle.type}
            </li>
          ))}
        </ul>
      </Container>
    )
  }
}

export default App
