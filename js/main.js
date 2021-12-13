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

    const section = document.getElementById('data-post-id == ${postId}');
    return section;
}

function toggleCommentButton(postId){
    if (!postId) return;

    const section = document.getElementById('data-post-id == ${postId}');
    return section;
}

function deleteChildElements(parentElement){

    if (!parentElement) return;

    //const parElem = "${parentElement}".html();

   // let childElem = parElem.lastElementChild;
    
    /*while (childElem != NULL && childElem != 'undefined'){
        childElem = parentElement.removeChild;
        childElem = parentElement.lastChild;
    }*/

    return parentElement;

}

function addButtonListeners(){

}

function removeButtonListeners(){

}

function createComments(param){

    if (!param) return;
    let frag = document.createDocumentFragment();
    return frag;
}

function populateSelectMenu(){
    
}

const getUsers = async() => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/");
        if (!res.ok) throw new Error("Status code not in 200-299 range");
        return await res.json();
    } catch(err){
        console.error(err);
    }
}

const getUserPosts = async(userID) => {
    try{
        if (!userID) return;
        let filler = userID;
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + filler + '/posts');
        if (!res.ok) throw new Error("Status code not in 200-299 range");
        return await res.json();
    } catch(err){
        console.error(err);
    }
}

const getUser = async (userId) => {
    try{
        
        if (!userId) return;
        let filler = userId;
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + filler);
        if (!res.ok) throw new Error("Status code not in 200-299 range");
        return await res.json();
    } catch(err){
        console.error(err);
    }
}


const getPostComments = async(postId) => {
    try{    
        if (!postId) return;
        let filler = postId;
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + filler + '/comments');
        if (!res.ok) throw new Error("Status code not in 200-299 range");
        return await res.json();
    } catch(err){
        console.error(err);
    }
    
}

const displayComments = async(postId) =>{
    if (!postId) return;
    let filler = postId;
    const secElement = document.createElement();
    const comments = await getPostComments(postId);

}

function createPosts(){

}

function displayPosts(){

}

function toggleComments(firstParam, secondParam){

    if (!firstParam && !secondParam) return;

    event.target.listener = true;
    
}

function refreshPosts(){

}

function selectMenuChangeEventHandler(){

    let err_ray = [];

    return err_ray;

}

function initPage(){

}

function initApp(){

}