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

    for (let i = 0; i < jsonData.length - 1; i++){

        let optElement = document.createElement("OPTION");
        optElement.value = i.id;
        optElement.textContent = i.name;
        err_ray += optElement;
    }

    return err_ray;
}

function toggleCommentSection(postId){

}

function toggleCommentButton(postId){

}

function deleteChildElements(){


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