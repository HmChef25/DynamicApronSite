export default function Layout({ children }) {
  return (
    <div className="page-fade" style={styles.layout}>
      {children}
    </div>
  );
}

const styles = {
  layout: {
    padding: "2rem",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
};
