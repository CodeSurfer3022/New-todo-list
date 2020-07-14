import {projectRender} from './projectDisplay';
import {projectList} from './project';

const projectListeners = {
    select(projectElement, project) {
        console.log(projectElement, project);
        projectElement.addEventListener('click', projectRender.selectProject.bind(this, projectElement, project));
    }
}
const saveForm = {
    update (project, projectElement) {
        console.log(project, projectElement);
        const projectName = document.editForm.projectName.value;
        project.edit(projectName);
        projectRender.updateProjectElement(projectElement, projectName);

    },
    addNotes(project) {
        console.log('saving notes');
        const notes = document.popupForm.notes.value;
        // console.log(notes);
        project.addNotes(notes)
        projectRender.hideNotesPopup();
        // let list = projectList.getList();
        // list.forEach(project => console.log(project.getNotes()));
    }
}

export  {projectListeners, saveForm};