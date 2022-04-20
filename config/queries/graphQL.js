import gql from "graphql-tag";
export const HOMEPAGE_QUERY = gql`query {
    homepageFashions(filters: {slug : {eq : "user1-homepage"} }) {
      data {
        attributes {
          slug
          logo
          HelmetWrapper {
            favicon
          }
          ModalComponent {
            offerBanner
            offerContentH2
            subscribeBtnText
          }
          HeaderOne {
            headerContactWelcome
            headerContactCallus
          }
          MasterFooter {
            subscribeH4
            subscribeParagraph
            footerLogoParagraph
            footerCol3Title
            footerCol3L1
            footerCol3L2
            footerCol3L3
          }
        }
      }
    }
  }`;

  export const HOMEPAGE_COMMERCE_QUERY = gql`query products {
    products(options :{sort: {createdAt: ASC}} ) {
      items {
        id
        name
        slug
      }
    }
  }`;