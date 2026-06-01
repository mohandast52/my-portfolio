/* eslint-disable react/no-danger */
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      // antd 5 is CSS-in-JS; extract its styles on the server to avoid FOUC.
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
          <script key="4" src="//cdn.amcharts.com/lib/4/core.js" />,
          <script key="5" src="//cdn.amcharts.com/lib/4/charts.js" />,
          <script key="6" src="//cdn.amcharts.com/lib/4/maps.js" />,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}
