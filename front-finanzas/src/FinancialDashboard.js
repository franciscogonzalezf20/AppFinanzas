import { useState } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Button, TextField, Grid, Typography } from "@mui/material";

export default function FinancialDashboard({ onLogout }) {

    const [financialData, setFinancialData] = useState({
    ingresos: "",
    costos: "",
    gastos: "",
    activos: "",
    pasivos: "",
    capital: "",
  });

  const handleChange = (e) => {
    setFinancialData({ ...financialData, [e.target.name]: e.target.value });
  };

  const utilidadNeta = financialData.ingresos - financialData.costos - financialData.gastos;
  const razonCorriente = (financialData.activos / financialData.pasivos).toFixed(2);
  const roe = ((utilidadNeta / financialData.capital) * 100).toFixed(2);

  return (
    
    <Grid container direction="column" spacing={2} padding={8}>

    {/* Botón Cerrar Sesión */}
    <Grid item>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
            console.log("se cerro la sesion");
            onLogout(); 
          }}
        style={{ alignSelf: "flex-start", marginBottom: "20px" }}
      >
        Cerrar sesión
      </Button>
    </Grid>
  
    {/* Contenido Principal */}
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardHeader title="Estado de Resultados" />
          <CardContent>
            <TextField fullWidth label="Ingresos" name="ingresos" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Costos" name="costos" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Gastos" name="gastos" onChange={handleChange} margin="normal" />
            <Typography variant="h6">Utilidad Neta: ${utilidadNeta || 0}</Typography>
          </CardContent>
        </Card>
      </Grid>
  
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardHeader title="Balance General" />
          <CardContent>
            <TextField fullWidth label="Activos" name="activos" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Pasivos" name="pasivos" onChange={handleChange} margin="normal" />
            <TextField fullWidth label="Capital" name="capital" onChange={handleChange} margin="normal" />
          </CardContent>
        </Card>
      </Grid>
  
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardHeader title="Indicadores Financieros" />
          <CardContent>
            <Typography variant="body1">Razón Corriente: {isNaN(razonCorriente) ? "N/A" : razonCorriente}</Typography>
            <Typography variant="body1">ROE: {isNaN(roe) ? "N/A" : roe}%</Typography>
          </CardContent>
        </Card>
      </Grid>
  
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Enviar datos al backend:", financialData)}
        >
          Enviar Datos
        </Button>
      </Grid>
    </Grid>
  </Grid>
  
  );
}
