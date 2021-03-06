import PageBuilder from 'components/PageBuilder';
import content from 'content/example.json';
import css from 'styles/pages/example.module.scss';

export default function Page() {
  return <PageBuilder content={content} css={css}/>;
}