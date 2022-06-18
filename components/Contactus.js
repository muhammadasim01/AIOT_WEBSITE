import { useState } from "react";

import emailjs from "emailjs-com";

import { useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";

import TextField from "@mui/material/TextField";
const Contact = () => {
  const form = useRef();
  const [value, setValue] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    // setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setValue({ name: "", email: "", message: "" });
  };
  return (
    <section className="contact" id="contact">
      <h2 className="vision">
        <span>Contact</span> Us
      </h2>
      <br />
      <br />
      <div className="container contact_container">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="contact_box"
        >
          <form ref={form} className="contaact_form">
            <TextField
              id="standard-multiline-flexible"
              label="name"
              type="text"
              multiline
              name="name"
              maxRows={4}
              value={value.name}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Email"
              multiline
              type="text"
              maxRows={4}
              name="email"
              value={value.email}
              onChange={handleChange}
              variant="standard"
            />
            <TextField
              id="standard-multiline-flexible"
              label="Message"
              multiline
              type="text"
              onChange={handleChange}
              name="message"
              rows={4}
              value={value.message}
              variant="standard"
            />
            <ButtonGroup
              color="error"
              aria-label="medium secondary button group"
            >
              <Button onClick={handleSubmit}>submit</Button>
            </ButtonGroup>
          </form>
        </Box>
      </div>
    </section>
  );
};
export default Contact;
