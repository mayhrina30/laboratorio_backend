import express from "express";
import pacienteController from "../controllers/paciente.controllers.js";

const router = express.Router();

// Ruta para consultar paciente por fecha de turno
router.get('api/patient/:patientId/getAppointmentByDate/:date', pacienteController.getPacientesPorDoctor);

export default router;
