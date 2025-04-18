import { useState } from "react";
import { Button, TextField, Card, CardContent, Typography, Grid, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Enviando datos de inicio de sesión:", credentials);
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onLogin();
        navigate("/");
      } else {
        setErrorMessage("No se pudo iniciar sesión. Verifica tus datos e intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Error de red o del servidor. Intenta de nuevo más tarde.");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={10} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>Iniciar Sesión</Typography>

            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}

            <TextField fullWidth label="Usuario" name="username" margin="normal" onChange={handleChange} />
            <TextField fullWidth label="Contraseña" name="password" type="password" margin="normal" onChange={handleChange} />
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Entrar
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
