
import express from "express";
import doctorController from "../controllers/doctor.Controllers.js";

const router = express.Router();

// Ruta para consultar pacientes por doctor

router.get('/api/doctor/:doctorId/getAllPatients', doctorController.getAllPatientsByDoctor);


export default router;




