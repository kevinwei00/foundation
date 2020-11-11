import PageBuilder from 'components/PageBuilder';
import content from 'content/index.json';
import css from 'styles/pages/index.module.scss';

export default function Page() {
  return <PageBuilder content={content} css={css}/>;
}