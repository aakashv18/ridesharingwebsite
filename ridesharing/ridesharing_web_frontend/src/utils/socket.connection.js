import { io } from "socket.io-client";

const url = "http://localhost:8000";

const socket = io.connect(url);

export { socket };
