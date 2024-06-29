document.addEventListener("DOMContentLoaded", () => {
    const memberCountElement = document.getElementById('member-count');
    const joinButton = document.getElementById('join-btn');

    async function fetchMemberCount() {
        try {
            const response = await fetch('/api/member-count');
            const data = await response.json();
            memberCountElement.textContent = `${data.member_count} Members`;
        } catch (error) {
            console.error('Error fetching member count:', error);
            memberCountElement.textContent = 'Failed to load member count';
        }
    }

    fetchMemberCount();

    joinButton.addEventListener('click', () => {
        window.location.href = 'YOUR_DISCORD_INVITE_LINK';
    });
});
