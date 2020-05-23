import React, {Component} from 'react';
import {GeneralList} from './GeneralList'; 
import {SortedList} from './SortedList'; 

export default class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      // counter: 0
      names: ['Zoe', 'Bob', 'Alice', 'Dora', 'Joe']
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <GeneralList
              list={this.state.names}
              theme="primary"
            />
          </div>

          <div className="col-6">
            <SortedList
              list={this.state.names}
            />
          </div>
        </div>
      </div>
    )
  }
}
