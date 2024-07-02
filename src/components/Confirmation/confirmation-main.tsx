import { useState, useCallback, useRef } from "react";
import { domToPng } from "modern-screenshot";
import Styles from "./confirmation.module.css";
import DefaultConfirmation from "../../assets/confirmation-default-bg.png";

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

export default function ConfirmationMain() {
  const [image, setImage] = useState<string>(DefaultConfirmation);
  const [name, setName] = useState("");
  const [selectAPicture, setSelectAPicture] = useState("Select a Picture...");
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

  const handleRedo = () => {
    setName("");
    setSelectAPicture("Select a Picture...");
    setImage(DefaultConfirmation);
    setIsGenerateBtnHidden(false);
  };

  return (
    <div
      className={`${Styles.FlexContainer} mb-12 xl:mb-40 min-[1440px]:mb-56`}
    >
      <div className="flex flex-col gap-y-16">
        <ConfirmationHeader />
        <ConfirmationForm
          formSubmitHandler={handleFormSubmit}
          nameState={name}
          setNameState={setName}
          pictureLabel={selectAPicture}
          fileUploadHandler={handleFileUpload}
          isButtonHidden={isGenerateBtnHidden}
          redoHandler={handleRedo}
        />
      </div>
      <ImagePreviewContainer
        imageSource={image}
        isButtonHidden={isGenerateBtnHidden}
        nameState={name}
      />
    </div>
  );
}

function ConfirmationHeader() {
  return (
    <div className="text-[#F1F1F1]">
      <h1 className="font-bold text-3xl md:text-5xl">
        Tell your friends
        <br />
        you're attending!
      </h1>
      <p className="mt-4 font-medium text-sm md:text-lg">
        Make a shareable image for yourself
      </p>
    </div>
  );
}

function ConfirmationForm({
  formSubmitHandler,
  nameState,
  setNameState,
  pictureLabel,
  fileUploadHandler,
  isButtonHidden,
  redoHandler,
}: {
  formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  nameState: string;
  setNameState: React.Dispatch<React.SetStateAction<string>>;
  pictureLabel: string;
  fileUploadHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isButtonHidden: boolean;
  redoHandler: () => void;
}) {
  return (
    <form
      className="flex flex-col gap-y-8"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <label htmlFor="your-name" className="hidden">
        Your Name
      </label>
      <input
        type="text"
        name="your-name"
        id="your-name"
        placeholder="Your Name"
        className={Styles.YourName}
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
        required
      />
      <label htmlFor="your-picture" className={Styles.YourPicture}>
        <span className="text-[#2F20BF] font-extrabold">{pictureLabel}</span>
        <ImageIcon />
      </label>
      <input
        type="file"
        name="your-picture"
        id="your-picture"
        className="opacity-0 w-0 h-0 sr-only cursor-pointer"
        multiple={false}
        accept="image/*"
        onChange={fileUploadHandler}
      />
      {isButtonHidden ? (
        <button onClick={redoHandler} title="Redo" className={Styles.Redo}>
          Redo
        </button>
      ) : (
        <button type="submit" title="Generate" className={Styles.Generate}>
          Generate
        </button>
      )}
    </form>
  );
}

function ImagePreviewContainer({
  imageSource,
  nameState,
  isButtonHidden,
}: {
  imageSource: string;
  nameState: string;
  isButtonHidden: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    domToPng(ref.current!, {
      onCloneNode: (node) => {
        normalizeDomNodeForSvgScreenshot(node as HTMLElement);
      },
      scale: 3,
      style: {
        border: "none",
        borderRadius: "0",
        borderStyle: "none",
      },
      quality: 1,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "api-conf-confirmation-flyer.png";
        link.href = dataUrl;
        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );
      })
      .catch((error) => {
        console.error("Error generating image", error);
      });

    function splitCssValueAndUnit(cssValue: string) {
      const regex = /^(-?\d*\.?\d+)([a-zA-Z%]*)$/;
      const match = cssValue.match(regex);

      if (match) {
        const numericValue = parseFloat(match[1]);
        const unit = match[2];
        return { value: numericValue, unit: unit };
      } else {
        throw new Error("Invalid CSS value format");
      }
    }

    const normalizeDomNodeForSvgScreenshot = (node: HTMLElement) => {
      const fontSize = node.style.fontSize;
      if (fontSize) {
        try {
          const { value, unit } = splitCssValueAndUnit(fontSize);
          node.style.fontSize = `${value - 1}${unit}`; // Reducing font-size by 1px
        } catch (err) {
          // Ignore
        }
      }
      for (const childNode of node.children) {
        normalizeDomNodeForSvgScreenshot(childNode as HTMLElement);
      }
    };
  }, [ref]);

  return (
    <div className="flex flex-col">
      <div className={Styles.ImagePreviewContainer}>
        {/* TODO: Start */}
        <div ref={ref} className={Styles.ImagePreview}>
          <div className={Styles.ImagePreviewImageContainer}>
            <img
              src={imageSource}
              alt="You!"
              className="bg-white rounded-xl md:rounded-3xl md:mt-0 w-[35%] md:w-[39.5%] aspect-square object-cover object-center"
            />
            <p className={Styles.ImagePreviewName}>{nameState}</p>
          </div>
        </div>
        {/* TODO: End */}
      </div>
      {isButtonHidden && (
        <button
          title="Download image"
          onClick={handleDownloadImage}
          className={Styles.DownloadImageButton}
        >
          Download Image
        </button>
      )}
    </div>
  );
}
