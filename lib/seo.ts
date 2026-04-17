import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.idenpet.io";
const SITE_NAME = "Idenpet";
const DEFAULT_DESCRIPTION =
  "Create a digital pet identity, unlock instant QR recovery, store important records, and stay travel-ready with Idenpet — Canada's pet passport and QR safety platform.";

export function buildMetadata(props: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const title = `${props.title} | ${SITE_NAME}`;
  const description = props.description || DEFAULT_DESCRIPTION;
  const canonical = props.path ? `${SITE_URL}${props.path}` : SITE_URL;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
      images: props.ogImage
        ? [{ url: props.ogImage, width: 1200, height: 630 }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: props.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function buildArticleMetadata(props: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  author: string;
  ogImage?: string;
}): Metadata {
  const base = buildMetadata(props);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: props.publishedTime,
      authors: [props.author],
    },
  };
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
