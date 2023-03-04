function solve(data, criteria){
    let employees = JSON.parse(data);
    let [criteriaName, criteriaValue] = criteria.split('-');

    let counter = -1;
    function filterEmployees(employee){
        if(employee[criteriaName] == criteriaValue){
            counter++;
            return `${counter}. ${employee['first_name']} ${employee['last_name']} - ${employee.email}`;
            
        }    
    }
    
    let filteredEmployees = employees.map(filterEmployees);
    for (let filteredEmployee of filteredEmployees){
        if (filteredEmployee != undefined){
            console.log(filteredEmployee);
        }
    }
}