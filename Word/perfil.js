function openProfileEdit() {
    document.getElementById('profile-edit-modal').classList.remove('hidden');
}

function closeProfileEdit() {
    document.getElementById('profile-edit-modal').classList.add('hidden');
}

function saveProfileChanges() {
    const newUsername = document.getElementById('edit-username').value.trim();
    if (newUsername) {
        document.getElementById('username-display').textContent = newUsername;
        closeProfileEdit();
    } else {
        alert('Please enter a username.');
    }
}

function openAvatarUpload() {
    document.getElementById('avatar-upload-modal').classList.remove('hidden');
}

function closeAvatarUpload() {
    document.getElementById('avatar-upload-modal').classList.add('hidden');
}

function uploadAvatar() {
    const fileInput = document.getElementById('avatar-upload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar-image').src = e.target.result;
        }
        reader.readAsDataURL(file);
        closeAvatarUpload();
    } else {
        alert('Please select an image file.');
    }
}

function changeProfileColor() {
    const color = document.getElementById('profile-color').value;
    document.querySelector('body').style.backgroundColor = color;
}
