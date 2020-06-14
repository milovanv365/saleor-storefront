import * as React from "react";
import "./scss/index.scss";

import * as S from "@components/molecules/ProductTile/styles";
import ReactSVG from "react-svg";
import imgStockAvailability from "../../images/check-circle-solid.svg";


interface IconProps {
  imgClass: string;
  stockStatus: string;
}

const StockAvailability: React.FC<IconProps> = ({imgClass, stockStatus}) => (
  <div className={imgClass}>
    <ReactSVG path={imgStockAvailability} className="svg-wrapper" />
    <S.Title>{stockStatus}</S.Title>
  </div>
);

export default StockAvailability;
