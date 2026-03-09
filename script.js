// 1. 50 Issues
const localIssuesData = [
    { "id": 1, "title": "Fix navigation menu on mobile devices", "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.", "status": "open", "labels": ["bug", "help wanted"], "priority": "high", "author": "john_doe", "assignee": "jane_smith", "createdAt": "2024-01-15T10:30:00Z" },
    { "id": 2, "title": "Add dark mode support", "description": "Users are requesting a dark mode option. This would improve accessibility and user experience.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "medium", "author": "sarah_dev", "assignee": "", "createdAt": "2024-01-14T14:20:00Z" },
    { "id": 3, "title": "Update README with installation instructions", "description": "The README file needs better installation instructions for new contributors.", "status": "closed", "labels": ["documentation"], "priority": "low", "author": "mike_docs", "assignee": "sarah_dev", "createdAt": "2024-01-10T08:00:00Z" },
    { "id": 4, "title": "Performance issues with large datasets", "description": "Application becomes slow when loading more than 1000 items. Need to implement pagination or virtual scrolling.", "status": "open", "labels": ["bug", "enhancement"], "priority": "high", "author": "alex_perf", "assignee": "john_doe", "createdAt": "2024-01-18T11:00:00Z" },
    { "id": 5, "title": "Add user authentication system", "description": "Implement JWT-based authentication with login, registration, and password reset functionality.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "security_sam", "assignee": "john_doe", "createdAt": "2024-01-20T09:00:00Z" },
    { "id": 6, "title": "Fix broken image uploads", "description": "Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "emma_ui", "assignee": "", "createdAt": "2024-01-19T15:30:00Z" },
    { "id": 7, "title": "Improve search functionality", "description": "Add filters for advanced search including date ranges, status, and tags.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "search_guru", "assignee": "emma_ui", "createdAt": "2024-01-17T12:00:00Z" },
    { "id": 8, "title": "Database migration fails on production", "description": "The latest migration script fails when running on production database. Works fine locally.", "status": "open", "labels": ["bug"], "priority": "high", "author": "db_admin", "assignee": "alex_perf", "createdAt": "2024-01-21T08:45:00Z" },
    { "id": 9, "title": "Add export to PDF feature", "description": "Users want to export reports and dashboards to PDF format for sharing and printing.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "feature_fred", "assignee": "", "createdAt": "2024-01-16T10:15:00Z" },
    { "id": 10, "title": "Update dependencies to latest versions", "description": "Several npm packages are outdated and have security vulnerabilities. Need to update and test.", "status": "closed", "labels": ["documentation"], "priority": "medium", "author": "security_sam", "assignee": "john_doe", "createdAt": "2024-01-05T14:00:00Z" },
    { "id": 11, "title": "Create API documentation", "description": "Generate comprehensive API documentation using Swagger or similar tool.", "status": "open", "labels": ["documentation", "help wanted"], "priority": "medium", "author": "mike_docs", "assignee": "", "createdAt": "2024-01-22T09:30:00Z" },
    { "id": 12, "title": "Footer not displaying correctly on Safari", "description": "The footer overlaps with content on Safari browser. CSS issue with flexbox layout.", "status": "open", "labels": ["bug"], "priority": "low", "author": "browser_bob", "assignee": "emma_ui", "createdAt": "2024-01-18T16:20:00Z" },
    { "id": 13, "title": "Implement real-time notifications", "description": "Add WebSocket support for real-time notifications when issues are updated or commented on.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "realtime_ron", "assignee": "alex_perf", "createdAt": "2024-01-23T10:00:00Z" },
    { "id": 14, "title": "Add unit tests for authentication module", "description": "Authentication module lacks proper test coverage. Need to add Jest unit tests.", "status": "open", "labels": ["documentation", "good first issue"], "priority": "medium", "author": "test_tina", "assignee": "", "createdAt": "2024-01-12T11:45:00Z" },
    { "id": 15, "title": "Memory leak in dashboard component", "description": "Dashboard component causes memory leak after prolonged use. Need to investigate event listeners and cleanup.", "status": "open", "labels": ["bug"], "priority": "high", "author": "performance_pete", "assignee": "john_doe", "createdAt": "2024-01-24T13:15:00Z" },
    { "id": 16, "title": "Add multi-language support", "description": "Internationalize the application to support multiple languages including Spanish, French, and German.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "i18n_ivan", "assignee": "", "createdAt": "2024-01-11T09:00:00Z" },
    { "id": 17, "title": "Email notifications not being sent", "description": "Users report not receiving email notifications. SMTP configuration might be incorrect.", "status": "open", "labels": ["bug"], "priority": "high", "author": "mail_mary", "assignee": "security_sam", "createdAt": "2024-01-25T08:30:00Z" },
    { "id": 18, "title": "Refactor user settings page", "description": "User settings page code is messy and hard to maintain. Needs refactoring with better component structure.", "status": "closed", "labels": ["enhancement"], "priority": "medium", "author": "clean_code_carl", "assignee": "emma_ui", "createdAt": "2024-01-08T14:30:00Z" },
    { "id": 19, "title": "Add CSV export functionality", "description": "Allow users to export data tables to CSV format for analysis in spreadsheet applications.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "data_dan", "assignee": "", "createdAt": "2024-01-26T11:00:00Z" },
    { "id": 20, "title": "Login page shows error on slow connections", "description": "Login page displays timeout error when internet connection is slow. Need better error handling.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "network_nancy", "assignee": "security_sam", "createdAt": "2024-01-13T15:45:00Z" },
    { "id": 21, "title": "Implement two-factor authentication", "description": "Add 2FA support using TOTP for enhanced security on user accounts.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "security_sam", "assignee": "", "createdAt": "2024-01-27T09:15:00Z" },
    { "id": 22, "title": "Fix chart rendering issues", "description": "Charts don't render correctly when window is resized. Need to add responsive chart logic.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "chart_charlie", "assignee": "emma_ui", "createdAt": "2024-01-14T10:30:00Z" },
    { "id": 23, "title": "Add drag and drop file upload", "description": "Implement drag and drop functionality for file uploads to improve user experience.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "ux_uma", "assignee": "", "createdAt": "2024-01-28T12:00:00Z" },
    { "id": 24, "title": "API rate limiting not working", "description": "Rate limiting middleware is not properly throttling API requests. Need to debug and fix.", "status": "open", "labels": ["bug"], "priority": "high", "author": "api_adam", "assignee": "alex_perf", "createdAt": "2024-01-29T08:00:00Z" },
    { "id": 25, "title": "Create onboarding tutorial", "description": "New users need a guided tutorial to understand key features. Create interactive onboarding flow.", "status": "open", "labels": ["documentation", "enhancement"], "priority": "medium", "author": "tutorial_tom", "assignee": "mike_docs", "createdAt": "2024-01-15T13:30:00Z" },
    { "id": 26, "title": "Session timeout too aggressive", "description": "Users are being logged out too frequently. Need to adjust session timeout settings.", "status": "closed", "labels": ["bug"], "priority": "medium", "author": "session_steve", "assignee": "security_sam", "createdAt": "2024-01-09T11:00:00Z" },
    { "id": 27, "title": "Add keyboard shortcuts", "description": "Implement keyboard shortcuts for common actions to improve productivity for power users.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "shortcuts_shawn", "assignee": "", "createdAt": "2024-01-30T10:15:00Z" },
    { "id": 28, "title": "Profile picture upload fails", "description": "Users cannot upload profile pictures. Getting 413 error (payload too large).", "status": "open", "labels": ["bug"], "priority": "medium", "author": "avatar_alice", "assignee": "john_doe", "createdAt": "2024-01-16T14:45:00Z" },
    { "id": 29, "title": "Implement caching strategy", "description": "Add Redis caching for frequently accessed data to improve performance.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "cache_chris", "assignee": "alex_perf", "createdAt": "2024-01-31T09:30:00Z" },
    { "id": 30, "title": "Fix timezone display issues", "description": "Timestamps are showing in UTC instead of user's local timezone. Need to add timezone conversion.", "status": "open", "labels": ["bug", "good first issue"], "priority": "low", "author": "time_tony", "assignee": "", "createdAt": "2024-01-17T16:00:00Z" },
    { "id": 31, "title": "Add webhook support", "description": "Implement webhooks to allow external services to receive notifications on events.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "webhook_wendy", "assignee": "", "createdAt": "2024-02-01T11:20:00Z" },
    { "id": 32, "title": "Accessibility issues with form labels", "description": "Screen readers cannot properly identify form fields. Need to add proper ARIA labels.", "status": "open", "labels": ["bug", "help wanted"], "priority": "medium", "author": "a11y_andy", "assignee": "emma_ui", "createdAt": "2024-01-19T09:45:00Z" },
    { "id": 33, "title": "Add bulk operations support", "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.", "status": "open", "labels": ["enhancement"], "priority": "low", "author": "bulk_barry", "assignee": "", "createdAt": "2024-02-02T10:00:00Z" },
    { "id": 34, "title": "Broken links in documentation", "description": "Several links in the documentation are broken or pointing to outdated pages.", "status": "closed", "labels": ["documentation"], "priority": "low", "author": "link_larry", "assignee": "mike_docs", "createdAt": "2024-01-07T13:15:00Z" },
    { "id": 35, "title": "Add comment system for issues", "description": "Implement a commenting system so users can discuss and collaborate on issues.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "comment_cathy", "assignee": "john_doe", "createdAt": "2024-02-03T08:30:00Z" },
    { "id": 36, "title": "Password reset email not received", "description": "Users are not receiving password reset emails. Email service might be down or misconfigured.", "status": "open", "labels": ["bug"], "priority": "high", "author": "reset_rita", "assignee": "security_sam", "createdAt": "2024-01-20T15:30:00Z" },
    { "id": 37, "title": "Improve mobile responsiveness", "description": "Several pages are not mobile-friendly. Need to improve responsive design across the application.", "status": "open", "labels": ["bug", "help wanted"], "priority": "medium", "author": "mobile_mike", "assignee": "emma_ui", "createdAt": "2024-02-04T12:45:00Z" },
    { "id": 38, "title": "Add version control for documents", "description": "Implement version history so users can track changes and revert to previous versions.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "version_vince", "assignee": "", "createdAt": "2024-01-21T10:15:00Z" },
    { "id": 39, "title": "Fix sorting on data tables", "description": "Column sorting doesn't work correctly for numeric and date columns.", "status": "open", "labels": ["bug", "good first issue"], "priority": "low", "author": "sort_sally", "assignee": "", "createdAt": "2024-02-05T09:00:00Z" },
    { "id": 40, "title": "Implement activity logging", "description": "Add comprehensive activity logs for audit trail and debugging purposes.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "logger_leo", "assignee": "alex_perf", "createdAt": "2024-01-22T14:00:00Z" },
    { "id": 41, "title": "Dashboard widgets not loading", "description": "Some dashboard widgets fail to load intermittently. Getting CORS errors in console.", "status": "open", "labels": ["bug"], "priority": "high", "author": "widget_will", "assignee": "john_doe", "createdAt": "2024-02-06T11:30:00Z" },
    { "id": 42, "title": "Add role-based access control", "description": "Implement RBAC system with different permission levels for users, moderators, and admins.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "rbac_rachel", "assignee": "security_sam", "createdAt": "2024-01-23T08:45:00Z" },
    { "id": 43, "title": "Create docker deployment guide", "description": "Write comprehensive guide for deploying the application using Docker and docker-compose.", "status": "closed", "labels": ["documentation"], "priority": "medium", "author": "docker_dave", "assignee": "mike_docs", "createdAt": "2024-01-06T12:00:00Z" },
    { "id": 44, "title": "Add favorites/bookmarks feature", "description": "Allow users to bookmark frequently accessed pages or items for quick access.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "fav_frank", "assignee": "", "createdAt": "2024-02-07T10:30:00Z" },
    { "id": 45, "title": "Search results pagination broken", "description": "Pagination controls don't work on search results page. Only first page is accessible.", "status": "open", "labels": ["bug"], "priority": "medium", "author": "page_paul", "assignee": "emma_ui", "createdAt": "2024-01-24T13:45:00Z" },
    { "id": 46, "title": "Implement data backup system", "description": "Set up automated daily backups of database with retention policy and restore procedures.", "status": "open", "labels": ["enhancement"], "priority": "high", "author": "backup_bruce", "assignee": "db_admin", "createdAt": "2024-02-08T09:15:00Z" },
    { "id": 47, "title": "Add code syntax highlighting", "description": "Implement syntax highlighting for code blocks in comments and descriptions.", "status": "open", "labels": ["enhancement", "good first issue"], "priority": "low", "author": "syntax_simon", "assignee": "", "createdAt": "2024-01-25T11:00:00Z" },
    { "id": 48, "title": "Browser console shows warnings", "description": "Multiple deprecation warnings appearing in browser console. Need to update deprecated code.", "status": "open", "labels": ["bug"], "priority": "low", "author": "console_carol", "assignee": "", "createdAt": "2024-02-09T14:20:00Z" },
    { "id": 49, "title": "Add Google Analytics integration", "description": "Integrate Google Analytics to track user behavior and improve product decisions.", "status": "open", "labels": ["enhancement"], "priority": "medium", "author": "analytics_anna", "assignee": "john_doe", "createdAt": "2024-01-26T10:45:00Z" },
    { "id": 50, "title": "Create automated testing pipeline", "description": "Set up CI/CD pipeline with automated tests running on every commit and pull request.", "status": "open", "labels": ["enhancement", "help wanted"], "priority": "high", "author": "ci_cd_cindy", "assignee": "test_tina", "createdAt": "2024-02-10T08:00:00Z" }
];
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

//5. CARDS LOGIC

function renderIssueCards(issuesArray, containerId) {
    const gridContainer = document.getElementById(containerId);
    gridContainer.innerHTML = '';

    if (!issuesArray || issuesArray.length === 0) {
        gridContainer.innerHTML = `<p class="text-gray-500 col-span-full text-center py-10">No issues found.</p>`;
        document.getElementById('total-issue-count').innerText = "0";
        return;
    }

    issuesArray.forEach(issue => {
        
        const topBorderColor = issue.status === 'open' ? 'border-t-[#10b981]' : 'border-t-[#8b5cf6]';
        
        const statusLogo = issue.status === 'open' 
            ? `<img src="Images/Open-Status.png" alt="Open" class="w-6 h-6 object-contain">`
            : `<img src="Images/Closed-Status.png" alt="Closed" class="w-6 h-6 object-contain">`;

        
        let priorityClass = 'bg-[#f3f4f6] text-[#9ca3af]';
        if (issue.priority.toLowerCase() === 'high') {
            priorityClass = 'bg-[#fee2e2] text-[#ef4444]';
        } else if (issue.priority.toLowerCase() === 'medium') {
            priorityClass = 'bg-[#fef3c7] text-[#f59e0b]';
        }

        const labelsHTML = (issue.labels || []).map(label => {
            const lowerLabel = label.toLowerCase();
            let colorClass = 'text-[#10b981] border-[#10b981] bg-[#10b981]/10'; 
            let icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`;

            if (lowerLabel.includes('bug')) {
                colorClass = 'text-[#ef4444] border-[#fca5a5] bg-[#fef2f2]'; 
                icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            } else if (lowerLabel.includes('help')) {
                colorClass = 'text-[#d97706] border-[#fde047] bg-[#fffbeb]'; 
                icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`;
            }

            return `<span class="${colorClass} border px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 uppercase tracking-wide">
                        ${icon} ${label}
                    </span>`;
        }).join('');

        
        const dateObj = new Date(issue.createdAt);
        const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;

        const cardHTML = `
            <div onclick="showIssueDetailsLocally(${issue.id})" class="cursor-pointer bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full border-t-[3px] ${topBorderColor} hover:shadow-lg transition-all">
                
                <div class="flex justify-between items-start mb-4">
                    ${statusLogo}
                    <span class="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${priorityClass}">
                        ${issue.priority}
                    </span>
                </div>
                
                <h4 class="text-[17px] font-bold text-[#1f2937] mb-2 leading-snug">
                    ${issue.title}
                </h4>
                
                <p class="text-[14px] text-gray-500 mb-5 line-clamp-2 leading-relaxed grow">
                    ${issue.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${labelsHTML}
                </div>
                
                <div class="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-1.5">
                    <p class="text-[14px] text-[#4b5563]">#${issue.id} by ${issue.author}</p>
                    <p class="text-[14px] text-[#6b7280]">${formattedDate}</p>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });
    document.getElementById('total-issue-count').innerText = issuesArray.length;
}

// 6. THE MODAL LOGIC
function showIssueDetailsLocally(id) {
    const modal = document.getElementById('issue-modal');
    const modalContent = document.getElementById('modal-content-container');
    
    modal.classList.remove('hidden');

    const issue = localIssuesData.find(item => item.id === id);

    if (issue) {
        
        const dateObj = new Date(issue.createdAt);
        const formattedDateModal = `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${dateObj.getFullYear()}`;

        
        const labelsHTML = (issue.labels || []).map(label => {
            const lowerLabel = label.toLowerCase();
            let colorClass = 'text-[#10b981] border-[#10b981] bg-[#10b981]/10'; 
            let icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`;

            if (lowerLabel.includes('bug')) {
                colorClass = 'text-[#ef4444] border-[#fca5a5] bg-[#fef2f2]'; 
                icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            } else if (lowerLabel.includes('help')) {
                colorClass = 'text-[#d97706] border-[#fde047] bg-[#fffbeb]'; 
                icon = `<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`;
            }

            return `<span class="${colorClass} border px-3 py-1.5 rounded-full text-[12px] font-bold flex items-center gap-1.5 uppercase tracking-wide">
                        ${icon} ${label}
                    </span>`;
        }).join('');

        
        let priorityBadgeModal = '';
        if (issue.priority.toLowerCase() === 'high') {
            priorityBadgeModal = '<span class="bg-[#ef4444] text-white px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wide">HIGH</span>';
        } else if (issue.priority.toLowerCase() === 'medium') {
            priorityBadgeModal = '<span class="bg-[#f59e0b] text-white px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wide">MEDIUM</span>';
        } else {
            priorityBadgeModal = '<span class="bg-[#9ca3af] text-white px-5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wide">LOW</span>';
        }

        const statusPillClass = issue.status === 'open' ? 'bg-[#00a870]' : 'bg-[#8b5cf6]';
        const statusText = issue.status === 'open' ? 'Opened' : 'Closed';

        
        modalContent.innerHTML = `
            <div class="flex flex-col">
                
                <h2 class="text-[26px] font-bold text-[#1f2937] mb-3 leading-tight">${issue.title}</h2>
                
                <div class="flex items-center gap-3 text-[14px] text-gray-500 mb-6">
                    <span class="${statusPillClass} text-white px-3 py-0.5 rounded-full text-[12px] font-semibold">${statusText}</span>
                    <span class="text-gray-400">•</span>
                    <span>Opened by ${issue.author}</span>
                    <span class="text-gray-400">•</span>
                    <span>${formattedDateModal}</span>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${labelsHTML}
                </div>

                <p class="text-[16px] text-[#6b7280] leading-relaxed mb-8">
                    ${issue.description}
                </p>
                
                <div class="bg-[#f9fafb] rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                    <div class="flex-1">
                        <p class="text-[14px] text-gray-500 mb-1">Assignee:</p>
                        <p class="text-[16px] font-bold text-[#1f2937]">${issue.assignee || 'Unassigned'}</p>
                    </div>
                    <div class="flex-1">
                        <p class="text-[14px] text-gray-500 mb-2">Priority:</p>
                        <div>${priorityBadgeModal}</div>
                    </div>
                </div>
                
                <div class="flex justify-end mt-2">
                    <button id="purple-close-btn" class="bg-[#5200FF] hover:bg-[#3b00cc] text-white font-bold py-2.5 px-8 rounded-lg transition-colors">
                        Close
                    </button>
                </div>
            </div>`;

        
        document.getElementById('purple-close-btn').addEventListener('click', () => {
            document.getElementById('issue-modal').classList.add('hidden');
        });

    } else {
        modalContent.innerHTML = `<p class="text-red-500 font-bold py-10 text-center">Failed to load issue details.</p>`;
    }
}


document.getElementById('close-modal-btn').addEventListener('click', () => {
    document.getElementById('issue-modal').classList.add('hidden');
});


document.getElementById('issue-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('issue-modal')) {
        document.getElementById('issue-modal').classList.add('hidden');
    }
});