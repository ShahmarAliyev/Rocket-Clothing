import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsPageContainer from "../collection/collection-page.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const Shoppage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverviewContainer />} />
        <Route path=":collectionId" element={<CollectionsPageContainer />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shoppage);
