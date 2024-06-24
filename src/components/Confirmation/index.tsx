import ConfirmationMain from "./confirmation-main";
import ConfirmationFooter from "./confirmation-footer";
import Header from "../Header";
import Footer from "../Footer";

export default function Confirmation() {
  return (
    <>
      <Header />
      <div className="bg-dark-purple min-h-screen w-full">
        <div className="w-3/4 md:w-[90%] xl:w-4/5 mx-auto py-32">
          <ConfirmationMain />
          <ConfirmationFooter />
        </div>
      </div>
      <Footer />
    </>
  );
}
