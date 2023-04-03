const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "600px",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #004",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
  },
  detailField: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 15,
    borderBottom: "1px solid #000",
    padding: "5px 10px",
  },
  fieldContent: {
    overflow: "hidden",
    overflowWrap: "break-word",
  },
  createClaimBtn: {
    display: "block",
    margin: "20px 0 5px auto",
  },
};

export default styles;