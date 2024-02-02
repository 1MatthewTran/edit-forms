import React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Header from "./components/Header";

import "./App.css";

type errorsType = { [key: string]: string };
interface CallbackConfig {
  method: string;
  headers: string;
}
interface formType {
  id: number;
  name: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  term: string;
  renew_date: Date | null;
  per_store_amnt: number;
  per_tx_amnt: number;
  per_tx_prcnt: number;
  ach_bank_code: string;
  ach_routing: string;
  ach_account: string;
  enabled: boolean;
  start_date: Date | null;
  crm_id: string;
  callback_url: string;
  created_date: string | number | Date;
  callback_config: CallbackConfig,
  require_terminal: boolean;
  api_access: boolean;
  last_report_date: string | number | Date;
}

const regexName = /^[a-zA-Z ]+$/;
const regexAddress = /^[a-zA-Z0-9\s-]+$/;
const regexEmail = /\S+@\S+\.\S+/;
const regexState = /\b[A-Z]{2}\b/

function isError(errors: errorsType): boolean {
  for (const [key, value] of Object.entries(errors)) {
    if (value) {
      return true;
    }
  }
  return false;
}

function App() {
  document.title = "Edit Forms";
  const [form, setForm] = useState<formType>({
    id: 1,
    name: "Matthew Tran",
    contact: "Contact",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zip: "03134", // max 16
    email: "test@test.com",
    phone: "123-456-7890",
    term: "term",
    renew_date: new Date(),
    per_store_amnt: 100.6,
    per_tx_amnt: 200.4,
    per_tx_prcnt: 20.1,
    ach_bank_code: "Bank of America: 123456",
    ach_routing: "121000358",
    ach_account: "1234567890",
    enabled: false,
    created_date: Date.now(),
    start_date: new Date(),
    crm_id: "10",
    callback_url: "callback.url",
    callback_config: {
      method: "POST",
      headers: "headers"
    },
    require_terminal: false,
    api_access: true,
    last_report_date: Date.now(),
  });

  const [errors, setErrors] = useState<errorsType>({});

  const formContainsErrors = isError(errors);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // Validation
    switch (inputName) {
      case "name":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "Name cannot be empty!",
          });
          break;
        } else if (!regexName.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "Name may only contain alphabet characters!",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;
      
      case "address":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "Address is required",
          });
          break;
        } else if (!regexAddress.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "Address not valid",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;
      case "contact":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "Contact is required",
          });
          break;
        } else if (!regexName.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "Contact not valid",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;

      case "city":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "City is required",
          });
          break;
        } else if (!regexName.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "City not valid",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;
      case "state":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "State is required",
          });
          break;
        } else if (!regexState.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "State is not valid",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;

      case "email":
        if (!inputValue) {
          setErrors({
            ...errors,
            [inputName]: "Email is required",
          });
          break;
        } else if (!regexEmail.test(inputValue)) {
          setErrors({
            ...errors,
            [inputName]: "Email is not valid",
          });
          break;
        }

        setErrors({
          ...errors,
          [inputName]: "",
        });
        break;

      default:
        break;
    }

    setForm({
      ...form, 
      [inputName]: inputValue, 
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxName = event.target.name;
    const checkboxValue = event.target.checked;

    setForm({
      ...form,
      [checkboxName]: checkboxValue,
    });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(form));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Header/>
      <Grid container spacing={2} className="container">
        <Grid
          item
          md={2}
          xs={0}
          style={{ backgroundColor: "#f5f7f8", borderRight: "1px black solid" }}
        ></Grid>
        <Grid
          item
          md={10}
          xs={12}
          style={{ backgroundColor: "#f5f7f8", paddingRight: "16px" }}
        >
          <h3>Partner ID: {form.id}</h3>

          <Box>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", marginBottom: '16px'}}>
              <h3>Basic Information</h3>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    helperText={errors.name}
                    error={!!errors.name}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    required
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    helperText={errors.address}
                    error={!!errors.address}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    label="Contact"
                    variant="outlined"
                    fullWidth
                    required
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    helperText={errors.contact}
                    error={!!errors.contact}
                  />
                </Grid>

                <Grid item md={2} xs={12}>
                  <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    helperText={errors.city}
                    error={!!errors.city}
                  />
                </Grid>

                <Grid item md={1} xs={12}>
                  <TextField
                    label="State"
                    variant="outlined"
                    name="state"
                    required
                    value={form.state}
                    onChange={handleChange}
                    helperText={errors.state}
                    error={!!errors.state}
                    fullWidth
                  />
                </Grid>
                <Grid item md={1} xs={12}>
                  <TextField
                    label="Zip"
                    variant="outlined"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    helperText={errors.email}
                    error={!!errors.email}
                  />
                </Grid>
                <Grid item md={2} xs={12}>
                  <TextField
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>

          <Box>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" , marginBottom: '16px'}}>
              <h3>Contract Details</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Term"
                    variant="outlined"
                    name="term"
                    required
                    value={form.term}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="Created Date"
                    name="created_date"
                    className="wide"
                    value={new Date(form.created_date)}
                    onChange={(newDate) => {
                      setForm({
                        ...form,
                        created_date: newDate?.getTime() as number,
                      });
                    }}
                  />
                </Grid>
               

                <Grid item xs={6}>
                  <DatePicker
                    label="Start Date"
                    name="start_date"
                    className="wide"
                    value={form.start_date}
                    onChange={(newDate) => {
                      setForm({
                        ...form,
                        start_date: newDate,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="Renewal Date"
                    className="wide"
                    name="renew_date"
                    value={form.renew_date}
                    onChange={(newDate) => {
                      setForm({
                        ...form,
                        renew_date: newDate,
                      });
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", marginBottom: '16px' }}>
              <h3>Financial Information</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Per Store Amount"
                    variant="outlined"
                    name="per_store_amnt"
                    type="number"
                    value={form.per_store_amnt}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Per Transaction Amount"
                    variant="outlined"
                    name="per_tx_amnt"
                    type="number"
                    value={form.per_tx_amnt}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    label="Per Transaction Percentage"
                    variant="outlined"
                    name="per_tx_prcnt"
                    type="number"
                    value={form.per_tx_prcnt}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="ACH Bank Code"
                    variant="outlined"
                    name="ach_bank_code"
                    value={form.ach_bank_code}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="ACH Routing Number"
                    variant="outlined"
                    name="ach_routing"
                    type="number"
                    value={form.ach_routing}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="ACH Account Name"
                    variant="outlined"
                    name="ach_account"
                    type="number"
                    value={form.ach_account}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>
          <Box>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column", marginBottom: '16px' }}>
              <h3>Additional Settings</h3>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Callback URL"
                    variant="outlined"
                    value={form.callback_url}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CRM ID"
                    variant="outlined"
                    name="crm_id"
                    value={form.crm_id}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <DatePicker
                    label="Last report Date"
                    name="last_report_date"
                    className="wide"
                    value={new Date(form.last_report_date)}
                    onChange={(newDate) => {
                      setForm({
                        ...form,
                        last_report_date: newDate?.getTime() as number,
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="enabled"
                        checked={form.enabled}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Record Enabled"
                  />
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="require_terminal"
                        checked={form.require_terminal}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Require Terminal"
                  />
                </Grid>

                <Grid item xs={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="api_access"
                        checked={form.api_access}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="API Access"
                  />
                </Grid>
              </Grid>

              <Divider className="divider" />
              <Button
                className="submit"
                disabled={formContainsErrors}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
              >
                Confirm Changes
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default App;
