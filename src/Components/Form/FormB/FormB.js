import React from "react";
import {Autocomplete, Avatar, Box, Button, Card, CardContent, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, Input, InputAdornment, InputLabel, TextField, Typography} from "@mui/material";
import {Person as PersonIcon, Call as CallIcon, MailOutline as MailOutlineIcon, Language as LanguageIcon} from "@mui/icons-material";
import Image from "next/image";

const FormB = ({ data, formik }) => {
  return (
    <Grid
      container
      mt={10}
      sx={{
        bgcolor: "white",
        padding: "3% 10% 3%",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={5} mt={{ md: "05%", xs: "10%" }}>
          <Avatar
            variant="square"
            src={data.mainImage}
            sx={{
              width: { md: "28vw", xs: "78vw" },
              height: { md: "auto", xs: "50vh" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={7} mt={"3%"}>
          <Card sx={{ marginLeft: "2%", boxShadow: "none" }}>
            <CardContent sx={{ textAlign: "left", marginLeft: "0%" }}>
              <Typography variant="h2" sx={{ marginLeft: "5px" }}>
                {data.Text1}
              </Typography>
              <Typography
                className="greyColor"
                variant="body1"
                mb={5}
              >
                {data.Text2}
              </Typography>
              <FormControl fullWidth sx={{ position: 'relative' }}>
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText sx={{ color: "red", position: 'absolute', bottom: '72%', marginTop: '4px' }}>{formik.errors.name}</FormHelperText>
                )}
                <InputLabel variant="body1">Name </InputLabel>
                <Input
                  id="Name"
                  name="name"
                  type="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="Full Name"
                  required
                  disableUnderline
                  className="textinput"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "#0486ff" }} />
                    </InputAdornment>
                  }
                />

              </FormControl>

              <FormControl fullWidth sx={{ position: 'relative' }}>
                {formik.touched.email && formik.errors.email && (
                  <FormHelperText sx={{ color: "red", position: 'absolute', bottom: '72%', marginTop: '4px' }}>{formik.errors.email}</FormHelperText>
                )}
                <InputLabel htmlFor="email" className="paragraph">
                  Email Address
                </InputLabel>
                <Input
                  id="email"
                  email="Email"
                  type="email"
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                  disableUnderline
                  className="textinput"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon sx={{ color: "#0486ff" }} />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth>
                {formik.touched.phone && formik.errors.phone && (
                  <FormHelperText sx={{ color: "red", position: 'absolute', bottom: '72%', marginTop: '4px' }}>{formik.errors.phone}</FormHelperText>
                )}
                <InputLabel htmlFor="phone" className="paragraph">
                  {" "}
                  Phone{" "}
                </InputLabel>
                <Input
                  id="phone"
                  phone="Phone"
                  type="tel"
                  placeholder="Phone Number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                  disableUnderline
                  className="textinput"
                  startAdornment={
                    <InputAdornment position="start">
                      {" "}
                      <CallIcon sx={{ color: "#0486ff" }} />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Grid item md={10.2}>

                <InputLabel htmlFor="country" className="paragraph">
                  Country{" "}
                </InputLabel>
                <Autocomplete
                  id="country-select-demo"
                  options={data.countries}
                  autoHighlight
                  onChange={(e, value) => formik.setFieldValue('country', value ? value.label : '')}
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Image
                        loading="lazy"
                        width="20"
                        height="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt="icons"
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      name="Country"
                      placeholder="Select Country"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderRadius: "0.9375rem",
                          },
                        },
                        width: { md: "118%", xs: "100%" },
                        "& .MuiAutocomplete-popupIndicator": {
                          color: "#0486ff",
                        },
                      }}
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position="start" sx={{ pl: "3%" }}>
                            <LanguageIcon sx={{ color: "#0486ff" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

              </Grid>
              <Grid mt={5}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox name="agreement" onChange={(e, value) => formik.setFieldValue("agreement", value)} checked={formik.values.agreement} />}
                    label="I agree to CodersWire’s Terms and Conditions and to the Privacy Policy"
                  />
                </FormGroup>
              </Grid>
              <Button
                className="blueBackgroundButton"
                type="submit"
                // disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
                sx={{ color: "white", marginTop: "5%" }}
              >
                {formik.isSubmitting ? <CircularProgress /> : "Connect Now"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormB;
