import { Floater } from "../../components/Floater";
import { useRouter } from "next/router";

export default function StartingSoon() {
  const {
    query: { message },
  } = useRouter();

  return (
    <div className="w-1920 h-1080 bg-gradient-to-tr from-cyan-800 to-rose-500 relative">
      <Floater />
      <p className="absolute text-white bottom-10 right-10 text-8xl">
        {message}
      </p>
    </div>
  );
}
