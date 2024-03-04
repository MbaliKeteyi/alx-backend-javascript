export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList.reduce((acc, employee) => {
      const department = employee.department;
      if (!acc[department]) {
        acc[department] = [];
      }
      acc[department].push(employee.name);
      return acc;
    }, {})
  };

  return {
    allEmployees,
    getNumberOfDepartments: function() {
      return Object.keys(allEmployees).length;
    }
  };
}

