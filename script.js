
const postModal = document.getElementById('postModal');
const closeModal = document.getElementById('closeModal');

document.querySelector('.story-avatar').addEventListener('click', () => {
    postModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    postModal.classList.remove('active');
});

document.querySelectorAll('.post-action').forEach(btn => {
    btn.addEventListener('click', function () {
        this.textContent = this.textContent === '❤️' ? '❤️🔥' : '❤️';
    });
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

document.querySelector('.action-btn').addEventListener('click', () => {
    const postText = document.getElementById('postContent').value;
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
        <div class="post-header">
            <div class="post-avatar">JD</div>
            <div class="post-user">johndoe</div>
        </div>
        <div class="post-image">
            <img src="https://via.placeholder.com/400x300" alt="New Post">
        </div>
        <div class="post-actions">
            <button class="post-action">❤️</button>
            <button class="post-action">💬</button>
            <button class="post-action">🔗</button>
        </div>
        <div class="post-caption">
            <strong>johndoe</strong> ${postText}
        </div>
    `;
    document.querySelector('.app-main').prepend(newPost);
    postModal.classList.remove('active');
    document.getElementById('postContent').value = '';
});
