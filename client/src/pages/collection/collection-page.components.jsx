import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.components";

import selectCollection from "../../redux/shop/shop.selectors";
import { changeShopParams } from "../../redux/shop/shop.actions";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = () => {
  let { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const dispatch = useDispatch();

  dispatch(changeShopParams(collectionId.collectionId));

  return (
    <CollectionPageContainer>
      <CollectionTitle>{collection.title}</CollectionTitle>
      <CollectionItemsContainer>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
