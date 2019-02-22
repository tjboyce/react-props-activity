import React, { Component } from 'react';
import Header from '../Header/Header'

class App extends Component {
  state = {
      enterNumber: '',
      total: 0,
      numberList: [],
  }



  handleChangeFor = (event) => {
    console.log('handleChangeFor is running with:', event.target.value);
    
    this.setState({
      enterNumber: event.target.value,

    })
  }

  handleClickUp = () => {
   console.log('up clicked');
    this.setState({
      total: this.state.total + Number(this.state.enterNumber),
      enterNumber: '',
    })
    
  }
  handleClickDown = () => {
    console.log('down clicked');
    this.setState({
      total: this.state.total - Number(this.state.enterNumber),
      enterNumber: '',
    })

  }
  handleClickSave = () =>{
    this.setState({
      numberList: [...this.state.numberList, this.state.total], 
    })
  }

  render() {
    return (
      <>
        <Header />
        {/* <EnterNumber />
        <CurrentTotal />
        <History /> */}
        
        <div>
          <button onClick ={this.handleClickUp}>UP</button>
          <input
            placeholder="Enter Number"
            type="text"
            onChange={this.handleChangeFor}
            value={this.state.enterNumber}
        />

          <button onClick ={this.handleClickDown}>DOWN</button>
        </div>

        <div>
        {this.state.total}
        </div>
        <div>
        <button onClick ={this.handleClickSave}>SAVE</button>
        </div>
        <p>Click save above to save the current total in the history</p>

        <h2>History</h2>
        <ul>
        {this.state.numberList.map(numbers=> <li key = {numbers}>{numbers}</li> )}
        </ul>

      </>
    );
  }
}

export default App;
