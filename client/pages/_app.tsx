import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apollo-client";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloProvider client={client}>
    <NextNProgress color="#E60071" height={3}/>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      </ApolloProvider>
  );
}
