import { useEffect } from 'react';
import PageContent from "../PageContent";
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <section className="container p-5 bg-onyx md-border shadow w-md-50">

      <PageContent>
        <Outlet/>
      </PageContent>
    </section>
  );
}

export default Page;