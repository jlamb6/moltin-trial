//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
require('dotenv').config();

const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: process.env.CLIENT_ID, 
  client_secret: process.env.CLIENT_SECRET
});

import Head from 'next/head';
import Layout from '../components/layout';
import ProductTile from '../components/productTile';
import React from 'react';
import { Shopkit } from '@moltin/react-shopkit';
import Navbar from '../components/navbar';

class Categories extends React.Component {

  /**
   * @return {returns all categories} 
   */
  static async getInitialProps() {
    let data = await Moltin.Categories.All().then(data => {
      return data;
    });
    return { data };
  }

 render() {
    return (
      <Shopkit clientId={process.env.clientId}>
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <title>Moltin Ecommerce Site</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
          </Head>
          <Navbar />
          <div>
            <div className="container">
                <h4 className="display-4 text-center">Categories</h4>
                <hr />
                <div className="row mt-5">
                    {this.props.data.data.map((cur,  index) => <div className="col-md-4 text-center" key={`cat-index-${index}`}>{cur.name}</div>)}
                </div>
            </div>
          </div>
        </Layout>
      </Shopkit>
    )
  }
}
  
export default Categories;