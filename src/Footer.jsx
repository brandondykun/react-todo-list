const Footer = ({ allCount, completeCount, incompleteCount }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="count-container">Complete: {completeCount}</div>|
        <div className="count-container">Incomplete: {incompleteCount}</div>|
        <div className="count-container">Total: {allCount}</div>
      </div>
      <div className="footer-text">Powered By React</div>
    </footer>
  );
};

export default Footer;
