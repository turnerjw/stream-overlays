import { CameraChat } from "../components/CameraChat";
import { Ipad } from "../components/Ipad";
import { Mini } from "../components/Mini";

export default function Bg() {
  return (
    <div className="relative w-1920 h-1080 bg-gradient-to-tr from-cyan-800 to-rose-500">
      <div className="absolute right-10 top-10">
        <Mini />
      </div>
      <div className="absolute right-10 bottom-10">
        <CameraChat />
      </div>
      <div className="absolute left-10 bottom-10">
        <Ipad />
      </div>
    </div>
  );
}
