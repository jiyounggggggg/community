import Link from "next/link";
import type { BoardData } from "~/utils/api/boards";
import { getBoards } from "~/utils/api/boards";

const BoardList = async () => {
  const boards = await getBoards();

  return (
    <ul className="flex flex-wrap justify-between text-center">
      {boards.map((board: BoardData) => (
        <li key={board.id} className="basis-1/3 border py-1">
          <Link href={`/boards/${board.name}`}>{board.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
