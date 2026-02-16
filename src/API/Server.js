
import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket server running on ws://localhost:8080");

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send initial status
  ws.send(
    JSON.stringify({
      orderId: "KLN123456",
      status: "Picked Up",
      step: 2,
    })
  );

  // Simulate live updates
  setTimeout(() => {
    ws.send(
      JSON.stringify({
        orderId: "KLN123456",
        status: "In Transit",
        step: 3,
      })
    );
  }, 5000);

  setTimeout(() => {
    ws.send(
      JSON.stringify({
        orderId: "KLN123456",
        status: "Delivered",
        step: 4,
      })
    );
  }, 10000);

  ws.on("close", () => console.log("Client disconnected"));
});
