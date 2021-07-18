import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

export default (_, inject) => {
  const echo = new Echo({
    broadcaster: "pusher",
    key: "local",
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    forceTls: false,
    disableStats: false,
    enabledTransports: ["ws", "wss"]
  });

  inject("echo", echo);
};
