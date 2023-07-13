const tasks = [
    "Cleaning Your Dog's Eyes",
    "Cleaning Your Dog's Ears",
    "Cleaning Your Dog's Nose",
    "Brushing Your Dog's Teeth",
    "Brushing Your Dog's Coat",
    "Trimming Your Dog's Coat",
    "Cutting Your Dog's Nails",
    "Cleaning and Protecting Your Dog's Paws",
    "Bathing, Drying, and Styling Your Dog's Coat",
    "Massaging Your Dog"
  ];
  
  window.addEventListener('DOMContentLoaded', function() {
    var taskList = document.getElementById("taskList");
    
    tasks.forEach(function(task) {
      var li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" onclick="toggleTask(event)"> ${task}`;
      taskList.appendChild(li);
    });
  });

  function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
  
    if (task !== "") {
      var li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" onclick="toggleTask(event)"> ${task}`;
  
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  }

  
  
  function toggleTask(event) {
    var task = event.target;
    if (task.checked) {
      task.parentNode.classList.add("completed");
    } else {
      task.parentNode.classList.remove("completed");
    }
  }
  