import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
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
