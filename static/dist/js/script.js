// fonction pour cloner le block de message
// le querySelector c'est pour sélectionner un élément
function cloneAnswerBlock() {
    const output = document.querySelector("#gpt-output");
    const template = document.querySelector('#chat-template');
    const clone = template.cloneNode(true);
    // on remet l'id a zéro pour qu'il ne contienne pas l'ancien message
    clone.id = "";
    output.appendChild(clone);
    // on enlève le hidden pour afficher le message qu'on a entrer puisqu'à la base il est caché
    clone.classList.remove("hidden")
    return clone.querySelector(".message");
}
// fonction pour écrire un nouveau message
function addToLog(message) {

    const answerBlock = cloneAnswerBlock();
    answerBlock.innerText = message;
    return answerBlock;
}
// fonction pour voir l'historique des messages échanger entre le gpt et l'individu
function getChatHistory() {
    const messageBlocks = document.querySelectorAll('.message:not(#chat-template .message)');

    return Array.from(messageBlocks).map(block=> block.innerHTML)

    }