import { useEffect } from "react";
import tmi from "tmi.js";
import { useSound } from "use-sound";

const client = new tmi.client({
  channels: ["jstntrnr"],
});

client.connect();

export default function Sheesh() {
  const [play] = useSound("/sheesh.mp3");

  useEffect(() => {
    client.on("message", (channel, userstate, message, self) => {
      console.log(`${userstate["display-name"]}: ${message}`);
      if (message.match(/sheesh/i)) {
        console.log("sheesh");

        play();
      }
    });

    return () => {
      client.removeAllListeners();
    };
  });

  return (
    <>
      Sheesh <button onClick={() => play()}>click</button>
    </>
  );
}
