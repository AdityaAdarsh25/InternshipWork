let allEmployees=[]

function loadEmployees(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        if(!response.ok){
            throw new Error("failed to fetch");
        }
        return response.json();
    })
    .then(employees=>{
        allEmployees=employees;
        displayEmployees(allEmployees);
    })
    .catch(error=>{
        alert("Error loading employees");
        console.log(error);
    });
}

function displayEmployees(employees){
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
    document.getElementById("employeeList").innerHTML=output;
}

document.getElementById("searchBtn").addEventListener("click",()=>{
    const query=document.getElementById("searchInput").value.trim().toLowerCase();
    if(!query){
        displayEmployees(allEmployees);
    }
    const filtered=allEmployees.filter(emp=>{
        return emp.name.toLowerCase().includes(query)
    });

    displayEmployees(filtered);
})