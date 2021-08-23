document.getElementById('add-border').addEventListener('click', function () {

    const container = document.getElementById('friend-container');

    container.style.border = '3px solid red';
});
//class using

function addBackgroundColor(){

const friends = document.getElementsByClassName('friend');
for(const friend of friends){
    friend.style.backgroundColor = 'lightblue';
}
}

//add friend
document.getElementById('add-friend').addEventListener('click', function () {

    const container = document.getElementById('friend-container');

    const friendDiv = document.createElement('div');
    
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
<h3 class="friend-name"> New Friend</h3>
     <p>Eligendi, perspiciatis.</p>
     `;

     container.appendChild(friendDiv);
});