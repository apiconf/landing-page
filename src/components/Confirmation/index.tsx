import ConfirmationMain from "./confirmation-main";
import ConfirmationFooter from "./confirmation-footer";

export default function Confirmation() {
  return (
    <div className="bg-dark-purple min-h-screen w-full">
      <div className="w-[90%] xl:w-4/5 mx-auto py-32">
        <ConfirmationMain />
        <ConfirmationFooter />
      </div>
    </div>
  );
}
