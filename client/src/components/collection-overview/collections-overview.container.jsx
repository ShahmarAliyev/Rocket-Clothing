import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import CollectionsOverview from "../../components/collection-overview/collection-overview.components";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
