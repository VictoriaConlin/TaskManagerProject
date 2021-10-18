// TASK MANAGER

const userOptions = `TASK MANAGER

What would you like to do (Please enter one of the options bellow):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;
let taskManager = true;
let initialOption;

while (taskManager){
initialOption = prompt(userOptions);

while (true){
    
    if (initialOption.toUpperCase() == "CLOSE"){
        alert(`Thank you for using Task Manager!`);
        taskManager = false;
        break;
        }else if(initialOption.toUpperCase() == "NEW"){
            newTask = prompt (`Please enter the new task:`);
            alert (`"${newTask}" has been added!`)
            break;
        } else if(initialOption.toUpperCase() == "TASKS"){
            alert (`Charge Laptop
Check Email
${newTask}`);
            break;
        } else {
            initialOption = prompt(userOptions);
        }
    }
}

