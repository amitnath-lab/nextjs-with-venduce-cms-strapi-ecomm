import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import TopCollection from "../components/common/Collections/Collection3";
import Parallax from "./layouts/Fashion/Components/Parallax";
import SpecialProducts from "../components/common/Collections/TabCollection1";
import ServiceLayout from "../components/common/Service/service1";
import Blog from "../components/common/Blog/blog1";
import Instagram from "../components/common/instagram/instagram1";
import LogoBlock from "../components/common/logo-block";
import HeaderOne from "../components/headers/header-one";
import { Product4 } from "../services/script";
import Paragraph from "../components/common/Paragraph";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import CMSQuery from "../components/common/query/cms";
import CommerceQuery from "../components/common/query/commerce";
import {HOMEPAGE_QUERY, HOMEPAGE_COMMERCE_QUERY} from "../config/queries/graphQL";

const Fashion = () => {
  return (
    <>
      <CMSQuery query={HOMEPAGE_QUERY} >
      {({ data: { homepageFashions } }) => {
        return (
          <>
            {homepageFashions.data.map((homepage) => {
              return (
                <>
                  <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" type="image/x-icon" href={homepage.attributes.HelmetWrapper.favicon} />
                  </Helmet>
                  <ModalComponent data={homepage.attributes.ModalComponent} />
                  <HeaderOne logoName={homepage.attributes.logo} topClass="top-header" />
                  <Banner />
                  <CollectionBanner />
                  <Paragraph
                    title="title1 section-t-space"
                    inner="title-inner1"
                    hrClass={false}
                  />
                  <CommerceQuery query={HOMEPAGE_COMMERCE_QUERY} >
                  {({ data: { products : {items} } }) => {
                    return (
                      <>
                        <ul>
                          {items.map((item) =><li>{item.name}</li>)}
                        </ul>
                        
                        <TopCollection
                          noTitle="null"
                          backImage={true}
                          type="fashion"
                          title="top collection"
                          subtitle="special offer"
                          productSlider={Product4}
                          designClass="section-b-space p-t-0 ratio_asos"
                          noSlider="false"
                          cartClass="cart-info cart-wrap"
                        />
                        <Parallax />
                        <SpecialProducts
                          type="fashion"
                          backImage={true}
                          productSlider={Product4}
                          line={true}
                          title="title1 section-t-space"
                          inner="title-inner1"
                          designClass="section-b-space p-t-0 ratio_asos"
                          noSlider="true"
                          cartClass="cart-info cart-wrap"
                        />
                      </>
                    );
                  }}
                  </CommerceQuery>
                  <ServiceLayout sectionClass="border-section small-section" />
                  <Blog type="fashion" title="title1" inner="title-inner1" />
                  <Instagram type="fashion" />
                  <div className="section-b-space">
                    <LogoBlock />
                  </div>
                  <MasterFooter
                    data={homepage.attributes.MasterFooter}
                    footerClass={`footer-light`}
                    footerLayOut={"light-layout upper-footer"}
                    footerSection={"small-section border-section border-top-0"}
                    belowSection={"section-b-space light-layout"}
                    newLatter={true}
                    logoName={"ca_logo.jpg"}
                  />
                </>
              );
            })};
          </>
        );
      }}
      </CMSQuery>
    </>
  );
};

export default Fashion;
