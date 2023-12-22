let intervalId;     

function generateData() {   
    const table = document.getElementById("dataTable");     
    const newRow = document.createElement("tr");    

    for (let i = 1; i <= 3; i++) {       
        const cell = document.createElement("td"); 
        cell.textContent = Math.round(Math.random().toFixed(2)*100);   
        newRow.appendChild(cell);   
    }

    table.appendChild(newRow);  
}

function startGenerating() {   
    const interval = document.getElementById("interval").value;     
    intervalId = setInterval(generateData, interval);   
}

function stopGenerating() {    
    clearInterval(intervalId);      
}