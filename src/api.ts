export interface IPatientDetails {
  id: number;
  name: string;
  age: number;
}

export async function getPatients(): Promise<IPatientDetails[]> {
  const patients = [
    { id: 1, name: "Jeswin", age: 100 },
    { id: 2, name: "Satish", age: 101 },
    { id: 3, name: "Prabha", age: 111 }
  ];

  return patients;
}
