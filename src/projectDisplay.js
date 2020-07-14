import {todoRender} from './todoDisplay';
import dropdown from './projectDropdown';
import {projectListeners} from './projectEvents';
const projects = document.querySelector('#projects');
const collapse = projects.querySelector('.collapsible');
const content = projects.querySelector('.content');
const notesPopup = document.querySelector('.popup-container');
const closePopup = document.querySelector('#close-popup');

function circle() {
    let circle = document.createElement('p');
    circle.classList.add('project-circle');
    circle.textContent = 'o';

    return circle;
}

function name(name_) {
    let name = document.createElement('h3');
    name.classList.add('project-name');
    name.textContent = name_;

    return name;
}

const projectRender = {
    render(project) {
        console.log('project is rendering');
        console.log(project);

        // each project is a div with 3 items: circle, name and dropdown
        let div = document.createElement('div');
        div.classList.add('project');
        projectListeners.select(div, project);

        div.appendChild(circle());
        div.appendChild(name(project.getName()));
        div.appendChild(dropdown());

        content.appendChild(div);
    },
    renderProjects() {
        let maxHeight = window.getComputedStyle(content).maxHeight;
        this.classList.toggle("active");
        if (maxHeight === '0px') {
            console.log(maxHeight);
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    },
    renderNotesPopup() {
        console.log(notesPopup);
        notesPopup.classList.toggle('show');
    },
    hideNotesPopup() {
        notesPopup.classList.toggle('show');
    },
    removeProjectElement(projectElement) {
        projectElement.parentNode.removeChild(projectElement);
    },
    updateProjectElement(projectElement, projectName) {
        console.log(projectElement);
        projectElement.removeChild(projectElement.lastElementChild);

        projectElement.appendChild(circle());
        projectElement.appendChild(name(projectName));
        projectElement.appendChild(dropdown());
    },
    selectProject(projectElement, project) {
        if (projectElement.classList.contains('active-project')) return;
        projectElement.classList.add('active-project');
        console.log('todos of current project are rendering');
        todoRender.renderProjectHeading(project.getName());
        todoRender.renderAddTodo();
        let currentTodos = project.getTodos();
        currentTodos.forEach(todo => todoRender.render(todo));
    },
    renderDropdown() {
        console.log('ok');
        const dropDownContent = this.parentNode.querySelector('.dropdown-content');
        dropDownContent.classList.toggle('show');
    }
}

closePopup.addEventListener('click', projectRender.hideNotesPopup);
collapse.addEventListener('click', projectRender.renderProjects);

export {projectRender};