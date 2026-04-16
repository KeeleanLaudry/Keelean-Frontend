export default function PrescriptionsSection({ prescriptions }) {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>My Prescriptions</h2>
        <button style={styles.uploadBtn}>+ Upload</button>
      </div>
      
      <div style={styles.prescriptionsList}>
        {prescriptions.map((p) => (
          <div key={p.id} style={styles.prescriptionCard}>
            <div style={styles.prescriptionIcon}>📄</div>
            <div style={styles.prescriptionContent}>
              <div style={styles.prescriptionName}>{p.name}</div>
              <div style={styles.prescriptionDate}>{p.date}</div>
              <div style={styles.prescriptionNote}>{p.note}</div>
            </div>
            <button style={styles.viewBtn}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    fontFamily: "'Syne', sans-serif",
  },
  uploadBtn: {
    fontSize: 12,
    color: "#666666",
    fontWeight: 600,
    background: "#f5f5f5",
    border: "none",
    borderRadius: 8,
    padding: "6px 14px",
    cursor: "pointer",
  },
  prescriptionsList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  prescriptionCard: {
    background: "#ffffff",
    border: "1px solid #e5e5e5",
    borderRadius: 14,
    padding: "16px 18px",
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  prescriptionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "#e8f5e9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  prescriptionContent: {
    flex: 1,
  },
  prescriptionName: {
    fontWeight: 600,
    fontSize: 14,
    color: "#1a1a1a",
  },
  prescriptionDate: {
    fontSize: 12,
    color: "#aaaaaa",
    marginTop: 2,
  },
  prescriptionNote: {
    fontSize: 12,
    color: "#888888",
    marginTop: 4,
    fontStyle: "italic",
  },
  viewBtn: {
    fontSize: 12,
    color: "#666666",
    background: "#f5f5f5",
    border: "none",
    borderRadius: 8,
    padding: "6px 12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};