import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Navbar } from "@components";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Head>
        <title>{t("common:title", { page: t("home:home") })}</title>
        <meta name="description" content="DuoEditor" />
      </Head>

      <Navbar />

      <main className=""></main>

      <footer className=""></footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en-US", ["common", "home"])),
    },
  };
};

export default Home;
