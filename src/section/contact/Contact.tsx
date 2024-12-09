"use client";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  IconArrowRight,
  IconCircleCheck,
  IconExclamationCircle,
} from "@tabler/icons-react";
import {
  Button,
  CircularProgress,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { subscribe } from "diagnostics_channel";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface messageProps {
  type: string;
  text: string;
}

const Contact = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const videoRef = useRef<HTMLDivElement>(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    phone: Yup.number().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });

  const [Message, setMessage] = useState<messageProps>({
    type: "",
    text: "",
  });

  const handleFormSubmission = (values: any, resetForm: () => void) => {
    setSubmitting(true);

    const header = {
      accept: "application/json",
      "Content-Type": "application/json",
    };

    const data = {
      name: values.fullName,
      subscribe: values.subscribe,
      ...values,
    };
    console.log("Data being sent:", data);
    fetch(`${BASE_URL}/api/contacts`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("the response is ", response);
        if (response.id) {
          setMessage((prev) => ({
            ...prev,
            type: "success",
            text: "Submitted successfully!",
          }));
          resetForm();
        }
      })
      .catch((error) => {
        setMessage((prev) => ({ ...prev, type: "error", text: error.message }));
      })
      .finally(() => setSubmitting(false));
  };

  // Initial form values
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    subscribe: false,
  };

  // Form submission
  const onSubmit = async (values: any, { resetForm }: { resetForm: () => void }) => {
    console.log("Form submitted with values:", values);
    handleFormSubmission(values, resetForm);
  };

  const handlePlayVideo = () => {
    setIsLoading(true);
    setPlayVideo(true);
  };
  return (
    <Grid container sx={{ background: "#FFFFFF" }}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 0 },
              paddingX: { xs: 1, md: 2 },
              paddingTop: { xs: 10, md: 8 },
              flexDirection: { xs: "column", md: "row" },

              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "100%", xl: "60%" },
                gap: { xs: 1, md: 2 },
                paddingTop: { xs: 0, md: 10 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "start", md: "start" },
                  alignItems: { xs: "center", md: "center" },
                  flexDirection: { xs: "row", md: "row" },
                  gap: { xs: 2, md: 2 },
                  textAlign: "center",

                  width: "100%",
                  paddingLeft: { xs: 0, lg: 10, xl: 10 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "24px",
                      md: "24px",
                      lg: "28px",
                    },
                    fontFamily: "Segoe Ui",
                    fontWeight: 400,
                    color: "#010202",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                    gap: { xs: 2 },
                  }}
                >
                  <CircleIcon
                    sx={{ scale: { xs: 0.3, md: 1 }, color: "black" }}
                  />{" "}
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "25px", sm: "30px", md: "42px" },
                    fontFamily: "Segoe Ui",
                    fontWeight: 400,
                    color: "#010202",
                    textAlign: { xs: "center", md: "right" },
                    paddingLeft: { xs: 0, md: 2, lg: 5 },
                  }}
                >
                  It's Nice
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: { xs: "left", md: "right" },
                  paddingLeft: { xs: 8, md: 0, lg: 0 },
                }}
              >
                Meet You, Feel
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "42px" },
                  fontFamily: "Segoe Ui",
                  fontWeight: 400,
                  color: "#010202",
                  textAlign: { xs: "left", md: "right" },
                  paddingLeft: { xs: 0, md: 0, lg: 0 },
                }}
              >
                Free to Contact Us
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", md: "20%" },
                justifyContent: "center",
                alignItems: { xs: "flex-end", md: "flex-end" },
                mt: { xs: 0, md: 30 },
                paddingRight: { xs: 5, md: 0 },
                paddingBottom: { xs: 4 },
              }}
            >
              <SouthEastIcon
                sx={{
                  scale: { xs: 3, sm: 3, md: 4.5 },
                  color: "#FCEE23",
                  background: "black",
                  borderRadius: "100%",
                  padding: 0.3,
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "end",
              paddingRight: { xs: 0, md: 5, xl: 15 },
              paddingTop: { xs: 2, md: 15, xl: 20 },
              width: "100%",
            }}
          >
            <Box
              ref={videoRef}
              sx={{
                position: "relative",
                width: { xs: "100%", md: "70%", xl: "50%" },
                height: { xs: "40vh", md: "50vh", xl: "45vh" },
                borderRadius: "20px",
                zIndex: 1,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: playVideo ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: 1,
                }}
              >
                <img
                  src="/aboutus.png"
                  alt="about us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: playVideo ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  zIndex: playVideo ? 1 : 0,
                }}
              >
                {playVideo && (
                  <iframe
                    src="https://www.youtube.com/embed/5D8TBicNIb8?si=x658Sysm10QHsnof&amp;controls=0&autoplay=1"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  />
                )}
              </Box>

              {!playVideo && (
                <Box
                  onClick={handlePlayVideo}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderRadius: "50%",
                    width: { xs: "50px", md: "70px" },
                    height: { xs: "50px", md: "70px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    zIndex: 2,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.8)",
                      transform: "translate(-50%, -50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      color: "#FCEE23",
                      fontSize: { xs: "30px", md: "40px" },
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  right: "0%",
                  width: { xs: "50%", md: "40%", xl: "40%" },
                  height: { xs: "20%", md: "10%", xl: "9%" },
                  zIndex: 3,
                  background: "white",
                  borderBottomLeftRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/logo.png"
                  alt="about us"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          height: "1px",
          background: "#D1D1D1",
          marginTop: { xs: 0, md: 4 },
          marginX: { xs: 2, md: 13 },
        }}
      ></Box>
      <Grid item xs={12} sx={{ padding: { xs: 2, md: 2, lg: 7 } }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
              lg: "row",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{ display: "flex", alignItems: "flex-end" }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#878787",
                fontFamily: "Segoe Ui",
                fontSize: { xs: 10, md: 20, lg: 25 },
                padding: { xs: 0, md: 5, lg: 5 },
                marginBottom: { xs: 0, md: 8 },
              }}
            >
              Vestis Garment Production Plc, a subsidiary of Beryl Davis Ltd.,
              traces its roots back to 1981 when it was established in Chorley,
              UK. The name is "Vestis," derived from Latin, means "clothing" or
              "garments." As a multinational company, currently operating in
              Israel, China and Ethiopia
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
            <Box
              sx={{
                width: "100%",
                paddingX: { xs: 0, sm: 3, md: 3, lg: 8 },
                paddingTop: { xs: 3, sm: 3, md: 5 },

                borderRadius: 4,

                color: "red",
                textAlign: "left",
              }}
            >
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {() => (
                  <Form>
                    {/* Full Name */}
                    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                      <Box sx={{ marginBottom: 2, width: "50%" }}>
                        <Field
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          style={{
                            width: "100%",
                            padding: "15px",
                            borderRadius: 10,
                            fontSize: "1.2rem", // Adjust font size
                            border: "1px solid #CDCDCD",
                            color: "#5F5F5F",
                            background: "transparent",
                            outline: "none",
                          }}
                        />
                        <ErrorMessage name="fullName" component="div" />
                      </Box>

                      {/* Email */}
                      <Box sx={{ marginBottom: 2, width: "50%" }}>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          style={{
                            width: "100%",
                            padding: "15px",
                            borderRadius: 10,
                            fontSize: "1.2rem", // Adjust font size
                            border: "1px solid #CDCDCD",
                            color: "#5F5F5F",
                            background: "transparent",

                            outline: "none",
                            mt: 4,
                          }}
                        />
                        <ErrorMessage name="email" component="div" />
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                      <Box sx={{ marginBottom: 2, width: "50%" }}>
                        <Field
                          type="phone"
                          name="phone"
                          placeholder="Phone"
                          style={{
                            width: "100%",
                            padding: "15px",
                            borderRadius: 10,
                            fontSize: "1.2rem", // Adjust font size
                            border: "1px solid #CDCDCD",
                            color: "#5F5F5F",
                            background: "transparent",

                            outline: "none",
                            mt: 4,
                          }}
                        />
                        <ErrorMessage name="subject" component="div" />
                      </Box>
                      <Box sx={{ marginBottom: 2, width: "50%" }}>
                        <Field
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          style={{
                            width: "100%",
                            padding: "15px",
                            borderRadius: 10,
                            fontSize: "1.2rem", // Adjust font size
                            border: "1px solid #CDCDCD",
                            color: "#5F5F5F",
                            background: "transparent",
                            outline: "none",
                            mt: 4,
                          }}
                        />
                        <ErrorMessage name="subject" component="div" />
                      </Box>
                    </Box>

                    <Box sx={{ marginBottom: 0, width: "100%" }}>
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        style={{
                          width: "100%",
                          padding: "15px",
                          borderRadius: 10,
                          fontSize: "1.2rem", // Adjust font size
                          border: "1px solid #CDCDCD",
                          background: "transparent",
                          color: "#5F5F5F",
                          outline: "none",
                          mt: 2,
                        }}
                      />
                      <ErrorMessage name="message" component="div" />
                    </Box>

                    {/* Checkbox */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 2,
                        background: "transparent",
                        color: "black",
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Field
                            name="subscribe"
                            type="checkbox"
                            as={Checkbox}
                            sx={{
                              borderRadius: "100%",
                              color: "black",
                              "&.Mui-checked": {
                                color: "black",
                              },
                            }}
                          />
                        }
                        label={
                          <Typography
                            sx={{
                              color: "black",
                              fontSize: { xs: "12px", md: "16px" },
                            }}
                          >
                            Subscribe to our Newsletter for all latest News
                          </Typography>
                        }
                      />
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        px: 0,
                        mt: 6,
                        ml: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "flex-center",
                          justifyContent: "flex-start",
                          borderBottom: 1,
                        }}
                      >
                        <Button
                          component="button"
                          type="submit"
                          variant="contained"
                          sx={{
                            mb: 2,
                            color: submitting ? "gray" : "#FCEE23",
                            backgroundColor: "#FCEE23",
                            minWidth: "100px",
                            borderRadius: "45px",
                            "&:hover": {
                              backgroundColor: "#FCEE23",
                            },
                          }}
                          disabled={submitting}
                        >
                          {submitting ? (
                            <CircularProgress
                              size="1.3rem"
                              sx={{ color: "white" }}
                            />
                          ) : (
                            <Typography
                              variant="h6"
                              sx={{
                                textTransform: "capitalize",
                                color: "black",
                                padding: 2,
                                fontFamily: "Plus Jakarta Sans",
                              }}
                            >
                              Send Message
                            </Typography>
                          )}
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  mt: 3,
                  mr: 3,
                }}
              >
                {Message.type === "success" ? (
                  <IconCircleCheck size="1.4rem" />
                ) : Message.type === "error" ? (
                  <IconExclamationCircle size="1.4rem" />
                ) : null}
                <Typography
                  variant="subtitle1"
                  color={"black"}
                  sx={{ ml: 0.6 }}
                >
                  {Message.text}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
