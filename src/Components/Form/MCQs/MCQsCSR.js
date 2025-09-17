"use client"
import {Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stepper, Step, StepLabel, Typography, Button, Chip} from "@mui/material";
import FormB from "../FormB/FormB";
import { FormBData } from "../FormB/FormBData";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { MCQCSR } from "@/utils/ContactUSPage/CSRMCQ";

const RenderStepperIcon = (index, opacity) => (
  <Box mt={-8}>
    {" "}
    <Typography variant="h2" sx={{ opacity: opacity }}>{`0${index + 1
      }`}</Typography>
    <Image width={50} height={50} loading="lazy" style={{ opacity: opacity }} alt="step" src="/Assets/Images/form/step.webp" />
  </Box>
);

const MCQs = ({ data }) => {
  const {activeStep, isFormCompleted, handleNext, handleBack, handleAddSelectedTag, formik} = MCQCSR(data);
 
  return (
    <form onSubmit={formik.handleSubmit}>
      {isFormCompleted ? (
        <FormB data={FormBData} formik={formik} />
      ) : (
        <Grid id="MCQS"
          container
          bgcolor={"#FFF"}
          py={{ md: "5%", xs: "20%" }}
          px={{ md: "8%", xs: "0%" }}
          mt={"10vh"}
        >
          <Grid item md={11} xs={12} pl={{ md: "18%", xs: "0%" }}>
            <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} textAlign={"center"}>
              {data?.title}
            </Typography>
            <Typography
              variant="body1"
            
              textAlign={"center"}
            >
              {data?.description}
            </Typography>
          </Grid>
          <Grid
            item
            md={11}
            xs={12}
            justifyContent={"center"}
            pl={{ md: "15%", xs: "0%" }}
            pt={10}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {data?.cardData?.map((item, index) => (
                <Step key={index}>
                  <StepLabel
                    sx={{ opacity: activeStep === index ? 1 : 0.5 }}
                    icon={
                      activeStep === index
                        ? RenderStepperIcon(index, 1)
                        : RenderStepperIcon(index, 0.5)
                    }
                  >
                    {item.SteeperTitle}
                  </StepLabel>
                </Step>

              ))}
            </Stepper>

          </Grid>
          <Box
            display={{ md: "flex", xs: "grid" }}
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            {data?.cardData?.map((item, index) => (
              <Grid
                item
                xs={12}
                md={12}
                key={index}
                alignContent="center"
                pl={{ md: "30%", xs: "02%" }}
                mx={{ md: 0, xs: 1 }}
                mb={3}
                sx={{ display: index === activeStep ? "block" : "none" }}
              >
                <Card
                  sx={{
                    p: { md: "10%", xs: "02%" },
                    width: { md: "55vw", xs: "90vw" },
                    height: "auto",
                    bgcolor: "#FFF",
                    borderRadius: "2.125rem",
                    border: "1px solid rgba(0, 0, 0, 0.30)",
                    textAlign: "left",
                  }}
                >
                  <CardContent>
                    {item?.SteeperTitle === "Skills" ? (
                      <Grid
                        container
                        spacing={1}
                        py={"4vh"}
                        px={"5vh"}
                        pb={"5vh"}
                      >
                        <Grid item md={12} alignSelf={"left"}>
                          <Typography variant="h3" pb={5}>
                            {item?.labelName}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Autocomplete
                            multiple
                            renderTags={(tagValue, getTagProps) =>
                              tagValue.map((option, index) => (
                                <Chip
                                  key={index}
                                  sx={{
                                    border: "1px solid #0486FF",
                                    fontSize: { md: 18, xs: 12 },
                                    color: "#0486FF",
                                    width: "8vw",
                                    height: "2.18rem",
                                    alignItems: "center",
                                    bgcolor: "#DAEDFD",
                                    borderRadius: "6.25rem",
                                    padding: "0.2rem 0.2rem",
                                    "&:hover": {
                                      bgcolor: "#0486FF",
                                      color: "#FFFFFF",
                                    },
                                  }}
                                  label={option}
                                  {...getTagProps({ index })}
                                />
                              ))
                            }
                            fullWidth
                            options={
                              item?.Options?.filter(
                                (opt) => opt?.role === formik.values.Role
                              )?.[0]?.skills?.filter(
                                (skill) =>
                                  !formik.values.Skills?.includes(skill)
                              ) || []
                            }
                            onChange={(event, value) => {
                              handleAddSelectedTag(value);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Select Skill"
                              />
                            )}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "0486ff",
                                  borderRadius: "15px !important",
                                },
                                "&:hover fieldset": {
                                  borderColor: "0486ff",
                                  borderRadius: "15px !important",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#0486ff",
                                  borderRadius: "15px !important",
                                },
                              },
                            }}
                          />
                        </Grid>

                        <Typography  variant="body1" pl={2}>
                          Popular skills for{" "}
                          <strong>Software Developers</strong>{" "}
                        </Typography>
                      </Grid>
                    ) : (
                      <FormControl onSubmit={formik.handleSubmit}>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          <Typography variant="h3">{item.labelName}</Typography>
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          {item?.Options?.map((option, index) => (
                            <Grid
                              item
                              md={12}
                              textAlign={"left"}
                              key={index}
                              py={1}
                            >
                              {typeof option === "object" ? (
                                <>
                                  <FormControlLabel
                                    value={option.label}
                                    checked={formik.values[item.formikValue] === option.label}
                                    control={<Radio />}
                                    label={option.label}
                                    name={item?.formikValue}
                                    onChange={formik.handleChange}
                                  />
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    ml={4}
                                  >
                                    {option.description}
                                  </Typography>
                                </>
                              ) : (
                                <FormControlLabel
                                  value={option}
                                  checked={formik.values[item.formikValue] === option}
                                  control={<Radio />}
                                  label={option}
                                  name={item?.formikValue}
                                  onChange={formik.handleChange}
                                />
                              )}
                            </Grid>
                          ))}
                        </RadioGroup>
                      </FormControl>
                    )}
                  </CardContent>
                  <Grid mt={2} px={10} xs={12} textAlign={"center"}>
                    {activeStep === 0 ? (
                      <Button
                        className="blueBackgroundButton"
                        onClick={() => handleNext(data?.cardData[activeStep]?.nextRoute)}
                        disabled={!formik.values.Role}
                        variant="contained"
                        sx={{
                          color: "#FFF",
                        }}
                      >
                        Get Started
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="blueBorderButton"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          
                        >
                          Back
                        </Button>
                        <Button
                          variant="blueBorderButton"
                          onClick={() => handleNext(data?.cardData[activeStep]?.nextRoute)}
                          disabled={!formik.values[item.formikValue]}
                        >

                          {activeStep === data.cardData.length - 1
                            ? "Finish"
                            : "Next"}
                        </Button>
                      </>
                    )}
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Box>
        </Grid>
      )}
    </form>
  );
};
export default MCQs;
