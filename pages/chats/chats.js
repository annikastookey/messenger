let chatsHistory = {
  conversations: [
    {
      date: "11.11.21",
      time: "4:35pm",
      contact: "Kevin Martell",
      "last message":
        "Hello All: I do understand that some of the videos do link up. The solution is to go to youtube and enter in the topic/title and find a reasonable replacement, for example: https://www.youtube.com/watch?v=8L6IQcqwkek https://www.youtube.com/watch?v=i85SXP0QwA8 The goal is to complete the activity sheets in order to attain an understanding of the French Revolution so you will have the historical evidence when you eventually do the comparison of the American and French Revolutions. Take care, Kevin",
      //the messages are losing all of their formatting (line breaks, etc.)
    },
    {
      date: "11.16.21",
      time: "6:15pm",
      contact: "Kerry Jackson",
      "last message":
        "Students, I’m writing to let you know that your Midterm Progress Report is now viewable on your Progress Page on myGMVS. Please read through your teachers’ comments. Give yourselves credit for all the hard work you put in this fall, and if there are any disappointments, work to create a plan for improving. Talk with teachers if you have questions, and please let me know if you need any help. I’ll be letting your parents know they can view grades in an hour (7:15 EST) but as always want you to have an advance view. I look forward to having you all back on campus! Kerry",
    },
  ],
};

window.onload = initialize;

function initialize() {
  console.log("initializing");
  document.getElementById("newButton").addEventListener("click", createNewChat);
  for (let chat of chatsHistory.conversations) {
    let innerText = chat["last message"];
    innerText = innerText.replace(/(?:\r\n|\r|\n)/g, "<br>");
    let bubbleDiv = document.createElement("div");
    bubbleDiv.innerHTML = innerText;
    bubbleDiv.classList.add("chat-bubble");
    let labelDiv = document.createElement("div");
    labelDiv.innerHTML = chat.contact;
    labelDiv.classList.add("chat-label");
    let containerDiv = document.createElement("div");
    containerDiv.appendChild(labelDiv);
    containerDiv.appendChild(bubbleDiv);
    let chatsDiv = document.getElementById("chats-div");
    chatsDiv.appendChild(containerDiv);
  }
  //need to loop through sample data and create a new div for every data set and append to chats page
  //TODO - let obj = JSON.parse()
}

function createNewChat() {
  //create a new sample data file like in chat.js
  //append to sample data, and manually create new div for this new chat data
  //does 2 things: add new chat to list of chats stored in data, add it to visible page
  let d = new Date();
  let newConversation = {
    date: d.getDate(),
    time: d.getTime(),
    contact: "Em Dawg",
    "last message": "",
  };
  chatsHistory.conversations.push(newConversation);
  window.location.href = "../chat/chat.html";
}
