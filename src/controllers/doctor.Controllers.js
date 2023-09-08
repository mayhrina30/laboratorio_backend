import { getAllPatientsByDoctor as getAllPatientsByDoctorFromDB } from "../database/database";


const getAllPatientsByDoctor = (req, res) => {
    try {
        const doctorId = req.params.doctorId;
 
        const result = getAllPatientsByDoctorFromDB(doctorId);
 
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export default {
    getAllPatientsByDoctor,
};
