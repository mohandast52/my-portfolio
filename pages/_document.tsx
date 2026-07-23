import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
          <link
            key="fonts-portfolio"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap"
            rel="stylesheet"
          />,
          /* Geist + Geist Mono — the MohanGPT (/mohangpt) design system. */
          <link
            key="fonts-geist"
            href="https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400..600&display=swap"
            rel="stylesheet"
          />,
          /* eslint-disable @next/next/no-sync-scripts --
             amCharts v5 loads from its CDN as synchronous scripts in the
             document head; next/script is not usable in _document here.
             index.js (core `am5`) must load before xy.js (`am5xy`). */
          <script key="4" src="//cdn.amcharts.com/lib/5/index.js" />,
          <script key="5" src="//cdn.amcharts.com/lib/5/xy.js" />,
          <script key="6" src="//cdn.amcharts.com/lib/5/themes/Animated.js" />,
          /* eslint-enable @next/next/no-sync-scripts */
        ],
      } as DocumentInitialProps;
    } finally {
      sheet.seal();
    }
  }
}
