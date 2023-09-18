
//Write down a nested object to store data of company employees

const company = {
    name: "ABC Inc.",
    Place: "Pune",
    employees: [
    {
        id: 101,
        name: "Priyal Shrivastava",
        department: "Engineering",
        position: "Software Engineer",
        salary: 800000,
    },
    {
        id: 1002,
        name: "Aagman Mehto",
        department: "Marketing",
        position: "Marketing Manager",
        salary: 900000,
    },
    {
        id: 1003,
        name: "Mohit Patel",
        department: "Human Resources",
        position: "HR Specialist",
        salary: 900000,
    },
    {
        id: 1004,
        name: "Ranjana Jaiswal",
        department: "Back Office Support",
        position: "Back Offic Specialist",
        salary: 600000,
    },
    ],
};
  
  console.log(company.name);
  console.log(company.Place);
  console.log(company.employees[0].name);
  console.log(company.employees[1].position);
  console.log(company.employees[2].name);
  console.log(company.employees[3].name)