import { TextField } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import logo from "/Users/rajeshbhat/cmpe-131-project/src/Pages/Signup/Signup.js";
class Signup extends Component {
  render() {
    return (
      <form className={Signup.root} noValidate autoComplete="off">
        <h1> Sign up for Gamer's Nation today!</h1>
        <h2>Enter your desired username:</h2>
        <Typography
          component="form"
          variant="body1"
          style={{ height: 50, width: "100%", position: "relative" }}
        >
          <TextField
            id="filled-basic"
            label="Desired Username"
            variant="filled"
            size="small"
          />
        </Typography>
        <h3>Enter your first and last name:</h3>
        <Typography
          component="form"
          variant="body1"
          style={{ height: 100, width: "100%", position: "relative" }}
        >
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            size="small"
          />
          <Typography
            component="form"
            variant="body1"
            style={{ height: 100, width: "100%", position: "relative" }}
          >
            <TextField
              id="filled-basic-2"
              label="Last Name"
              variant="filled"
              size="small"
            />
          </Typography>
        </Typography>
        <h4>Enter your email:</h4>
        <Typography
          component="form"
          variant="body1"
          style={{ height: 50, width: "100%", position: "relative" }}
        >
          <TextField
            id="filled-basic"
            label="username@email.com"
            variant="filled"
            size="small"
          />
        </Typography>
        <h5>Enter your desired password:</h5>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          size="small"
        />
      </form>
    );
  }
}

export default Signup;
