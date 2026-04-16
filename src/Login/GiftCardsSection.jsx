export default function GiftCardsSection({ giftCards }) {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>E-Gift Cards</h2>
        <button style={styles.redeemBtn}>+ Redeem Code</button>
      </div>
      
      <div style={styles.giftCardsList}>
        {giftCards.map((card) => (
          <div key={card.id} style={{
            ...styles.giftCard,
            background: card.used ? "#fafafa" : "#333333",
            color: card.used ? "#999999" : "#ffffff",
            border: card.used ? "1px solid #e5e5e5" : "none",
          }}>
            {!card.used && <div style={styles.giftCardGlow} />}
            <div style={styles.giftCardContent}>
              <div>
                <div style={styles.giftCardLabel}>Gift Card</div>
                <div style={styles.giftCardValue}>{card.value}</div>
                <div style={styles.giftCardCode}>Code: {card.code}</div>
              </div>
              <div style={styles.giftCardRight}>
                <div style={styles.giftCardExpiryLabel}>Expires</div>
                <div style={styles.giftCardExpiry}>{card.expiry}</div>
                <div style={styles.giftCardStatus(card.used)}>
                  {card.used ? "Used" : "Active"}
                </div>
              </div>
            </div>
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
  redeemBtn: {
    fontSize: 12,
    color: "#666666",
    fontWeight: 600,
    background: "#f5f5f5",
    border: "none",
    borderRadius: 8,
    padding: "6px 14px",
    cursor: "pointer",
  },
  giftCardsList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  giftCard: {
    borderRadius: 16,
    padding: "20px 22px",
    position: "relative",
    overflow: "hidden",
  },
  giftCardGlow: {
    position: "absolute",
    right: -20,
    top: -20,
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
  },
  giftCardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
  },
  giftCardLabel: {
    fontSize: 11,
    fontWeight: 600,
    opacity: 0.7,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  giftCardValue: {
    fontSize: 22,
    fontWeight: 800,
  },
  giftCardCode: {
    fontSize: 12,
    marginTop: 6,
    opacity: 0.8,
  },
  giftCardRight: {
    textAlign: "right",
  },
  giftCardExpiryLabel: {
    fontSize: 10,
    opacity: 0.7,
    marginBottom: 4,
  },
  giftCardExpiry: {
    fontSize: 13,
    fontWeight: 600,
  },
  giftCardStatus: (used) => ({
    marginTop: 8,
    fontSize: 11,
    padding: "3px 10px",
    borderRadius: 20,
    fontWeight: 700,
    background: used ? "#e5e5e5" : "rgba(255,255,255,0.25)",
    color: used ? "#999999" : "#ffffff",
    display: "inline-block",
  }),
};