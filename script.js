
// 2. AUTHENTICATION LOGIC
const ASSIGNMENT_USER = 'admin';
const ASSIGNMENT_PASS = 'admin123';

function validateCredentials(inputUser, inputPass, requiredUser, requiredPass) {
    if(!inputUser || !inputPass) return false;
    return inputUser === requiredUser && inputPass === requiredPass;
}

function toggleLoadingSpinner(isLoading) {
    const spinner = document.getElementById('loading-spinner-container');
    const gridContainer = document.getElementById('issues-grid-container');
    if (isLoading) {
        spinner.classList.remove('hidden');
        gridContainer.classList.add('hidden');
    } else {
        spinner.classList.add('hidden');
        gridContainer.classList.remove('hidden');
    }
}

document.getElementById('auth-submit-btn').addEventListener('click', function(e) { 
    e.preventDefault();
    const enterUsername = document.getElementById('auth-admin-username').value;
    const enterPassword = document.getElementById('auth-admin-password').value;
    
    const isAuthorized = validateCredentials(enterUsername, enterPassword, ASSIGNMENT_USER, ASSIGNMENT_PASS);

    if (isAuthorized) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('auth-dashboard-wrapper').classList.remove('hidden');
        document.getElementById('auth-admin-username').value = '';
        document.getElementById('auth-admin-password').value = '';
        
        toggleLoadingSpinner(true);
        setTimeout(() => {
            renderIssueCards(localIssuesData, 'issues-grid-container');
            toggleLoadingSpinner(false);
        }, 800);
    } else {
        alert('Invalid credentials. Please use admin and admin123.');
    }
});

// 3. SEARCH LOGIC
const searchInput = document.getElementById('live-search-input');
searchInput.addEventListener('input', function(event) {
    const searchText = event.target.value.toLowerCase();
    
    if (!searchText) {
        renderIssueCards(localIssuesData, 'issues-grid-container');
        return;
    }

    const searchedIssues = localIssuesData.filter(issue => 
        issue.title.toLowerCase().includes(searchText)
    );
    renderIssueCards(searchedIssues, 'issues-grid-container');
});

// 4. TAB LOGIC
const tabAll = document.getElementById('tab-all');
const tabOpen = document.getElementById('tab-open');
const tabClosed = document.getElementById('tab-closed');

function setActiveTabStyle(activeButton) {
    const inactiveClasses = 'px-8 py-2 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-[14px] font-medium transition-all'.split(' ');
    const activeClasses = 'px-8 py-2 rounded-md bg-[#5200FF] text-white text-[14px] font-medium transition-all shadow-sm'.split(' ');

    [tabAll, tabOpen, tabClosed].forEach(tab => {
        tab.className = ''; 
        tab.classList.add(...inactiveClasses);
    });

    activeButton.className = ''; 
    activeButton.classList.add(...activeClasses);
}

tabAll.addEventListener('click', function() {
    setActiveTabStyle(tabAll);
    renderIssueCards(localIssuesData, 'issues-grid-container'); 
});

tabOpen.addEventListener('click', function() {
    setActiveTabStyle(tabOpen);
    const openIssues = localIssuesData.filter(issue => issue.status === 'open');
    renderIssueCards(openIssues, 'issues-grid-container');
});

tabClosed.addEventListener('click', function() {
    setActiveTabStyle(tabClosed);
    const closedIssues = localIssuesData.filter(issue => issue.status === 'closed');
    renderIssueCards(closedIssues, 'issues-grid-container');
});
