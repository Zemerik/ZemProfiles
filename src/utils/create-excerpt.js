import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';
const parser = new MarkdownIt();

export const createExcerpt = (body) => {
  return sanitizeHtml(
    parser
      .render(body)
      .split('\n')
      .slice(0, 6)
      .map((str) => {
        return str.replace(/<\/?[^>]+(>|$)/g, '').split('\n');
      })
      .flat()
      .join(' ')
  );
};
