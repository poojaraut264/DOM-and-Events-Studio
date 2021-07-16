window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded

    console.log('window loaded');

    document.getElementById('up').addEventListener('click', function() {
        document.getElementById('spaceShuttleHeight').innerText = 
            Number(document.getElementById('spaceShuttleHeight').innerText) + 10000;
    })

    document.getElementById('down').addEventListener('click', function() {
        document.getElementById('spaceShuttleHeight').innerText = 
            Number(document.getElementById('spaceShuttleHeight').innerText) - 10000;
    })

    document.getElementById('missionAbort').addEventListener('click', function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById('flightStatus').innerText = "Mission aborted.";
            document.getElementById('shuttleBackground').setAttribute("style","background-color:green;");
            document.getElementById('spaceShuttleHeight').innerText = "0";
        }
    })

    document.getElementById('landing').addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerText = "The shuttle has landed.";
        document.getElementById('shuttleBackground').setAttribute("style","background-color:green;");
        document.getElementById('spaceShuttleHeight').innerText = "0";
    })

    document.getElementById('takeoff').addEventListener('click', function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            document.getElementById('flightStatus').innerText = "Shuttle in flight.";
            document.getElementById('shuttleBackground').setAttribute("style","background-color:blue;");
            document.getElementById('spaceShuttleHeight').innerText = "10000";
        }
    })

});
