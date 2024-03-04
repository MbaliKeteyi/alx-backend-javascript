export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentEmployeeIndex >= departments[currentDepartmentIndex].length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
      }

      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      return {
        done: false,
        value: departments[currentDepartmentIndex][currentEmployeeIndex++]
      };
    }
  };
}

