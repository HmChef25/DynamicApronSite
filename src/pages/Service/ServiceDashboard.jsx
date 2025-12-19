import Sidebar from "../../components/Sidebar";

export default function ServiceDashboard() {
  const links = [
    { label: "The Guilty Fork SOP", to: "/service/guiltyfork" }
  ];

  return (
    <div style={styles.container}>
      <Sidebar title="Service Systems" links={links} />

      <div style={styles.content}>
        <h1>Service Dashboard</h1>
        <p>Welcome to the Service Module. Choose a system from the sidebar.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex"
  },
  content: {
    flex: 1,
    padding: "2rem"
  }
};