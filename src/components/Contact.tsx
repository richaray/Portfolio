import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send('service_uf2qeid', 'template_0pkcsnp', templateParams, 'b8ichb0NnecEtISo3').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const textFieldStyles = {
    '& .MuiInputBase-input': {
      color: 'black !important',
      backgroundColor: 'white !important',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white !important',
    },
    '& label': {
      color: 'black !important',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'black !important',
    },
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            sx={{ width: '100%', paddingTop: '20px', display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ display: 'flex', gap: '15px', paddingBottom: '15px', flexWrap: 'wrap' }}>
              <TextField
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={{ ...textFieldStyles, flex: 1 }}
              />
              <TextField
                required
                id="outlined-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                sx={{ ...textFieldStyles, flex: 1 }}
              />
            </Box>
            <TextField
              required
              id="outlined-message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={{ ...textFieldStyles, marginBottom: '15px' }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              sx={{
                alignSelf: 'flex-end',
                backgroundColor: 'white',
                color: '#050f0b',
                '&:hover': {
                  backgroundColor: '#5000ca',
                  color: 'white',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
