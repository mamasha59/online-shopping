import { gql } from "@apollo/client";

// получение продуктов по категориям
export const GET_PRODUCTS = gql`
  query products($category: String!) {
    products(category: $category) {
      category
      title
      id
      img
      decsiprion
      brend
      price
      altDescription
      article
    }
  }
`;

// получение продукта по айди
export const GET_PRODUCT_BU_ID = gql`
  query product($id: ID!) {
    product(id: $id) {
      title
      id
      img
      decsiprion
      brend
      price
      altDescription
      article
      category
    }
  }
`;
// получение списка категорий
export const GET_ALL_CATEGORY = gql`
  query product {
    categories {
      nameRu
      linkName
    }
  }
`;
// получение всех продуктов для поиска
export const GET_ALL_PRODUCTS_SEARCH = gql`
  query product {
    productsAll {
      title
      article
      id
    }
  }
`;