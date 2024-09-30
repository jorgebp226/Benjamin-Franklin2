// src/api/index.js
import { API, graphqlOperation } from 'aws-amplify';
import { listVirtues, getVirtueRecordsByVirtueAndDate } from './graphql/queries';
import { createVirtueRecord, updateVirtueRecord } from './graphql/mutations';

// Obtener todas las virtudes
export const getVirtues = async () => {
  try {
    const virtueData = await API.graphql(graphqlOperation(listVirtues));
    return virtueData.data.listVirtues.items;
  } catch (error) {
    console.error("Error fetching virtues:", error);
    return [];
  }
};

// Obtener registros de virtudes por virtud y rango de fechas
export const getVirtuesWithRecords = async (startDate, endDate) => {
  try {
    const variables = {
      virtueID: null, // Puedes filtrar por virtud específica si es necesario
      date: { between: [startDate, endDate] },
      sortDirection: "ASC",
    };
    const recordsData = await API.graphql(graphqlOperation(getVirtueRecordsByVirtueAndDate, variables));
    return recordsData.data.virtueRecordsByVirtueAndDate.items;
  } catch (error) {
    console.error("Error fetching virtue records:", error);
    return [];
  }
};

// Crear un nuevo registro de virtud
export const createVirtueRecordAPI = async (record) => {
  try {
    const newRecord = await API.graphql(graphqlOperation(createVirtueRecord, { input: record }));
    return newRecord.data.createVirtueRecord;
  } catch (error) {
    console.error("Error creating virtue record:", error);
  }
};

// Actualizar un registro de virtud existente
export const updateVirtueRecordAPI = async (record) => {
  try {
    const updatedRecord = await API.graphql(graphqlOperation(updateVirtueRecord, { input: record }));
    return updatedRecord.data.updateVirtueRecord;
  } catch (error) {
    console.error("Error updating virtue record:", error);
  }
};
