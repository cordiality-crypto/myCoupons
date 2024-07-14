document.addEventListener("DOMContentLoaded", function() {
    // Toggle Sidebar
    const sidebarToggle = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
    const sidebar = document.getElementById('logo-sidebar');
  
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('-translate-x-full');
    });
  
    // Toggle User Dropdown Menu
    const userDropdownToggle = document.querySelector('[data-dropdown-toggle="dropdown-user"]');
    const userDropdown = document.getElementById('dropdown-user');
  
    userDropdownToggle.addEventListener('click', function() {
      userDropdown.classList.toggle('hidden');
    });
  
    // Close dropdown if clicked outside
    window.addEventListener('click', function(e) {
      if (!userDropdown.contains(e.target) && !userDropdownToggle.contains(e.target)) {
        userDropdown.classList.add('hidden');
      }
    });
  });
  