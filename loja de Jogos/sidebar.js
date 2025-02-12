function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
  }
  
  document.getElementById("openSidebar").addEventListener("click", openSidebar);
  