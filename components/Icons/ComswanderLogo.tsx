import React from "react";
import { IconsCommonProps } from "./IconsInterface";

interface Props extends IconsCommonProps {
  iconFill?: string;
  textFill?: string;
}

const CosmwanderLogo: React.FC<Props> = ({
  iconFill = "fill-cw-purple-400",
  textFill = "fill-cw-purple-300",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="326"
      height="48"
      fill="none"
      viewBox="0 0 326 48"
    >
      <path
        className={iconFill}
        d="M46.974 25.164c-.35 7.375-4.006 14.176-9.91 18.436-5.908 4.262-13.406 5.51-20.33 3.383-6.926-2.126-12.505-7.39-15.13-14.268a24.45 24.45 0 011.688-20.963C6.982 5.4 13.33 1.139 20.499.197c7.172-.944 14.37 1.54 19.515 6.727l.145.24c.099.11.185.235.253.37.018.147.018.295 0 .442a1.24 1.24 0 010 .259 2.48 2.48 0 01-.09.498v.185c-.075.15-.168.293-.272.424a1.464 1.464 0 01-.126.185L24.666 25.109a1.794 1.794 0 01-1.284.546c-.48 0-.944-.198-1.283-.547a1.871 1.871 0 010-2.621l2.657-2.714a1.873 1.873 0 00.525-1.994 1.81 1.81 0 00-1.645-1.163h-.163c-2.825-.01-5.396 1.664-6.583 4.28a7.51 7.51 0 001.06 7.895c1.833 2.195 4.75 3.1 7.466 2.317 2.718-.784 4.74-3.113 5.18-5.963.148-1.02 1.08-1.721 2.078-1.57.999.153 1.686 1.104 1.537 2.124-.484 3.19-2.307 6.007-4.992 7.71a10.646 10.646 0 01-8.98 1.159c-3.017-.967-5.468-3.231-6.713-6.199a11.29 11.29 0 01.226-9.24c1.392-2.9 3.95-5.035 7.01-5.848a10.666 10.666 0 018.912 1.618l4.157-4.228a2.846 2.846 0 00.76-2.36 2.803 2.803 0 00-1.374-2.052A19.517 19.517 0 0016.61 4.932c-5.46 2.06-9.762 6.462-11.769 12.04a20.688 20.688 0 001.327 16.956c2.852 5.183 7.785 8.83 13.495 9.976 5.71 1.15 11.626-.316 16.188-4.006 4.563-3.69 7.313-9.238 7.525-15.177.09-2.432-.26-4.86-1.03-7.163-.319-.97.19-2.02 1.139-2.345a1.803 1.803 0 012.296 1.163 24.593 24.593 0 011.193 8.788z"
      ></path>
      <path
        className={textFill}
        d="M83.75 38.35c-1.89 0-3.663-.35-5.32-1.05a13.532 13.532 0 01-4.305-3.01 14.445 14.445 0 01-2.87-4.48c-.7-1.703-1.05-3.535-1.05-5.495 0-1.937.338-3.745 1.015-5.425a14.126 14.126 0 012.905-4.48 13.532 13.532 0 014.305-3.01c1.633-.723 3.407-1.085 5.32-1.085 1.75 0 3.29.245 4.62.735 1.33.467 2.648 1.237 3.955 2.31.187.14.315.303.385.49a.826.826 0 01.105.525c0 .163-.035.327-.105.49-.023.35-.175.63-.455.84-.257.21-.572.327-.945.35-.35 0-.7-.128-1.05-.385-.887-.77-1.82-1.353-2.8-1.75-.98-.397-2.217-.595-3.71-.595a9.466 9.466 0 00-4.025.875 10.99 10.99 0 00-3.29 2.38 10.961 10.961 0 00-2.24 3.5 11.21 11.21 0 00-.805 4.235c0 1.54.268 2.975.805 4.305a11.5 11.5 0 002.24 3.5 10.491 10.491 0 003.29 2.345c1.26.56 2.602.84 4.025.84a10.21 10.21 0 003.5-.595 12.505 12.505 0 003.115-1.75c.373-.28.747-.397 1.12-.35.373.023.688.175.945.455.257.257.385.618.385 1.085 0 .21-.035.42-.105.63-.07.187-.198.362-.385.525a11.816 11.816 0 01-4.025 2.31c-1.447.49-2.963.735-4.55.735zm21.783-.21c-1.867 0-3.535-.408-5.005-1.225a9.303 9.303 0 01-3.43-3.43c-.817-1.47-1.225-3.15-1.225-5.04 0-1.913.408-3.593 1.225-5.04a8.971 8.971 0 013.43-3.43c1.47-.84 3.138-1.26 5.005-1.26s3.523.42 4.97 1.26a8.664 8.664 0 013.43 3.43c.84 1.447 1.272 3.127 1.295 5.04 0 1.89-.42 3.57-1.26 5.04a9.3 9.3 0 01-3.43 3.43c-1.447.817-3.115 1.225-5.005 1.225zm0-2.87c1.283 0 2.415-.292 3.395-.875a6.217 6.217 0 002.31-2.415c.56-1.027.84-2.205.84-3.535s-.28-2.508-.84-3.535c-.56-1.05-1.33-1.867-2.31-2.45-.98-.583-2.112-.875-3.395-.875-1.26 0-2.392.292-3.395.875-.98.583-1.75 1.4-2.31 2.45-.56 1.027-.84 2.205-.84 3.535s.28 2.508.84 3.535a6.216 6.216 0 002.31 2.415c1.003.583 2.135.875 3.395.875zm21.832 2.87c-1.54 0-2.998-.233-4.375-.7-1.376-.49-2.461-1.155-3.255-1.995-.303-.35-.431-.735-.385-1.155.047-.42.257-.782.63-1.085.397-.303.805-.432 1.225-.385.42.047.77.233 1.05.56.467.513 1.144.957 2.03 1.33.91.373 1.902.56 2.975.56 1.517 0 2.637-.245 3.36-.735.747-.513 1.132-1.143 1.155-1.89 0-.77-.361-1.412-1.085-1.925-.723-.537-1.995-.957-3.815-1.26-2.356-.443-4.071-1.132-5.145-2.065-1.073-.933-1.61-2.065-1.61-3.395 0-1.19.327-2.17.98-2.94.677-.793 1.552-1.377 2.625-1.75a10.11 10.11 0 013.465-.595c1.54 0 2.894.257 4.06.77 1.167.49 2.1 1.178 2.8 2.065.304.35.432.712.385 1.085-.023.373-.21.688-.56.945-.35.21-.758.28-1.225.21a1.891 1.891 0 01-1.12-.595c-.583-.607-1.236-1.027-1.96-1.26-.7-.257-1.516-.385-2.45-.385-1.12 0-2.053.21-2.8.63-.723.42-1.085.992-1.085 1.715 0 .467.117.875.35 1.225.257.35.724.677 1.4.98.677.28 1.645.537 2.905.77 1.75.327 3.127.758 4.13 1.295 1.027.537 1.762 1.167 2.205 1.89.444.723.665 1.54.665 2.45a4.932 4.932 0 01-.91 2.905c-.583.84-1.435 1.505-2.555 1.995-1.12.49-2.473.735-4.06.735zm37.486-.105c-.467 0-.852-.152-1.155-.455-.303-.303-.455-.688-.455-1.155V26.38c0-1.54-.397-2.718-1.19-3.535-.77-.817-1.773-1.225-3.01-1.225-1.307 0-2.38.455-3.22 1.365-.817.887-1.225 2.042-1.225 3.465h-2.73c.023-1.54.362-2.893 1.015-4.06a6.975 6.975 0 012.73-2.73c1.167-.653 2.485-.98 3.955-.98 1.353 0 2.543.303 3.57.91 1.05.607 1.867 1.493 2.45 2.66.583 1.143.875 2.52.875 4.13v10.045c0 .467-.152.852-.455 1.155-.28.303-.665.455-1.155.455zm-23.8 0c-.467 0-.852-.152-1.155-.455-.303-.303-.455-.688-.455-1.155V20.5c0-.49.152-.875.455-1.155.303-.303.688-.455 1.155-.455.49 0 .875.152 1.155.455.303.28.455.665.455 1.155v15.925c0 .467-.152.852-.455 1.155-.28.303-.665.455-1.155.455zm11.935 0c-.467 0-.852-.152-1.155-.455-.303-.303-.455-.688-.455-1.155V26.38c0-1.54-.397-2.718-1.19-3.535-.77-.817-1.773-1.225-3.01-1.225-1.307 0-2.392.443-3.255 1.33-.84.887-1.26 2.018-1.26 3.395h-2.1c.023-1.493.338-2.812.945-3.955.63-1.167 1.482-2.077 2.555-2.73 1.073-.653 2.287-.98 3.64-.98 1.353 0 2.543.303 3.57.91 1.05.607 1.867 1.493 2.45 2.66.583 1.143.875 2.52.875 4.13v10.045c0 .467-.152.852-.455 1.155-.28.303-.665.455-1.155.455zM178.55 38c-.373 0-.711-.117-1.015-.35-.28-.233-.49-.56-.63-.98l-7.07-23.695c-.21-.7-.198-1.26.035-1.68.257-.42.677-.63 1.26-.63.35 0 .665.105.945.315.304.187.525.502.665.945l6.23 21.805h-.77l5.845-21.455c.094-.327.28-.583.56-.77.304-.21.642-.315 1.015-.315.327 0 .642.093.945.28.327.163.525.432.595.805l5.88 21.455h-.735l6.3-21.98c.21-.723.747-1.085 1.61-1.085.584 0 .969.233 1.155.7.187.443.199.98.035 1.61l-7.07 23.66c-.14.42-.361.758-.665 1.015-.28.233-.606.35-.98.35a1.58 1.58 0 01-1.05-.385 2.115 2.115 0 01-.595-.945l-5.81-21.945h.84l-5.845 21.91c-.14.42-.361.758-.665 1.015-.28.233-.618.35-1.015.35zm30.98.14c-1.75 0-3.314-.42-4.69-1.26-1.377-.84-2.462-1.995-3.255-3.465-.794-1.47-1.19-3.127-1.19-4.97 0-1.867.42-3.523 1.26-4.97a9.485 9.485 0 013.465-3.465c1.47-.863 3.115-1.295 4.935-1.295 1.843 0 3.488.432 4.935 1.295a9.231 9.231 0 013.43 3.465c.863 1.47 1.306 3.127 1.33 4.97l-1.26.315c0 1.773-.397 3.372-1.19 4.795-.794 1.423-1.867 2.543-3.22 3.36-1.33.817-2.847 1.225-4.55 1.225zm.525-2.87c1.26 0 2.38-.292 3.36-.875a6.477 6.477 0 002.31-2.45c.583-1.05.875-2.217.875-3.5 0-1.307-.292-2.473-.875-3.5-.56-1.05-1.33-1.867-2.31-2.45-.98-.607-2.1-.91-3.36-.91-1.214 0-2.322.303-3.325.91a6.318 6.318 0 00-2.38 2.45c-.56 1.027-.84 2.193-.84 3.5 0 1.283.28 2.45.84 3.5a6.652 6.652 0 002.38 2.45c1.003.583 2.111.875 3.325.875zm8.05 2.765c-.467 0-.852-.152-1.155-.455-.304-.303-.455-.688-.455-1.155v-5.6l.665-3.36 2.59.98v7.98c0 .467-.164.852-.49 1.155-.304.303-.689.455-1.155.455zm23.197 0c-.467 0-.863-.152-1.19-.455a1.643 1.643 0 01-.455-1.155v-8.82c0-1.377-.257-2.497-.77-3.36-.513-.887-1.202-1.54-2.065-1.96-.863-.443-1.855-.665-2.975-.665-1.05 0-1.995.21-2.835.63-.84.42-1.517.98-2.03 1.68-.49.7-.735 1.505-.735 2.415h-2.1c.023-1.47.397-2.777 1.12-3.92a7.527 7.527 0 012.94-2.73c1.237-.677 2.625-1.015 4.165-1.015 1.633 0 3.092.35 4.375 1.05 1.283.677 2.298 1.68 3.045 3.01.747 1.33 1.12 2.952 1.12 4.865v8.82c0 .443-.163.828-.49 1.155a1.522 1.522 0 01-1.12.455zm-14.665 0c-.467 0-.852-.152-1.155-.455-.303-.303-.455-.688-.455-1.155v-15.96c0-.49.152-.875.455-1.155.303-.303.688-.455 1.155-.455.49 0 .875.152 1.155.455.303.28.455.665.455 1.155v15.96c0 .467-.152.852-.455 1.155-.28.303-.665.455-1.155.455zm30.859.105c-1.82 0-3.465-.42-4.935-1.26a9.762 9.762 0 01-3.465-3.5c-.84-1.47-1.26-3.127-1.26-4.97s.397-3.488 1.19-4.935c.793-1.47 1.878-2.625 3.255-3.465 1.377-.863 2.94-1.295 4.69-1.295 1.447 0 2.765.303 3.955.91 1.213.607 2.217 1.423 3.01 2.45v-9.8c0-.49.152-.875.455-1.155.303-.303.688-.455 1.155-.455.49 0 .887.152 1.19.455.303.28.455.665.455 1.155V28.48c-.023 1.82-.467 3.465-1.33 4.935a9.15 9.15 0 01-3.465 3.465c-1.447.84-3.08 1.26-4.9 1.26zm0-2.87c1.26 0 2.38-.292 3.36-.875a6.477 6.477 0 002.31-2.45c.583-1.05.875-2.228.875-3.535s-.292-2.473-.875-3.5a6.217 6.217 0 00-2.31-2.415c-.98-.607-2.1-.91-3.36-.91-1.213 0-2.322.303-3.325.91a6.393 6.393 0 00-2.38 2.415c-.56 1.027-.84 2.193-.84 3.5s.28 2.485.84 3.535a6.66 6.66 0 002.38 2.45c1.003.583 2.112.875 3.325.875zm24.888 2.87c-1.937 0-3.652-.408-5.145-1.225a9.226 9.226 0 01-3.465-3.43c-.84-1.47-1.26-3.15-1.26-5.04 0-1.913.396-3.593 1.19-5.04.793-1.47 1.89-2.613 3.29-3.43 1.4-.84 3.021-1.26 4.865-1.26 1.796 0 3.348.408 4.655 1.225 1.306.793 2.31 1.902 3.01 3.325.7 1.4 1.05 3.022 1.05 4.865 0 .397-.14.735-.42 1.015-.257.257-.607.385-1.05.385h-14.385v-2.59h14.42l-1.435 1.015c-.024-1.237-.269-2.345-.735-3.325-.467-.98-1.132-1.75-1.995-2.31-.864-.56-1.902-.84-3.115-.84-1.33 0-2.485.303-3.465.91a5.991 5.991 0 00-2.205 2.485c-.514 1.05-.77 2.24-.77 3.57 0 1.33.291 2.52.875 3.57a6.84 6.84 0 002.45 2.45c1.05.607 2.263.91 3.64.91.746 0 1.516-.14 2.31-.42.816-.28 1.458-.607 1.925-.98.326-.257.676-.385 1.05-.385.373-.023.7.082.98.315.35.327.536.688.56 1.085.023.373-.14.7-.49.98-.794.63-1.785 1.155-2.975 1.575-1.167.397-2.287.595-3.36.595zm14.215-12.04c.047-1.423.409-2.695 1.085-3.815a7.747 7.747 0 012.765-2.66c1.144-.653 2.404-.98 3.78-.98 1.284 0 2.24.198 2.87.595.654.397.899.898.735 1.505-.07.35-.21.607-.42.77a1.53 1.53 0 01-.735.245 6.46 6.46 0 01-.91-.07c-1.423-.233-2.695-.198-3.815.105s-2.006.828-2.66 1.575c-.653.747-.98 1.657-.98 2.73h-1.715zm.105 11.9c-.49 0-.875-.128-1.155-.385-.28-.28-.42-.677-.42-1.19V20.43c0-.49.14-.875.42-1.155.28-.28.665-.42 1.155-.42.537 0 .934.14 1.19.42.28.257.42.642.42 1.155v15.995c0 .49-.14.875-.42 1.155-.256.28-.653.42-1.19.42z"
      ></path>
    </svg>
  );
};

export default CosmwanderLogo;
