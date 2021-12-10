function createElemWithText(elemType = "p", textContent = "", className){
    const myElem = document.createElement(elemType);
    myElem.id = "stuff";
    myElem.textContent = textContent;
    if (className) myElem.classList.add(className);
    return myElem;
}

function createSelectOptions(jsonData){

    if (!jsonData) return;

    let err_ray = [];

    for (let i = 0; i < jsonData.length; i++){

        let optElem = document.createElement("OPTION");
        optElem.value = jsonData[i].id;
        optElem.textContent = jsonData[i].name;
        err_ray.push(optElem)
    }

    return err_ray;
}

function toggleCommentSection(postId){

    if (!postId) return;



}

function toggleCommentButton(postId){
    if (!postId) return;
}

function deleteChildElements(parentElement){

    if (!parentElement) return;
    let childElem = parentElement.lastElementChild;
    
    while (childElem != NULL){
        parentElement.removeChild;
        childElem = parentElement.lastChild;
    }

    return parentElement;

}

function addButtonListeners(){

}

function removeButtonListeners(){

}

function createComments(){

}

function populateSelectMenu(){
    
}

function getUsers(){

}

function getUserPosts(){

}

function getUser(){

}

function getPostComments(){
    
}

function displayComments(){

}

function createPosts(){

}

function displayPosts(){

}

function toggleComments(){
    
}

function refreshPosts(){

}

function selectMenuChangeEventHandler(){

}

function initPage(){

}

function initApp(){

}