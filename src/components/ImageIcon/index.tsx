import * as React from "react";
import "./scss/index.scss";


interface IconProps {
  imgPath: string;
  imgClass: string;
}

const ImageIcon: React.FC<IconProps> = ({imgPath, imgClass}: IconProps) => (
  <img src={imgPath} className={imgClass} />
);

export default ImageIcon;
