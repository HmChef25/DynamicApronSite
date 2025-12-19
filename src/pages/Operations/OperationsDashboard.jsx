import Sidebar from "../../components/Sidebar";

export default function OperationsDashboard() {
  const links = [
    { label: "Checklists", to: "/operations/checklists" },
    { label: "Admin Workflows", to: "/operations/admin" },
    { label: "Operational Systems", to: "/operations/systems" }
  ];

  return (
    <div style={styles.container}>
      <Sidebar title="Operations" links={links} />

      <div style={styles.content}>
        <h1>Operations Dashboard</h1>
        <p>Welcome to the Operations Module. Choose a system from the sidebar.</p>
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