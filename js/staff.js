const fetchStaff = () => {
    let data = fetch("data/staff.json")
    .then(responce => responce.json())
    .then(data => fillTable(data))
    .catch((err) => {
        console.error("ERROR Fetching JSON: ", err)
    })
}

function fillTable(staffList){
    const staffTable = document.getElementById(`staffTable`)
    staffList.forEach(member => {
        let { id, first_name, last_name, email } = member
        const row = document.createElement(`tr`)
        const nameCell = document.createElement(`td`)
        const emailCell = document.createElement(`td`)
        nameCell.textContent = `${first_name} ${last_name}`
        emailCell.textContent = email
        row.appendChild(nameCell)
        row.appendChild(emailCell)
        staffTable.appendChild(row)
    });
}

fetchStaff()