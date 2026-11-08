import type { Metadata, Viewport } from "next";

import "./fonts";
import "@/styles/globals.scss";

import { LANG, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, THEME_COLOR } from "./layout.constants";
import type { RootLayoutProps } from "./layout.types";

/** Metadata of the app and the cards shown when a link is shared. */
export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: { type: "website", siteName: SITE_NAME, title: SITE_TITLE, description: SITE_DESCRIPTION },
};

/** Color of the browser bar on mobile. */
export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

/**
 * Root layout: language and global styles.
 *
 * @param props Props of the component, see {@link RootLayoutProps}.
 * @param props.children Content of the page.
 * @returns The rendered element.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={LANG}>
      <body>{children}</body>
    </html>
  );
}
