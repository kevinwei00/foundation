import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getPageFiles } from 'next/dist/next-server/server/get-page-files';

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = getPageFiles(buildManifest, '/_app');
  const pageFiles = pathname !== '/_error' ? getPageFiles(buildManifest, pathname) : [];

  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

class MyHead extends Head {
  render() {
    const { head } = this.context;
    const { children } = this.props;
    return (
      <head {...this.props}>
        {children}
        {head}
        {this.getCssLinks(
          getDocumentFiles(
            this.context.buildManifest,
            this.context.__NEXT_DATA__.page
          )
        )}
      </head>
    );
  }
}

class MyDocument extends Document {  
  render() {
    const isDev = process.env.NODE_ENV === 'development';
    return (
      <Html lang='en'>
        {isDev ? <Head /> : <MyHead />}
        <body>
          <Main />
          {isDev && <NextScript />}
          {/* <NextScript /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
