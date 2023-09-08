import express from "express";


// Rutas
import doctorRouter from "./router/doctor.router.js";
import patientRouter from "./router/paciente.router.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());


app.use('/api', doctorRouter);
app.use('/api', patientRouter);



app.listen(port, () => {
  console.log(`conexion establecida ${port}`);
});

export default app;
