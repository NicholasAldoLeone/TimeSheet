var firebaseConfig = {
    apiKey: "AIzaSyCLWhcoNK7YeHVAqD53tsqCb8NU0iE8E7U",
    authDomain: "time-sheet-255ce.firebaseapp.com",
    databaseURL: "https://time-sheet-255ce.firebaseio.com",
    projectId: "time-sheet-255ce",
    storageBucket: "",
    messagingSenderId: "700573041837",
    appId: "1:700573041837:web:3a098e0b63e0c6bb"
  };

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var employeeName;
  var employeeRole;
  var employeeStartDate;
  var employeeMonthsWorked;
  var employeeMonthlyRate;


  

