
let CompleteName = prompt("Ingrese el nombre completo del empleado:");
let CompleteLastName = prompt("Ingrese los apellidos del empleado:");
let NumberID = prompt("Ingrese la cédula de identidad del empleado:");
let MorningHours = prompt("Ingrese la cantidad de horas trabajadas por el empleado en la mañana:");
let AfternoonHours = prompt("Ingrese la cantidad de horas trabajadas por el empleado en la tarde:");
let NigtHours = prompt("Ingrese la cantidad de horas trabajadas por el empleado en la noche:");
let BaseSalary = (MorningValue * MorningHours) + (AfternoonValue * AfternoonHours) + (NightValue * NigtHours);
let SalaryNotDeduccion = BaseSalary * 15;
let HousingSavings;
let SS;
let SalaryDeduccion = SalaryNotDeduccion - (HousingSavings * 2) - (SS * 2);
const MorningValue = 675;
const AfternoonValue = 700;
const NightValue = 956.23;

if (BaseSalary < 85000) {
  HousingSavings = BaseSalary * 0.001;
  SS = BaseSalary * 0.0015;
} else if (BaseSalary >= 85000 && BaseSalary <= 150000) {
  HousingSavings = BaseSalary * 0.0015;
  SS = BaseSalary * 0.002;
} else {
  HousingSavings = BaseSalary * 0.003;
  SS = BaseSalary * 0.0025;
}

console.log(`Los datos del empleado son:`);
console.log(`Nombre: ${CompleteName}`);
console.log(`Apellido: ${CompleteLastName}`);
console.log(`Cédula: ${NumberID}`);
console.log(`El Sueldo quincenal del empleado sin deducciones es: ${SalaryNotDeduccion} Bs. F.`);
console.log(`El Descuento de ahorro habitacional del empleado es: ${HousingSavings * 2} Bs. F.`);
console.log(`El Descuento de seguro social del empleado es: ${SS * 2} Bs. F.`);
console.log(`El Sueldo quincenal del empleado con deducciones es: ${SalaryDeduccion} Bs. F.`);