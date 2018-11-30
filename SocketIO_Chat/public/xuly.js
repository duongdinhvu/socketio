var socket = io("http://localhost:3000");
socket.on("server-send-dky-thatbai", function() {
    alert("Sai User name, co nguoi su dung roi");
});

socket.on("server-send-dky-thanhcong", function(data) {
    $('#currentUser').html(data);
    $('#loginForm').hide(2000);
    $('#chatForm').show(1000);
});

socket.on("server-send-danhsach-Users", function(data) {
    console.log(data);
    
    $('#boxContent').html('');
    data.forEach(function(i) {
        $("#boxContent").append("<div class='userOnline'>" + i +"</div>")
    });
});

socket.on("server-send-message", function(data) {
    $('#listMessage').append("<div class='ms'>"+data.un+":" + data.nd + "</div>");
});

socket.on("ai-do-dang-go-chu", function(data) {
    $('#listMessage').append("<div id='imgTyping'><img src='ell.gif'  style='width:20px'> " + "<span style='color:blue;font-size:9px;'>" + data + "</span></div>");
});
socket.on("ai-do-ngung-go-chu", function() {
     $('div').removeAttr("#imgTyping");
})

$(document).ready(function(){
    //  $('#loginForm').show();
    //  $('#chatForm').hide();

    //  $('#btnRegis').click(function() {
    //      socket.emit("client-send-Username",$('#txtUsername').val());
    //  });

    //  $('#btnLogout').click(function() {
    //     socket.emit("logout");
    //     $('#chatForm').hide(1000);
    //     $('#loginForm').show(2000);
    // });

    // $('#btnSendMessage').click(function() {
    //     socket.emit("user-send-message", $('#txtMessage').val());
    // });

    // $('#txtMessage').focusin(function() {
    //     socket.emit("dang-go");
    // });
    // $('#txtMessage').focusout(function() {
    //     socket.emit("ngung-go-chu");
    // });

    $("#btnTaoRoom").click(function() {
        socket.emit("tao-room", $("#txtRoom").val());
    })



  });