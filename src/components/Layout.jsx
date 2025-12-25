import PageWrapper from "./PageWrapper";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout({ children }) {
  return (
    <PageWrapper>
      <Breadcrumbs />
      {children}
    </PageWrapper>
  );
}
