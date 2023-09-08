import { getConnection } from "../database/database";

export const getPacientesPorDoctor = (req, res) => {
  // Obtén el doctorId de los parámetros de la solicitud
  const doctorId = req.params.doctorId;

  // Llama a getConnection para obtener una conexión a la base de datos
  getConnection()
    .then((connection) => {
      const query = 'SELECT * FROM Patients WHERE doctor_id = ?';

      connection.query(query, [doctorId], (err, results) => {
        if (err) {
          console.error('Error en la consulta:', err);
          res.status(500).json({ error: 'Error en la consulta' });
        } else {
          res.json(results);
        }
      });
    })
    .catch((error) => {
      console.error('Error en la conexión a la base de datos:', error);
      res.status(500).json({ error: 'Error en la conexión a la base de datos' });
    });
};

// Exporta la función del controlador
export default {
  getPacientesPorDoctor,
};
