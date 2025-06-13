import { MedicalRecord } from './record/MedicalRecord.js';
import { Allergy } from './Allergy.js';
import { Diagnosis } from './record/Diagnosis.js';
import { Treatment } from './record/Treatment.js';
import { Medication } from './record/Medication.js';

export class Patient {
  constructor(
    id,
    identificationDocument,
    name,
    birthDate,
    gender,
    bloodType,
    address,
    phone,
    email,
    emergencyContact,
  ) {
    this.id = id;
    this.identificationDocument = identificationDocument;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.allergies = [];
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;
    this.appointments = [];
    this.exams = [];
    this.medicalRecord = new MedicalRecord();
  }

  addExam(exam) {
    this.exams.push(exam);
    console.log(`Exam ${exam.type} added with result: ${exam.result}`);
  }

  scheduleAppointment(appointment) {
    const hasAppointmentAtSameTime = this.appointments.some(
      (a) => a.date.getTime() === appointment.date.getTime(),
    );

    if (hasAppointmentAtSameTime) {
      throw new Error('Patient already has an appointment schedule for this time.');
    }

    this.appointments.push(appointment);
    console.log(
      `Appointment scheduled for ${appointment.date} with ${appointment.doctor.name}`,
    );
  }
}