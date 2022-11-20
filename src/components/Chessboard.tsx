import { Chessboard as ReactChessboard } from "react-chessboard";

interface Chessboard {
  id: number;
}

export default function Chessboard({ id }: Chessboard) {
  return (
    <ReactChessboard
      id={id}
      customBoardStyle={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5 " }}
    />
  );
}
