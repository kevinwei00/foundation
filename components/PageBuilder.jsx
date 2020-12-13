import { NextSeo } from 'next-seo';
// import dynamic from 'next/dynamic';
import { DuoSection } from '@kevinwei00/foundation-bricks';

const PageBuilder = ({ content, css }) => {
  const componentMap = {
    DuoSection
  };

  return <>
    <NextSeo title={content.page_title}/>
    <div className={css.style}>
      {content.sections.map((section, index) => {
        // const Component = dynamic(() => import(`@kevinwei00/foundation-bricks/components/sections/${section.component}`), { ssr: false });
        const Component = componentMap[section.component];
        return <Component key={index} {...section.data}/>;
      })}
    </div>
  </>;
};

export default PageBuilder;