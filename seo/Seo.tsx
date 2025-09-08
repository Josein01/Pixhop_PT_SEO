import { Helmet } from '@dr.pogodin/react-helmet';
import { useTranslation } from 'react-i18next';

type SeoProps = {
  titleKey: string;
  descKey: string;
  canonicalEn: string;
  canonicalPt: string;
  ogImage?: string;
};

export default function Seo({ titleKey, descKey, canonicalEn, canonicalPt, ogImage }: SeoProps) {
  const { t, i18n } = useTranslation();
  const title = t(titleKey);
  const description = t(descKey);
  const isPt = (i18n.resolvedLanguage || 'en').startsWith('pt');
  const url = isPt ? canonicalPt : canonicalEn;

  return (
    <Helmet>
      <html lang={isPt ? 'pt-BR' : 'en'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" href={canonicalEn} hrefLang="en" />
      <link rel="alternate" href={canonicalPt} hrefLang="pt-BR" />
      <link rel="alternate" href={canonicalEn} hrefLang="x-default" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
}
