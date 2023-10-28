import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

import Link from 'next/link';

// 1. Create a reader
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "articles" collection
  const articles = await reader.collections.articles.all();
  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <ul className="">
        {articles.map((article, key) => (
          <li key={key}>
            <Link className="shadow block w-[300px] p-4" href={`/${article.slug}`}>{article.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
