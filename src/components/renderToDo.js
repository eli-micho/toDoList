const main = document.querySelector('.main');

const addToDo = () => {
    const li = document.createElement('li');
    const itemValue = document.getElementById('title').value;
    const text = document.createTextNode(itemValue);

    li.appendChild(text);

    if (itemValue === '') {
        alert('Missing task title');
    }else {
        document.querySelector('.toDoDiv').appendChild(li)
    }
    document.getElementById('title').value = '';
    document.getElementById('dueDate').valueAsDate = new Date()

  /*   const span = document.createElement('span');
    const listText = document.createTextNode('\u00D7');
    
    span.classList.add('delete');
    span.appendChild(listText);
    li.appendChild(span); */
    
};

const renderToDo = (() => {
    const toDoWrap = document.createElement('div');
    const title = document.createElement('input');
    const dueDate = document.createElement('input');
    const highPriority = document.createElement('input');
    const addBtn = document.createElement('span');

    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('id', 'title');

    dueDate.setAttribute('type', 'date');
    dueDate.valueAsDate = new Date();
    dueDate.setAttribute('id', 'dueDate');

    highPriority.setAttribute('type', 'radio');

    addBtn.textContent = 'Add';
    addBtn.classList.add('addBtn');
    addBtn.addEventListener('click', addToDo)

    toDoWrap.classList.add('toDoDiv');

    toDoWrap.appendChild(title);
    toDoWrap.appendChild(dueDate);
    toDoWrap.appendChild(highPriority);
    toDoWrap.appendChild(addBtn);

    main.appendChild(toDoWrap);
    
})();

export { renderToDo };
