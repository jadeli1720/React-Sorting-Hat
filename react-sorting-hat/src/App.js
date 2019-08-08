import React, { Component } from "react";
// import './App.css';
import QuestionForm from "./components/QuestionForm";
import { Grid } from "semantic-ui-react";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Grid centered>
          <Grid.Column width={5} style={{ marginTop: "15px" }}>
            <QuestionForm />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
