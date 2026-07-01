import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type { ComponentType } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: ComponentType<any>) => (props: any) => sheet.collectStyles(
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      // antd is CSS-in-JS; extract its styles on the server to avoid FOUC.
      const antdStyle = extractStyle(cache, true);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style id="antd-cssinjs" dangerouslySetInnerHTML={{ __html: antdStyle }} />
          </>
        ),
        head: [
          <link key="1" rel="preconnect" href="https://fonts.gstatic.com" />,
          <link
            key="2"
            href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />,
          <link
            key="3"
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />,
          /* eslint-disable @next/next/no-sync-scripts --
             amCharts v4 loads from its CDN as synchronous scripts in the
             document head; next/script is not usable in _document here. */
          <script key="4" src="//cdn.amcharts.com/lib/4/core.js" />,
          <script key="5" src="//cdn.amcharts.com/lib/4/charts.js" />,
          <script key="6" src="//cdn.amcharts.com/lib/4/maps.js" />,
          /* eslint-enable @next/next/no-sync-scripts */
        ],
      } as DocumentInitialProps;
    } finally {
      sheet.seal();
    }
  }
}
