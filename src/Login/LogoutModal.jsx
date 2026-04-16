export default function LogoutModal({ onClose, onLogout }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.iconContainer}>👋</div>
        <div style={styles.title}>Logging out?</div>
        <div style={styles.message}>
          You'll need to sign in again to access your orders and account details.
        </div>
        <div style={styles.buttons}>
          <button onClick={onClose} style={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={onLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(26, 26, 26, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    background: "#ffffff",
    borderRadius: 20,
    padding: "32px 28px",
    width: 320,
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: 24,
  },
  title: {
    fontWeight: 800,
    fontSize: 18,
    color: "#1a1a1a",
    fontFamily: "'Syne', sans-serif",
    marginBottom: 8,
  },
  message: {
    fontSize: 13,
    color: "#aaaaaa",
    marginBottom: 24,
    lineHeight: 1.6,
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  cancelBtn: {
    flex: 1,
    padding: "11px",
    background: "#f5f5f5",
    border: "none",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    color: "#666666",
  },
  logoutBtn: {
    flex: 1,
    padding: "11px",
    background: "#d32f2f",
    border: "none",
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
    color: "#ffffff",
  },
};