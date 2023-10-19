export interface Doctor {
  dni: string;
  password: string;
  name: string;
  area: string;
  description: string;
  patients: number;
  years: number;
  age: number;
  email: string;
  cost: number;
  photo: string;
  education: Array<Object>;
  hoursAvailable:Array<Object>;
}
