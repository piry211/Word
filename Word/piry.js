let servers = [];
let friends = [];
let activeServer = null;

function showCreateServerForm() {
    document.getElementById('create-server-form').classList.remove('hidden');
}

function hideCreateServerForm() {
    document.getElementById('create-server-form').classList.add('hidden');
}

function createServer() {
    const serverName = document.getElementById('new-server-name').value.trim();
    if (serverName) {
        servers.push({ name: serverName, messages: [] });
        updateServerList();
        hideCreateServerForm();
    } else {
        alert('Please enter a server name.');
    }
}

function updateServerList() {
    const serverList = document.getElementById('server-list');
    serverList.innerHTML = '';
    servers.forEach((server, index) => {
        const serverItem = document.createElement('li');
        serverItem.textContent = server.name;
        serverItem.onclick = () => selectServer(index);
        serverList.appendChild(serverItem);
    });
}

function selectServer(index) {
    activeServer = servers[index];
    document.getElementById('message-input').disabled = false;
    document.getElementById('send-btn').disabled = false;
    renderMessages();
}

function renderMessages() {
    const chatSection = document.getElementById('chat-section');
    chatSection.innerHTML = '';
    if (activeServer) {
        activeServer.messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatSection.appendChild(messageElement);
        });
    }
}

function sendMessage() {
    const message = document.getElementById('message-input').value.trim();
    if (message && activeServer) {
        activeServer.messages.push(message);
        renderMessages();
        document.getElementById('message-input').value = '';
    }
}

function openUserSettings() {
    document.getElementById('user-settings-modal').classList.remove('hidden');
}

function closeUserSettings() {
    document.getElementById('user-settings-modal').classList.add('hidden');
}

function saveSettings() {
    const username = document.getElementById('username').value.trim();
    if (username) {
        alert('Settings saved for ' + username);
        // Save the username to a variable or localStorage if needed
        closeUserSettings();
    } else {
        alert('Please enter a username.');
    }
}

function showAddFriendForm() {
    document.getElementById('add-friend-form').classList.remove('hidden');
}

function hideAddFriendForm() {
    document.getElementById('add-friend-form').classList.add('hidden');
}

function addFriend() {
    const friendUsername = document.getElementById('friend-username').value.trim();
    if (friendUsername) {
        friends.push(friendUsername);
        updateFriendList();
        hideAddFriendForm();
    } else {
        alert('Please enter a friend\'s username.');
    }
}

function updateFriendList() {
    const friendList = document.getElementById('friend-list');
    friendList.innerHTML = '';
    friends.forEach(friend => {
        const friendItem = document.createElement('li');
        friendItem.textContent = friend;
        friendList.appendChild(friendItem);
    });
}

