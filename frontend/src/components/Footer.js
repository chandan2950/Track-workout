import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        © Chandan Pal, All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000", 
    color: "#fff", 
    textAlign: "center",
    padding: "1rem 0",
    width: "100%", 
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  content: {
    maxWidth: "1400px",
    margin: "0 auto", 
  },
};

export default Footer;
