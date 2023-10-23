import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).use(remarkBreaks).use(remarkParse).use(remarkRehype, {allowDangerousHtml: true}).use(rehypeStringify, {allowDangerousHtml: true}).use(remarkGfm).process(markdown);
  return result.toString();
}