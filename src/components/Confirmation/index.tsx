import { useState } from "react";
import Styles from "./confirmation.module.css";
import { toPng } from "html-to-image";

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

export default function Confirmation() {
  const [name, setName] = useState("");
  const [selectAPicture, setSelectAPicture] = useState("Select a Picture...");
  const [image, setImage] = useState<string>(
    "/src/assets/confirmation-default-bg.svg"
  );
  const [isGenerateBtnHidden, setIsGenerateBtnHidden] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files! || []);
    const file = files[0];
    if (!file) {
      return;
    }
    if (!validFileType(file)) {
      alert("Invalid file type. Please select an image.");
      return;
    }

    setSelectAPicture(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target!.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setIsGenerateBtnHidden(true);
  };

  const handleDownloadImage = () => {
    const confirmationFlyer = document.getElementById("confirmation-flyer")!;

    toPng(confirmationFlyer)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "api-conf-confirmation-flyer.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error generating image", error);
      });
  };

  const handleRedo = () => {
    setName("");
    setSelectAPicture("Select a Picture...");
    setImage("/src/assets/confirmation-default-bg.svg");
    setIsGenerateBtnHidden(false);
  };

  return (
    <div className="bg-dark-purple min-h-screen w-full">
      <div className="w-[90%] xl:w-4/5 mx-auto py-32">
        <div className={`${Styles.FlexContainer} xl:mb-40 min-[1440px]:mb-56`}>
          <div className="flex flex-col gap-y-16">
            <div className="text-[#F1F1F1]">
              <h1 className="font-bold text-5xl">
                Tell your friends
                <br />
                you're attending!
              </h1>
              <p className="mt-4 font-medium text-lg">
                Make a shareable image for yourself
              </p>
            </div>
            <form
              className="flex flex-col gap-y-8"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <label htmlFor="your-name" className="hidden">
                Your Name
              </label>
              <input
                type="text"
                name="your-name"
                id="your-name"
                placeholder="Your Name"
                className="outline-none border-none p-6 font-extrabold rounded-3xl placeholder:text-[#A6A6A6] placeholder:font-extrabold"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label
                htmlFor="your-picture"
                className="inline-flex gap-x-4 justify-center items-center bg-white p-6 rounded-3xl"
              >
                <span className="text-[#2F20BF] font-extrabold">
                  {selectAPicture}
                </span>
                <ImageIcon />
              </label>
              <input
                type="file"
                name="your-picture"
                id="your-picture"
                className="opacity-0 w-0 h-0"
                multiple={false}
                accept="image/*"
                onChange={handleFileUpload}
              />
              {!isGenerateBtnHidden ? (
                <button
                  type="submit"
                  title="Generate"
                  className="bg-[#E1EF9A] py-12 px-32 text-dark font-bold text-2xl rounded-[320px]"
                >
                  Generate
                </button>
              ) : (
                <button
                  onClick={handleRedo}
                  title="Redo"
                  className="bg-[#4536DD] max-w-[120px] self-center text-white rounded-[320px] py-4 px-8 text-2xl font-bold"
                >
                  Redo
                </button>
              )}
            </form>
          </div>
          <div className="flex flex-col">
            <div
              id="confirmation-flyer"
              className="relative bg-confirmation bg-cover bg-center aspect-square w-full md:min-h-[530px]"
            >
              <img
                src={image}
                alt=""
                className="absolute top-1/4 sm:top-1/3 lg:top-1/4 ml-8 md:ml-20 bg-white rounded-3xl w-1/2 md:w-52 aspect-square"
              />
              <p className="absolute md:left-20 max-w-[250px] bottom-28 text-white font-bold text-xl">
                {name}
              </p>
            </div>
            {isGenerateBtnHidden && (
              <button
                title="Download image"
                onClick={handleDownloadImage}
                className="mt-14 self-center bg-[#E1EF9A] py-12 px-32 text-dark font-bold text-2xl rounded-[320px]"
              >
                Download Image
              </button>
            )}
          </div>
        </div>
        <div className={Styles.FlexContainer}>
          <div className="rounded-[320px] py-4 px-8 inline-flex items-center gap-x-2 bg-[#4536DD]">
            <SnapChatIcon />
            <span className="text-white font-bold">
              Try out the Snapchat Filter!
            </span>
          </div>
          <p className="text-[#F1F1F1] font-medium text-lg">
            Credit by APIConf 2024 Tech Team <br />
            Something Something Soemthing
          </p>
        </div>
      </div>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333ZM11.8667 18.64L14.6667 22.0133L18.8 16.6933C19.0667 16.3467 19.6 16.3467 19.8667 16.7067L24.5467 22.9467C24.621 23.0457 24.6662 23.1635 24.6773 23.2868C24.6884 23.4101 24.665 23.5341 24.6096 23.6448C24.5543 23.7555 24.4691 23.8487 24.3638 23.9138C24.2585 23.9789 24.1371 24.0133 24.0133 24.0133H8.02667C7.46667 24.0133 7.16 23.3733 7.50667 22.9333L10.8267 18.6667C11.08 18.32 11.5867 18.3067 11.8667 18.64Z"
        fill="#2F20BF"
      />
    </svg>
  );
}

function SnapChatIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1658 3C12.9618 3 15.6608 3.223 16.9348 6.073C17.3608 7.032 17.2588 8.662 17.1748 9.971L17.1728 10.018C17.1618 10.164 17.1548 10.296 17.1488 10.428C17.2477 10.4806 17.3589 10.5055 17.4708 10.5C17.7118 10.487 18.0008 10.404 18.3018 10.259C18.4177 10.2016 18.5455 10.1728 18.6748 10.175C18.8208 10.175 18.9638 10.198 19.0838 10.247C19.4448 10.367 19.6738 10.632 19.6738 10.921C19.6868 11.282 19.3608 11.596 18.6988 11.86C18.6278 11.883 18.5298 11.921 18.4228 11.956C18.0598 12.065 17.5058 12.245 17.3498 12.607C17.2778 12.788 17.3008 13.028 17.4478 13.304L17.4598 13.317C17.5078 13.426 18.6878 16.112 21.3138 16.546C21.4101 16.5615 21.4975 16.6116 21.5595 16.6869C21.6215 16.7622 21.654 16.8575 21.6508 16.955C21.6508 17.015 21.6378 17.074 21.6148 17.136C21.4218 17.593 20.5918 17.931 19.0848 18.157C19.0378 18.23 18.9888 18.459 18.9528 18.616C18.9308 18.76 18.8928 18.905 18.8458 19.06C18.7848 19.278 18.6288 19.385 18.3998 19.385H18.3758C18.23 19.3783 18.0851 19.3585 17.9428 19.326C17.6063 19.2534 17.263 19.2172 16.9188 19.218C16.6788 19.218 16.4388 19.23 16.1868 19.278C15.7038 19.362 15.2828 19.651 14.8008 19.988C14.1138 20.469 13.3318 21.024 12.1518 21.024C12.1038 21.024 12.0558 21.012 12.0058 21.012H11.8868C10.7058 21.012 9.9358 20.469 9.2498 19.976C8.7688 19.638 8.3598 19.35 7.8768 19.265C7.63011 19.2282 7.38121 19.2081 7.1318 19.205C6.6968 19.205 6.3608 19.277 6.1088 19.325C5.9388 19.36 5.7948 19.384 5.6738 19.384C5.56835 19.392 5.46344 19.3626 5.3775 19.301C5.29155 19.2394 5.23005 19.1494 5.2038 19.047C5.1558 18.893 5.1328 18.734 5.0968 18.591C5.0588 18.445 5.0118 18.195 4.9638 18.133C3.4208 17.954 2.5908 17.616 2.3988 17.147C2.37228 17.0902 2.35732 17.0287 2.3548 16.966C2.35096 16.8683 2.38318 16.7727 2.44533 16.6973C2.50748 16.6218 2.59521 16.5719 2.6918 16.557C5.3168 16.123 6.4968 13.438 6.5458 13.325L6.5588 13.302C6.7038 13.025 6.7388 12.782 6.6548 12.603C6.4988 12.254 5.9438 12.074 5.5848 11.953C5.48928 11.9289 5.39595 11.8968 5.3058 11.857C4.4158 11.507 4.2948 11.109 4.3438 10.833C4.4158 10.449 4.8848 10.196 5.2828 10.196C5.3998 10.196 5.4998 10.219 5.5908 10.256C5.9278 10.411 6.2258 10.497 6.4788 10.497C6.60843 10.5018 6.73703 10.4724 6.8518 10.412L6.8108 9.954C6.7308 8.647 6.6288 7.019 7.0578 6.065C8.2938 3.229 10.9868 3.011 11.7818 3.011L12.1168 3H12.1658Z"
        fill="white"
      />
    </svg>
  );
}
