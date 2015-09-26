var messages = new Firebase("https://poipoi.firebaseio.com/messages");
window.onload = function() {
    var out = document.getElementById('myOut');


    document.getElementById('myButton').addEventListener('click', function() {
        var val = document.getElementById('myData').value;
        messages.push({
            'txt': val
        });
    })

    messages.on("value", function(snapshot) {
        out.innerHTML="";
        var text = '';
        snapshot.forEach(function(cs) {
            var textChild = document.createElement('p');
             textChild.innerText = cs.val().txt;
             out.appendChild(textChild)
        });

    });
};
