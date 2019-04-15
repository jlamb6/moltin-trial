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

class Catalog extends React.Component {

  /**
   * @return {returns all products and all product images} 
   */
  static async getInitialProps() {
    let data = await Moltin.Products.With(['main_image', 'brands']).All().then(data => {
      return data;
    });
    let images = data.included.main_images.map(cur => cur);
    let products = data.data.map(cur => cur);
    let brands = data.included.brands.map(cur => {
      let brand = {};
      brand.brandName = cur.name;
      brand.brandId = cur.id;
      brand.brandSlug = cur.slug;
      return brand;
    });
    let allProducts = products.map(cur => {
      let id = cur.relationships.main_image.data.id;
      let brandId = cur.relationships.brands.data[0].id;
      let image = images.filter(cur => cur.id === id)[0];
      let brand = brands.filter(cur => cur.brandId === brandId)[0];
      cur.image_main = image;
      cur.brand = brand;
      return cur;
    });
    return { allProducts };
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
          <Navbar curPage="catalog"/>
          <div>
            <div className="container">
                <h4 className="display-4 text-center">Catalog</h4>
                <hr />
                <div className="row mt-5">
                    {this.props.allProducts.map((cur, index) => {
                        return (
                            <div className="col-xs-6 col-sm-6 col-md-4" key={`productIndex-${index}`}>
                                <ProductTile imgSource={cur.image_main.link.href} key={index} name={cur.name} brand={cur.brand} price={cur.price[0].amount} />
                            </div>
                        )
                    })}
                </div>
            </div>
          </div>
        </Layout>
      </Shopkit>
    )
  }
}
  
export default Catalog;