import { faFilter, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Badge from "~/components/Badge/Badge";

async function fetchPosts(category: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

const categories: string[] = ['기술', '뉴스', '스포츠', '엔터테인먼트', '기술', '뉴스', '스포츠', '엔터테인먼트', '기술', '뉴스', '스포츠', '엔터테인먼트', '기술', '뉴스', '스포츠', '엔터테인먼트'];

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const posts = await fetchPosts(params.category);
  function formatDateTime(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }

  return (
    <>
      <section>
        <header className="border-b-2">
          <h1 className="text-2xl"><strong>{params.category}</strong></h1>
          <small>description</small>
          <nav className="my-3">
            <button className="p-1 my-1 hover:bg-slate-200 rounded"><FontAwesomeIcon icon={faFilter} className="h-4" />필터링</button>
            <ul className="flex flex-wrap gap-1">
              {categories.map((category) => (
                <li key={category} className="category-item">
                  {/* <a href={`/category/${category.name}`}>{category.name}</a> */}
                  <button><Badge data={category} /></button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <table className="w-full text-slate-600 mb-2">
          <thead>
            <tr>
              <th className="text-center">카테고리</th>
              <th>제목</th>
              <th className="text-center">날짜</th>
              <th className="text-center">조회</th>
              <th className="text-center"><FontAwesomeIcon icon={faThumbsUp} /></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t p-1 last:border-b">
                <td className="text-center"><small className="text-slate-500">category</small></td>
                <td><Link href={`/boards/category/${post.id}`}>{post.title}<b className="pl-2 text-red-600 text-xs">[10]</b></Link></td>
                <td className="text-center">{formatDateTime(post.created_at)}</td>
                <td className="text-center">999</td>
                <td className="text-center">1010</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="flex flex-row-reverse">
          <a href="/boards/category/new">
            <button className="border mb-10 p-1">글쓰기</button>
          </a>
        </section>
      </section>
    </>
  );
}
