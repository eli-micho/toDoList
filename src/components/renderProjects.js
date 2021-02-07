const listOfProjects = [];


const createNewProject = () => {
    const newProjForm = document.querySelector('#newProjectForm');
    if(newProjForm.style.display == 'none'){
        newProjForm.style.display = 'block';
    }else {
        return false;
    }
};

const closeForm = () => {
    const newProjForm = document.querySelector('#newProjectForm');
    if(newProjForm.style.display == 'block'){
        newProjForm.style.display = 'none';
    }else{
        return false;
    }
};

const renderProjects = (() => {
    const projectTabWrap = document.querySelector('.projectTabWrap');
    const heading = document.createElement('h3');
    heading.textContent = "Projects";

    const addNewProjBtn = document.createElement('button');
    addNewProjBtn.innerHTML = "Create New Project";
    addNewProjBtn.addEventListener('click', createNewProject)

    const newProjectForm = document.createElement('div');
    newProjectForm.style.display = 'none';
    newProjectForm.setAttribute('id', 'newProjectForm')
    
    const newProjectTitle = document.createElement('input');
    newProjectTitle.setAttribute('type', 'text');
    newProjectTitle.setAttribute('placeholder', 'Enter Project Title...')

    const addBtn = document.createElement('span');
    addBtn.textContent = 'Add';
    addBtn.classList.add('btn');

    const cancelBtn = document.createElement('span');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('btn');
    cancelBtn.addEventListener('click', closeForm)

    newProjectForm.appendChild(newProjectTitle);
    newProjectForm.appendChild(addBtn)
    newProjectForm.appendChild(cancelBtn);

    const projectList = document.createElement('ul');
    projectList.classList.add('projectList');

    projectTabWrap.appendChild(heading);
    projectTabWrap.appendChild(addNewProjBtn);
    projectTabWrap.appendChild(newProjectForm);
    
})();

export { renderProjects }
