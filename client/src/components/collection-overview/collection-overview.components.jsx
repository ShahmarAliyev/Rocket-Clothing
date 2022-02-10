import { CollectionsOverviewContainer } from "./collection-overview.styles";

import { useSelector } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors.js";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
