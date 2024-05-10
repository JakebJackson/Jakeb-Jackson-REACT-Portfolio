import { useEffect } from 'react';
import PageContent from "./pageContent";
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <section className="container mt-4 p-5 bg-onyx border border-sky-blue border-4 rounded-5 shadow text-l-blue">

      <PageContent>
        <Outlet/>
      </PageContent>
    </section>
  );
}

export default Page;