// database.js
import { getConnection } from "./database"; // Asegúrate de importar getConnection desde el archivo correcto


export const getAppointmentByDate = async (patientId, date) => {
    try {
        const connection = await getConnection();
        
        // Realiza la consulta SQL para obtener los turnos por fecha y paciente
        const result = await connection.query('SELECT * FROM Appointments WHERE patient_id = ? AND appointment_date = ?', [patientId, date]);
        return result;
    } catch (error) {
        throw error;
    }
};


