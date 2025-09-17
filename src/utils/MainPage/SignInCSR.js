"use client"
import * as Yup from "yup";
import { useFormik } from "formik";
import { Alert, Avatar, Button, CircularProgress, Grid, Snackbar, Typography, useMediaQuery } from "@mui/material";
import { RegistrationCSR } from "@/utils/MainPage/MainPageCSRFunctions";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";

const SignInCSR = ({ data }) => {
    const is375 = useMediaQuery("(min-width:300px) and (max-width:400px)");
    const is912 = useMediaQuery("(min-width:400px) and (max-width:900px)");
    const { open, setOpen, handleClose, focusedField, setFocusedField, handleFocus } = RegistrationCSR(data);

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
    const getInputStyles = (field) => ({
        outline: "none",
        border:
            focusedField === field
                ? is912
                    ? "2px solid #292A76"
                    : "0.15vw solid #292A76"
                : is912
                    ? "2px solid #5c5ea5"
                    : "0.15vw solid #5c5ea5",
        boxShadow: focusedField === field ? "0 0 8px rgba(0, 0, 0, 0.3)" : "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        width: is912 ? "16rem" : is375 ? "14rem" : "20vw",
        borderRadius: is912 || is375 ? "10.2rem" : "10.2vw",
        padding: is912 || is375 ? "0.6rem" : "0.6vw",
        fontSize: is912 || is375 ? "0.8rem" : "0.8vw",
        color: "#292A76",
    });
    return (
        <Grid
            item
            md={3}
            xs={10}
            sx={{
                width: { md: "1vw", xs: "100%" },
                py: "2vh",
                height: { md: "auto", xs: "auto" },
                borderRadius: "10% !important",
                boxShadow: "0px 4px 4vh 0px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Grid container justifyContent="center">
                <Grid item md={2} xs={2}>
                    <Avatar
                        src="/Assets/Images/NewCompoents/SoftDevService/Boks.jpeg"
                        variant="circular"
                        sx={{
                            width: { md: "3.5vw", xs: "12vw" },
                            height: "auto",
                            borderRadius: "15%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={12} my={"2vh"}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>
                        {data?.formTitle}
                    </Typography>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                color: "#292A76",
                                fontSize: { md: "0.7vw", xs: "0.7rem" },
                                fontWeight: "bold",
                                my: "1vh",
                            }}
                        >
                            Your Email*
                        </Typography>
                        <input
                            type="email"
                            id="email"
                            name="serviceEmail"
                            placeholder="Your Email Address"
                            required
                            style={getInputStyles("email")}
                            onFocus={() => handleFocus("email")}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.serviceEmail}
                            helperText={
                                formik.touched.serviceEmail && formik.errors.serviceEmail
                            }
                            error={
                                formik.touched.serviceEmail &&
                                Boolean(formik.errors.serviceEmail)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                color: "#292A76",
                                fontSize: { md: "0.7vw", xs: "0.7rem" },
                                fontWeight: "bold",
                                my: "1vh",
                            }}
                        >
                            Full Name*
                        </Typography>
                        <input
                            type="text"
                            id="name"
                            name="serviceName"
                            placeholder="Full name"
                            required
                            style={getInputStyles("name")}
                            onFocus={() => handleFocus("name")}
                            onBlur={formik.handleBlur}
                            value={formik.values.serviceName}
                            onChange={formik.handleChange}
                            error={
                                !!(formik.touched.serviceName && formik.errors.serviceName)
                            }
                            helperText={
                                formik.touched.serviceName && formik.errors.serviceName
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                color: "#292A76",
                                fontSize: { md: "0.7vw", xs: "0.7rem" },
                                fontWeight: "bold",
                                my: "1vh",
                            }}
                        >
                            Phone*
                        </Typography>
                        <input
                            type="text"
                            id="number"
                            name="servicePhoneNumber"
                            placeholder="Phone Number"
                            required
                            style={getInputStyles("number")}
                            onFocus={() => handleFocus("number")}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.servicePhoneNumber}
                            helperText={
                                formik.touched.servicePhoneNumber &&
                                formik.errors.servicePhoneNumber
                            }
                            error={
                                formik.touched.servicePhoneNumber &&
                                Boolean(formik.errors.servicePhoneNumber)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                color: "#292A76",
                                fontSize: { md: "0.7vw", xs: "0.7rem" },
                                fontWeight: "bold",
                                my: "1vh",
                            }}
                        >
                            Project Detail*
                        </Typography>
                        <input
                            type="text"
                            id="text"
                            placeholder="Enter your Project Details!"
                            required
                            name="serviceDescription"
                            style={getInputStyles("text")}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.serviceDescription}
                            helperText={
                                formik.touched.serviceDescription &&
                                formik.errors.serviceDescription
                            }
                            error={
                                formik.touched.serviceDescription &&
                                Boolean(formik.errors.serviceDescription)
                            }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{ display: "flex", justifyContent: "center", mt: "2%" }}
                    >
<ContactButtonBlue
  label="Continue"
  type="submit"
  disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
  loading={formik.isSubmitting}
/>

                    </Grid>
                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                        autoHideDuration={2000}
                        onClose={handleClose}
                    >
                        <Alert
                            severity="success"
                            variant="filled"
                            sx={{ width: "100%" }}
                        >
                            Your Form is Successfully Submitted!
                        </Alert>
                    </Snackbar>
                </form>
            </Grid>
        </Grid>
    )
}

export default SignInCSR
