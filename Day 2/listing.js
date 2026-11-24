function loadEmployees(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        if(!response.ok){
            throw new Error("failed to fetch");
        }
        return response.json();
    })
    .then(employees=>{
        let output="";

        employees.forEach(emp=>{
            output+=`
            <div>
                <h3>${emp.name}</h3>
                <p>${emp.email}</p>
                <p>${emp.phone}</p>
            </div>
            `;
        });
        document.getElementById("employeeList").innerHTML = output;
    })
    .catch(error=>{
        alert("Error loading employees");
        console.log(error);
    });
}

