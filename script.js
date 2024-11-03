document.getElementById('fan-form').addEventListener('submit',function(event) {
event.preventDefault();
const story = document.getElementById('story').value;
const storiesDiv = document.getElementById('fan-stories');
const newStory = document.createElement('p');
newStory.textContent = story;
storiesDiv.appendChild(newStory);
document.getElementById('fan-form').reset();
});

function showProfile(player) {
    alert(`Showing profile for: ${player}`);
}