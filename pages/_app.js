import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import '@kevinwei00/foundation-bricks/styles/base/_base.scss';
import '@kevinwei00/foundation-bricks/build/main.css';
import 'styles/global/_global.scss';

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge,chrome=1' />
    </Head>
    <DefaultSeo
      title='Default Title'
      openGraph={{
        type: 'website',
        locale: 'en-US',
        url: 'https://www.w3.org/',
        site_name: 'Foundation'
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
      }}
    />
    <Component {...pageProps} />
  </>;
}
