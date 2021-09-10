import React, { Component } from "react";
import data from "./data";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      randomText: [],
    };
  }

  onChange = (event) => {
    this.setState({ count: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(this.state.count);
    if (this.state.count <= 0) {
      amount = 1;
    }
    if (this.state.count > 8) {
      amount = 8;
    }
    this.setState({ randomText: data.slice(0, amount) });
  };
  render() {
    return (
      <Container maxWidth="lg" data-test="component-app">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h4"
              gutterBottom
              color="secondary"
              data-test="display-title"
            >
              Lorem Ipsum Generator
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={10}>
            <Box mx="auto">
              <form onSubmit={this.onSubmit}>
                <TextField
                  type="number"
                  name="amount"
                  id="amount"
                  label="paragraphs:"
                  variant="outlined"
                  value={this.state.count}
                  data-test="onChange-value"
                  onChange={(event) => this.onChange(event)}
                  fullWidth
                />
                <Box mt={5}>
                  <Button type="submit" color="primary" variant="contained">
                    Generate
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={10}>
            {this.state.randomText.map((text, index) => {
              return <Typography key={index}>{text}</Typography>;
            })}
          </Grid>
        </Grid>
      </Container>
    );
  }
}
