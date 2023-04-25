import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';

export default function About(props: any) {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <p>当前语言：{router.locale}</p>
      <p>{t('title')}</p>
    </div>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}
