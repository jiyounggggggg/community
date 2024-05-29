import { faFilter, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "~/components/Badge/Badge";
import PostList from "~/components/posts/PostList";
import { getPosts } from "~/utils/api/posts";

const categories: string[] = [
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
  "기술",
  "뉴스",
  "스포츠",
  "엔터테인먼트",
];

export default async function CategoryPage({
  params
}: {
  params: { category: string };
}) {

  const posts = await getPosts(Number(params.category));
  function formatDateTime(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  return (
    <>
      <section>
        <header className="border-b-2">
          <h1 className="text-2xl">
            <strong>{params.category}</strong>
          </h1>
          <small>description</small>
          <nav className="my-3">
            <button className="my-1 rounded p-1 hover:bg-slate-200">
              <FontAwesomeIcon icon={faFilter} className="h-4" />
              필터링
            </button>
            <ul className="flex flex-wrap gap-1">
              <li key={categories[0]} className="category-item">
                <button>
                  <Badge data={categories[0]} />
                </button>
              </li>
              {/* {categories.map((category) => (
                <li key={category} className="category-item"> */}
                  {/* <a href={`/category/${category.name}`}>{category.name}</a> */}
                  {/* <button>
                    <Badge data={category} />
                  </button>
                </li> */}
              {/* ))} */}
            </ul>
          </nav>
        </header>

        <PostList boardId={Number(params.category)} />

        <section className="flex flex-row-reverse">
          <a href="/boards/1/new">
            <button className="mb-10 border p-1">글쓰기</button>
          </a>
        </section>
      </section>
    </>
  );
}
