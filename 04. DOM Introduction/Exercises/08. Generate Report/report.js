function generateReport() {
    const checkedBoxes = Array.from(
        document.querySelectorAll('thead tr th input')
    );

    const result = [];
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    trs.forEach((row) => {
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((element, i) =>{
            if (checkedBoxes[i].checked){
                current[checkedBoxes[i].name] = element.textContent;
            }
        });
        result.push(current);
    });

    const output = document.getElementById('output');
    output.value = JSON.stringify(result);
}