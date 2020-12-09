import PageBuilder from 'foundation-bricks/components/PageBuilder';
import content from 'content/example.json';
import css from 'styles/example.module.scss';

export default function Page() {
  return <PageBuilder content={content} css={css}/>;
}