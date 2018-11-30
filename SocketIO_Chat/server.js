var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app)
var io = require("socket.io")(server)
server.listen(3000);

var mangUsers = [];

// io.on("connection", function(socket) {
//     console.log("Co nguoi ket noi");
//     socket.on("client-send-Username", function(data) {
//         if(mangUsers.indexOf(data) >= 0) {
//             socket.emit("server-send-dky-thatbai");   
//         }else{
//             mangUsers.push(data);
//             socket.Username = data;
//             socket.emit("server-send-dky-thanhcong", data);
//             io.sockets.emit("server-send-danhsach-Users", mangUsers);
//         }
//     });
//     socket.on("logout", function() {
//         mangUsers.splice(
//             mangUsers.indexOf(socket.Username), 1
//         );
//         socket.broadcast.emit("server-send-danhsach-Users", mangUsers);
//     });

//     socket.on("user-send-message", function(data) {
//         io.sockets.emit("server-send-message", {un: socket.Username, nd: data});
//     });

//     // socket.on("dang-go", function() {
//     //     var s = socket.Username + " dang go chu";
//     //     socket.broadcast.emit("ai-do-dang-go-chu", s);
//     // });
//     // socket.on("ngung-go-chu", function() {
//     //     io.sockets.emit("ai-do-ngung-go-chu");
//     // });
// });

io.on("connection", function(data) {
    socket.on("tao-room", function(data) {
        socket.join("data");
        socket.Phong = data;

        var mang = [];
        for(r in socket.adapter.rooms) {
            mang.push(r);
        }
        io.sockets.emit("server-send-rooms", mang);
    })
});

app.get("/", function(req, res) {
    res.render("index");
})