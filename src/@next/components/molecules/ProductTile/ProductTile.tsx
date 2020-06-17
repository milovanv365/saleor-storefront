import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import ImageIcon from "@temp/components/ImageIcon";
import StockAvailability from "@temp/components/StockAvailability";
import * as S from "./styles";
import { IProps } from "./types";

import imgNew from "../../../../images/badge-new.png";
import imgSale from "../../../../images/badge-sale.png";


export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const onSale =
    product.pricing &&
    product.pricing.onSale
      ? product.pricing.onSale
      : false;

  const stockStatus = product.isAvailable ? "in stock" : "out off stock"
  const stockClassName = product.isAvailable ? "stock-status in": "stock-status out"

  return (
    <S.Wrapper data-cy="product-tile">
      <S.ImgIconWrapper>
        <ImageIcon imgPath={imgNew} imgClass='icon-img-c'/>
        { onSale && <ImageIcon imgPath={imgSale} imgClass='icon-img-c'/> }
      </S.ImgIconWrapper>
      <S.Title>{product.name}</S.Title>
      <S.Price>
        <TaxedMoney taxedMoney={price} />
      </S.Price>
      <S.Image>
        <Thumbnail source={product} />
      </S.Image>
      <S.Image>
        <StockAvailability imgClass={stockClassName} stockStatus = {stockStatus}/>
      </S.Image>
    </S.Wrapper>
  );
};
