import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import Gallery from "react-photo-gallery";
import Gal from "./Gallery.js";
import Services from "./Services";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="BIN RIAZ Leathers" />

          <div className="banner">
            <p>Welcome to BIN RIAZ Leathers</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <div className="container1">
            {/* <h2 className="homeHeading">Featured Products</h2> */}
            <h1 className="heading ">
              {" "}
              <span>Featured</span> Product{" "}
            </h1>

            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>

          <h1 className="heading ">
            {" "}
            <span>Product</span> Gallery{" "}
          </h1>
          <Gal />
          <Services />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
