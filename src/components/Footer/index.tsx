import Copyright from "./Copyright";
import FooterDetails from "./footerDetails";

const Footer = ({ newYear = false }: { newYear?: boolean }) => {
  return (
    <footer>
      <FooterDetails newYear={newYear} />
      <Copyright />
    </footer>
  );
};
export default Footer;
