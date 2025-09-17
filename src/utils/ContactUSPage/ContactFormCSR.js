"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ContactFormCSR = ({ data }) => {
    const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const textFieldStyle = {
    background: "white",
    borderRadius: "15px",
    border: "1px solid #6666",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderRadius: "0.9375rem !important",
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderRadius: "0.9375rem !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "0.9375rem !important",
      },
    },
  };

  const inputPropsStyle = {
    border: "10px",
  };
  const services = [
    { label: "Service 1" },
    { label: "Service 2" },
    { label: "Service 3" },
  ];

  const initialFormValues = {
    contactFirstName: "",
    contactLastName: "",
    contactPhoneNum: "",
    contactEmail: "",
    contactCompanyName: "",
    contactService: services[0].label,
    contactMessage: "",
    contactAgreement: false,
  };
  const validationSchema = Yup.object({
    contactFirstName: Yup.string()
      .required("First Name is required")
      .min(3, "First Name should be at least 3 characters")
      .max(60, "First Name should be at most 60 characters"),
    contactLastName: Yup.string()
      .min(3, "Last Name should be at least 3 characters")
      .required("Last Name is required"),
    contactPhoneNum: Yup.string()
      .required("Phone Number is required")
      .min(11, "Phone Number should be at least 11 digits"),
    contactEmail: Yup.string()
      .email("Invalid email address")
      .required("email is required"),
    contactCompanyName: Yup.string().required("Company Name is required"),
    contactService: Yup.string().required("Service is required"),
    contactMessage: Yup.string()
      .min(5, "Massage should be at least 5 characters")
      .max(250, "Massage should be at most 250 characters")
      .required("Message is required"),
    contactAgreement: Yup.bool()
      .oneOf([true], "Agreement is required")
      .required("Agreement is required"),
  });

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values, action) => {
      Submit(action);
    },
  });

  function Submit(action) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyt50pAhM6UzcHxL0hH-3lcur3kIde68ALKclZr91Xq8mqMD-d0fAaQ2ttihMkkiRI-5A/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        res.json();
        setOpen(true);
        action.resetForm();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {data?.sectionForms?.map((item, index) => (
        <Box key={index}>
          <Typography variant="h2">{item.forms?.title}</Typography>
          <Typography variant="body1">
            {item.forms?.footerDescription}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
          <Grid container className="ContactPage" spacing={2} mt={"2%"}>
            {item?.forms?.formFields?.map((subitem, subindex) => (
             <Grid item md={[4, 5, 6].includes(subindex)?12:6} xs={[4, 5, 6].includes(subindex)?12:6}   key={subindex}>
           {subindex === 5 ? (
  <FormControl fullWidth variant="outlined" >
      <InputLabel id="select-label">Please Select</InputLabel>
      <Select
        labelId="select-label"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        input={<OutlinedInput label="Please Select" />}
        IconComponent={() => (
          <ArrowDropDownIcon
            style={{
              transition: "transform 0.3s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        )}
        sx={{
          backgroundColor: "#fff", // ✅ white background
          borderRadius: "8px",
          "& fieldset": {
            borderColor: "#ccc", // optional border color
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
    </FormControl>
) : subindex === 6 ? (
  <textarea
    name={subitem.fieldLabel}
    placeholder={subitem.placeholder}
    className="customTextarea"
  />
) : (
  <input
    name={subitem.fieldLabel}
    type="text"
    placeholder={subitem.placeholder}
    className={[4, 5, 6].includes(subindex) ? "customInputSmall" : "customInputLarge"}
  />
)}

          </Grid>

            ))}
          </Grid>
          </form>

        </Box>
      ))}
    </>
  );
};

export default ContactFormCSR;
