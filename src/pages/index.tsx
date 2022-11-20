import Chessboard from "@/components/Chessboard";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Chessboard id={1} />
    </div>
  );
}
