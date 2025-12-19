import Sidebar from "../../components/Sidebar";

export default function CulinaryDashboard() {
  const links = [
    { label: "Batch Logic", to: "/culinary/batch" },
    { label: "Pricing", to: "/culinary/pricing" },
    { label: "Yields", to: "/culinary/yields" },
    { label: "Ingredients", to: "/culinary/ingredients" },
    { label: "Recipe Framework", to: "/culinary/framework" }
  ];

  return (
    <div style={styles.container}>
      <Sidebar title="Culinary Systems" links={links} />

      <div style={styles.content}>
        <h1>Culinary Dashboard</h1>
        <p>Welcome to the Culinary Module. Choose a system from the sidebar.</p>
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