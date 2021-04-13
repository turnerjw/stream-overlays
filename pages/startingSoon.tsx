import Chat from "../components/Chat";
import { Floater } from "../components/Floater";

export default function StartingSoon() {
  return (
    <div className="w-1920 h-1080 bg-gradient-to-tr from-cyan-800 to-rose-500 relative">
      <Chat />
      <Floater />
      <p className="absolute text-white bottom-10 right-10 text-8xl">
        Starting Soon
      </p>
    </div>
  );
}
