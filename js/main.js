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

    if (!section){
        return null;
    }
    else{
        section.toggle('hide');
        return false;
    }
}

function toggleCommentButton(postId){
    if (!postId) return;

    const section = document.getElementById('data-post-id == ${postId}');
    return section;
}

function deleteChildElements(parentElement){

    if (!parentElement?.tagName) return;

    while (parentElement.lastChild) {
        parentElement.removeChild(parentElement.lastChild);
    }

    return parentElement;

}

function addButtonListeners(){

    let counter = 1;
    let button  = document.getElementById( "button" + counter);
    while ( button ){
        button.addEventListener("click", function(e){toggleComments(e, postId)}, false);
        button  = document.getElementById( "button" + ( ++counter ) + "menu" );
        return button;
    }
    //buttons.push(document.querySelectorAll('button'));
    //buttons.addEventListener("click", function (e){toggleComments(e, postId)}, false);
    return button;

}

function removeButtonListeners(){

}

function createComments(param){

    if (!param) return;
    let frag = document.createDocumentFragment();
    param.forEach((para) => {
        const rtickle = document.createElement("article");
        const h3Element = createElemWithText('h3', para.name);
        const paraElem = createElemWithText('p', para.body)
        const paraElem1 = createElemWithText('p', 'From: ' + para.email);
        rtickle.append(h3Element);
        rtickle.append(paraElem);
        rtickle.append(paraElem1);
        frag.append(rtickle);
    });
    return frag;
}

function populateSelectMenu(param){

    if (!param) return;

    let selectElem = document.querySelector('#selectMenu');
    let selectOpts = createSelectOptions(param);
    
    /*for (let i = 0; i < selectOpts.length; i++){
        selectElem += selectElem.append(i);
    }*/

    return selectElem;
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
    let secElement = document.createElement("section");
    secElement.dataset.postId = postId;
    secElement.classList.add("comments", "hide");
    const comments = await getPostComments(postId);
    const fragment = createComments(comments);
    secElement.append(fragment);
    return secElement;
}

function createPosts(param){
    if (!param) return;
    let frag = document.createDocumentFragment();

    param.forEach((para) => {
        const rtickle = document.createElement("article");
        const h2Element = createElemWithText('h2', para.title);
        const paraElem = createElemWithText('p', para.body)
        const paraElem1 = createElemWithText('p', 'Post ID: ' + para.id);
        const paraElem2 = document.createElement('p'); //stub
        const paraElem3 = document.createElement('p'); //stub
        const button = document.createElement("button"); //stub
        const section = document.createElement("section"); //stub
        rtickle.append(h2Element);
        rtickle.append(paraElem);
        rtickle.append(paraElem1);
        rtickle.append(paraElem2);
        rtickle.append(paraElem3);
        rtickle.append(button);
        rtickle.append(section);
        frag.append(rtickle);
    });
    return frag;
}

const displayPosts = async(postsData) => {
    if (!postsData) return ("P");
    const mainElem = document.querySelector("#main");
    //if (!postsData
    let frag = document.createDocumentFragment();
    const test = document.createElement("test");
    const newTest = document.createElement("newtest");
    const newestTest = document.createElement("newesttest");
    frag.append(test);
    frag.append(newTest);
    frag.append(newestTest);
    //mainElem.append(frag);
    return frag;

}

function toggleComments(firstParam, secondParam){

    if (!firstParam && !secondParam) return;

    event.target.listener = true;
    
}

function refreshPosts(param){

    if (!param) return;
    let results = []; //stub
    return results; //stub
}

const selectMenuChangeEventHandler = async(event) =>{

    let err_ray = [];
    let refreshPostsArray = []; //review and change implementation
    let userID = event?.target?.value;
    let posts = []; //await getUserPosts(userID);
    posts.push("test"); //stub
    refreshPostsArray.push("test"); //stub
    
    err_ray.push(userID);
    err_ray.push(posts);
    err_ray.push(refreshPostsArray);

    return err_ray;

}

function initPage(){

}

function initApp(){
}