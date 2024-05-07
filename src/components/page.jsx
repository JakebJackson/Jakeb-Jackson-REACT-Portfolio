import { useEffect } from 'react';
import PageContent from "./pageContent";
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <section className="container mt-4 py-4 bg-buff border border-4 border-buff rounded-5 shadow">
      <h2>{currentPage}</h2>

      <PageContent>
        <Outlet/>
      </PageContent>
    </section>
  );
}

export default Page;