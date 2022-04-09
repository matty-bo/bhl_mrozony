import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useContext, useRef, useState } from "react";
import { appContext } from "../../contexts/AppContext";
import logo from "../assets/logo.png";

const REQUEST_DELAY = 2000;

export function Login() {
  const identifierRef = useRef(null);
  const passwordRef = useRef(null);

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { setLogin } = useContext(appContext);

  const loginRequest = () => new Promise((_) => setTimeout(_, REQUEST_DELAY));

  const handleLogin = useCallback(() => {
    const identifier = identifierRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (identifier.length === 0) {
      setMessage("Identifier must be specified!");
      return;
    }

    if (password.length === 0) {
      setMessage("Password must be specified!");
      return;
    }

    setMessage(undefined);

    const credentials = { identifier, password };

    setLoading(true);

    loginRequest().then((resp) => {
      setLogin();
    });
  }, [setLogin, setMessage, setLoading]);

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!loading ? (
        <Container maxWidth="xs">
          <Paper elevation={15}>
            <Box
              sx={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={logo} alt="Logo" style={{ height: "200px" }} />
            </Box>
            <Box sx={{ padding: "0 10px" }}>
              <FormControl fullWidth sx={{ padding: "25px 0", gap: "12px" }}>
                <TextField
                  size="small"
                  label="Identifier"
                  inputRef={identifierRef}
                />
                <TextField
                  label="Password"
                  inputRef={passwordRef}
                  type="password"
                  size="small"
                />
                {message.length > 0 && (
                  <Typography
                    color="error"
                    sx={{ fontSize: "12px", alignSelf: "center" }}
                  >
                    {message}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  sx={{
                    m: "50px 0 1px 0",
                    background: (theme) => `${theme.palette.primary.main}`,
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </FormControl>
            </Box>
          </Paper>
        </Container>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
