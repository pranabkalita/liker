export default function({ $axios, $echo }) {
  $axios.onRequest(config => {
    config.headers["X-Socket-ID"] = $echo.socketId();
  });
}
