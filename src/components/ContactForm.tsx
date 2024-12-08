"use client";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

interface ContactFormProps {
  formData: {
    name: string;
    subject: string;
    email: string;
    phone: string;
    message: string;
    subscribe: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      subject: string;
      email: string;
      phone: string;
      message: string;
      subscribe: boolean;
    }>
  >;
  errors: {
    name: string;
    subject: string;
    email: string;
    phone: string;
    message: string;
  };
}

export default function ContactForm({
  formData,
  setFormData,

  errors,
}: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      subscribe: e.target.checked,
    }));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, md: 2 },
        width: "100%",
        maxWidth: "800px",
        padding: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 2 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          fullWidth
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              backgroundColor: "#fff",
              height: { xs: "50px", md: "56px" },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: { xs: "14px", md: "16px" },
            },
          }}
        />
        <TextField
          fullWidth
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              backgroundColor: "#fff",
              height: { xs: "50px", md: "56px" },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: { xs: "14px", md: "16px" },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 3, md: 2 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <TextField
          fullWidth
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              backgroundColor: "#fff",
              height: { xs: "50px", md: "56px" },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: { xs: "14px", md: "16px" },
            },
          }}
        />
        <TextField
          fullWidth
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
              backgroundColor: "#fff",
              height: { xs: "50px", md: "56px" },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: { xs: "14px", md: "16px" },
            },
          }}
        />
      </Box>

      <TextField
        fullWidth
        multiline
        rows={4}
        name="message"
        placeholder="Write your message"
        value={formData.message}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            backgroundColor: "#fff",
            minHeight: { xs: "120px", md: "150px" },
          },
          "& .MuiOutlinedInput-input": {
            fontSize: { xs: "14px", md: "16px" },
          },
        }}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.subscribe}
            onChange={handleCheckboxChange}
            sx={{
              color: "grey.500",
              transform: { xs: "scale(0.9)", md: "scale(1)" },
            }}
          />
        }
        label={
          <Typography
            sx={{
              color: "grey.600",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              lineHeight: 1.5,
            }}
          >
            Subscribe to our Newsletter for all latest News.
          </Typography>
        }
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          width: { xs: "50%", md: "fit-content" },
          bgcolor: "#FCEE23",
          color: "black",
          borderRadius: "25px",
          px: { xs: 2, md: 4 },
          py: { xs: 1.5, md: 1 },
          fontSize: { xs: "12px", md: "16px" },
          "&:hover": {
            bgcolor: "#e3d620",
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}
