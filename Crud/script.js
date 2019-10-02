var selectedRow = null

function onFormSubmit() {
    if(validate() && validate2() && validate3()&& validate4()&& validate5()){
        var formData = readFormData()
            if (selectedRow == null){
                insertNewRecord(formData)
                sum()
                projects()
            }
            else
                updateRecord(formData)
        resetForm()
    }
}


function readFormData() {
    var formData = {}
    formData["fullName"] = document.getElementById("fullName").value
    formData["stack"] = document.getElementById("stack").value
    formData["valor"] = document.getElementById("valor").value
    formData["dias"] = document.getElementById("dias").value
    formData["devs"] = document.getElementById("devs").value
    return formData
}

// function insertNewRecord(data){
//         var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
//         var newRow = table.insertRow(table.length)
//         cell1 = newRow.insertCell(0)
//         cell1.innerHtml = data.fullName
//         cell2 = newRow.insertCell(1)
//         cell2.innerHtml = data.cep
//         cell3 = newRow.insertCell(2)
//         cell3.innerHtml = data.salary
//         cell4 = newRow.insertCell(3)
//         cell4.innerHtml = data.city
//         cell4 = newRow.insertCell(4)
//         cell4.innerHtml = `<a>Edit</a><a>Delete<a/>`
//         console.log(newRow)
//         console.log(cell1)
//     }    
function insertNewRecord(data){
    var table = document.getElementById("crudAcens").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullName
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.stack
    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.valor
    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.dias
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.devs
    cell5 = newRow.insertCell(5)
    cell5.innerHTML = `<a style="text-decoration: none" onClick="onEdit(this)">&#128221;</a>
                        <a style="text-decoration: none" onClick="onDelete(this)">&#10060;</a>`
}

function resetForm(){
    document.getElementById("fullName").value = ""
    document.getElementById("stack").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("dias").value = ""
    document.getElementById("devs").value = ""
    selectedRow = null
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML
    document.getElementById("stack").value = selectedRow.cells[1].innerHTML
    document.getElementById("valor").value = selectedRow.cells[2].innerHTML
    document.getElementById("dias").value = selectedRow.cells[3].innerHTML
    document.getElementById("devs").value = selectedRow.cells[4].innerHTML

}

function sum() {
        let tabela = document.getElementById("crudAcens")
        let rows = tabela.rows
        let sum = 0
        for (let i = 1; i < rows.length; i++) {
            sum += Number(rows[i].cells[2].textContent)
        }
        let soma = document.getElementById('soma')
        let projeto = (sum/270).toFixed(1)
        soma.innerHTML = `<h3> Valor dos projetos R$${sum},00, ${projeto}% da meta!!  </h3>`
        soma.style.color = '#084208'
}

function projects(){
    let tabela = document.getElementById("crudAcens")
    let rows = tabela.rows
    let nProj = (Number(rows.length)-1)
    let projects = document.getElementById('projects')
    projects.innerHTML = `<h4> Quantidade de projetos ${nProj}/18!! </h4>`
    projects.style.color = '#084208'
        if((nProj % 3) == 0){
            document.body.style.background = '#dfbe2b'
        } else if((nProj % 3) == 1){
            document.body.style.background = '#1eaa25'
        } else if((nProj % 3) == 2){
            document.body.style.background = '#e97516'
        }
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullName
    selectedRow.cells[1].innerHTML = formData.stack
    selectedRow.cells[2].innerHTML = formData.valor
    selectedRow.cells[3].innerHTML = formData.dias
    selectedRow.cells[4].innerHTML = formData.devs
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
        row = td.parentElement.parentElement
        document.getElementById("crudAcens").deleteRow(row.rowIndex)
        resetForm()
    }
    sum()
    projects()
}

function validate(){
    isValid = true
        if(document.getElementById("fullName").value == ""){
            isValid = false
            document.getElementById("fullNameValidationError").classList.remove("hide")
        } else{
            isValid = true
            if(!document.getElementById("fullNameValidationError").classList.contains("hide")){
                document.getElementById("fullNameValidationError").classList.add("hide")                
            }
        }
    return isValid    
}
function validate2(){
    isValid = true
        if(document.getElementById("stack").value == ""){
            isValid = false
            document.getElementById("stackValidationError").classList.remove("hide")
        } else{
            isValid = true
            if(!document.getElementById("stackValidationError").classList.contains("hide")){
                document.getElementById("stackValidationError").classList.add("hide")                
            }
        }
    return isValid    
}
function validate3(){
    isValid = true
        if(document.getElementById("valor").value == ""){
            isValid = false
            document.getElementById("valorValidationError").classList.remove("hide")
        } else{
            isValid = true
            if(!document.getElementById("valorValidationError").classList.contains("hide")){
                document.getElementById("valorValidationError").classList.add("hide")                
            }
        }
    return isValid    
}
function validate4(){
    isValid = true
        if(document.getElementById("dias").value == ""){
            isValid = false
            document.getElementById("diasValidationError").classList.remove("hide")
        } else{
            isValid = true
            if(!document.getElementById("diasValidationError").classList.contains("hide")){
                document.getElementById("diasValidationError").classList.add("hide")                
            }
        }
    return isValid    
}
function validate5(){
    isValid = true
        if(document.getElementById("devs").value == ""){
            isValid = false
            document.getElementById("devsValidationError").classList.remove("hide")
        } else{
            isValid = true
            if(!document.getElementById("devsValidationError").classList.contains("hide")){
                document.getElementById("devsValidationError").classList.add("hide")                
            }
        }
    return isValid    
}