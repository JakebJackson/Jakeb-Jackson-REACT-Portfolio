import { useEffect } from 'react';
import PageContent from "../PageContent";
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <section className="container mt-md-4 p-5 bg-onyx md-border md-rounded-5 shadow">

      <PageContent>
        <Outlet/>
      </PageContent>
    </section>
  );
}

export default Page;