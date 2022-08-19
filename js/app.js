
let count = 0;

document.getElementById('add-item').addEventListener('click', function () {
    count++
    const input_Text = document.getElementById('list-name').value;
    const contentContainer = document.getElementById('content-container');

    let tableContainer = document.createElement('tr');

    tableContainer.innerHTML = `<th>${count}</th>
    <td>${input_Text}</td>
    <td>
    <button class="btn btn-delete bg-red-400">Delete</button>
    <button class="btn btn-done bg-green-200">Done</button>
    </td>`;
    contentContainer.appendChild(tableContainer);
    document.getElementById('list-name').value = '';

    const deleteBtn = document.getElementsByClassName('btn-delete');
    for (let btn of deleteBtn) {
        btn.addEventListener('click', function (event) {

            event.target.parentNode.parentNode.style.display = 'none';

        });
    }

    const doneBtn = document.getElementsByClassName('btn-done');
    for (let btn of doneBtn) {
        btn.addEventListener('click', function (event) {

            // event.target.parentNode.parentNode.style.split = 'line-through';
            // event.stopImmediatePropagation();
            event.target.parentNode.parentNode.style.display = 'none';

        });
    }


    const clearAll = document.getElementById('clear-all').addEventListener('click', function (event) {
        document.getElementById('content-container').style.display = 'none';
        // event.target.parentNode.style.display = 'none';
    });



});