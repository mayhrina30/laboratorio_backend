
import { getConnection } from "./database";

// Esta es la función que obtiene pacientes por doctor
export const getAllPatientsByDoctor = (doctorId) => {
  // Llama a getConnection para obtener una conexión a la base de datos
  return getConnection()
    .then((connection) => {
      const query = 'SELECT * FROM Patients WHERE doctor_id = ?';

      return new Promise((resolve, reject) => {
        connection.query(query, [doctorId], (err, results) => {
          if (err) {
            console.error('Error en la consulta:', err);
            reject(err);
          } else {
            resolve(results);
          }
          connection.release(); // Importante liberar la conexión cuando hayas terminado
        });
      });
    })
    .catch((error) => {
      console.error('Error en la conexión a la base de datos:', error);
      throw error;
    });
};

// En lugar de exportar getPacientesPorDoctor, exportamos getAllPatientsByDoctor
// export { getPacientesPorDoctor };
