"use client"
import * as Yup from "yup";
import { useFormik } from "formik";
import { Alert, Avatar, Box, Button, CircularProgress, Grid, Snackbar, Typography } from "@mui/material";
import { RegistrationCSR } from "@/utils/MainPage/MainPageCSRFunctions";
import { MediaQuery } from "@/utils/MainPage/MediaQuerry";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContactButton from "./ContactButtonBlue";
import ContactButtonBlue from "./ContactButtonBlue";

const Registration = ({ data }) => {
    const { open, setOpen, handleClose, focusedField, handleFocus } = RegistrationCSR(data);
    const { is375, is912 } = MediaQuery();

    const initialFormValues = {
        serviceName: "",
        servicePhoneNumber: "",
        serviceEmail: "",
        serviceDescription: "",
    };

    const validationSchema = Yup.object({
        serviceName: Yup.string()
            .required("Name is required")
            .min(3, "Name should be at least 5 characters")
            .max(60, "First Name should be at most 60 characters"),
        servicePhoneNumber: Yup.string()
            .required("Phone Number is required")
            .min(11, "Phone Number should be at least 11 digits"),
        serviceEmail: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        serviceDescription: Yup.string()
            .min(5, "Massage should be at least 5 characters")
            .max(250, "Massage should be at most 250 characters")
            .required("description is required"),
    });

    const formik = useFormik({
        initialValues: initialFormValues,
        validationSchema,
        onSubmit: (values, action) => {
            const formEle = document.querySelector("form");
            const formData = new FormData(formEle);
            fetch(
                "https://script.google.com/macros/s/AKfycbyt50pAhM6UzcHxL0hH-3lcur3kIde68ALKclZr91Xq8mqMD-d0fAaQ2ttihMkkiRI-5A/exec",
                {
                    method: "POST",
                    body: formData,
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
        },
    });
    const inputFields = [
        {
            id: "name",
            name: "serviceName",
            type: "text",
            placeholder: "Your Name",
        },
        {
            id: "number",
            name: "servicePhoneNumber",
            type: "text",
            placeholder: "Phone Number",
        },
        {
            id: "email",
            name: "serviceEmail",
            type: "email",
            placeholder: "Email Address",
        },
        {
            id: "text",
            name: "serviceDescription",
            type: "text",
            placeholder: "Please Describe a Little",
        },
    ];
    return (
        <>
                <Box 
                    sx={{
                        bgcolor: "white",
                        borderRadius: { md: "0.5vw", xs: "0.5rem" },
                        p: { md: "1vw", xs: "1rem" },
                        boxShadow: "0px 4px 4vh 0px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography variant="h3" mb={"1%"}>
                        Share What&apos;s in Your{" "}
                        <span style={{ color: "#0486ff" }}>Mind</span>
                    </Typography>
                    <Typography variant="body1">
                        Please fill out the form ,we will back to you in a couple of
                        buisness hours
                    </Typography>
{inputFields.map((field, index) => (
  <Box key={field.id} my="3%" className="registration" height={{md:index===3?"8.8vw":"3.8vw",xs:"auto"}} >
    {index === 3 ? (
      <textarea
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required
        onFocus={() => handleFocus(field.name)}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[field.name]}
      />
    ) : (
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        placeholder={field.placeholder}
        required
        onFocus={() => handleFocus(field.name)}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[field.name]}
      />
    )}
    {formik.touched[field.name] && formik.errors[field.name] && (
      <Typography color="error" variant="caption" ml={"1%"}>
        {formik.errors[field.name]}
      </Typography>
    )}
  </Box>
))}

                 
<ContactButtonBlue label={"Submit Now"}/>
                </Box>
        </>
    );
};

export default Registration;
