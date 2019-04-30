
import Head from 'next/head';
import Layout from '../components/layout';
import ProductTile from '../components/productTile';
import React from 'react';
import { Shopkit } from '@moltin/react-shopkit';
import Navbar from '../components/navbar';

class HomePage extends React.Component {


    render() {
        return (
            <Shopkit clientId={process.env.clientId}>
                <Layout>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                        <title>Moltin Ecommerce Site</title>
                        <link rel="stylesheet" href="/static/styles.css" />
                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                    </Head>
                    <Navbar curPage="catalog"/>
                    <div className="site-section">
                        <div className="container" style={{height: 'calc(100vh-200px)', minHeight: '580px', zIndex: '9', overflow: 'hidden'}}>
                            <div className="row" style={{height: 'calc(100vh - 200px)'}}>
                                <div className="col-md-6">
                                    <img className="main-img" src="https://www.skuvantage.com.au/wp-content/uploads/2018/02/model01.jpg" alt="main image" />
                                </div>
                                <div className="col-md-6 order-first order-md-0">
                                    <div className="top-margin">
                                        <h5 style={{color: '#f52968'}}>See All Of Our Collections</h5>
                                        <h1 className="display-4 mb-4">New Arrivals</h1>
                                        <button className="btn btn-lg btn-dark">SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="full-width">
                            <div className="cat-link grey">
                                <h5>Categories</h5>
                            </div>
                            <div className="cat-link">
                                <h5>Collections</h5>
                            </div>
                            <div className="cat-link grey">
                                <h5>Products</h5>
                            </div>
                        </div>
                    </div>
                    <div className="site-section" style={{margin: '80px'}}>
                        <div className="container">
                            <div className="section-title">
                                <h5 className="section-title-header">Discover<br /> The Collections</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="img-container">
                                        <div className="overlay-text"><h5>Dresses</h5></div>
                                        <img src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="img-container">
                                        <div className="overlay-text"><h5>Dresses</h5></div>
                                        <img src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="img-container">
                                        <div className="overlay-text"><h5>Dresses</h5></div>
                                        <img src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1045&q=80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
                <style jsx>{`
                    .top-margin {
                        margin-top: 40%;
                        text-align: center;
                    }
                    .main-img {
                        max-width: 100%;
                        height: auto;
                    }
                    .full-width {
                        display: flex;
                        justify-content: space-between;
                    }
                    .cat-link {
                        color: white;
                        text-align: center;
                        background-color: #f52968;
                        width: 100%;
                        padding: 18px;
                        cursor: pointer;
                        transition: .2s;
                    }
                    .cat-link:hover {
                        background-color: #23272b; 
                    }
                    .cat-link h5 {
                        margin-bottom: 0;
                    }
                    .grey {
                        background-color: #f7f7f7;
                        color: black;
                    }
                    .grey:hover {
                        color: white;
                        background-color: #f52968;
                    }
                    .section-title {
                        padding-left: 20px;
                        margin-bottom: 80px;
                        border-left: 5px solid #f52968;
                    }
                    .section-title-header {
                        font-size: 2rem;
                        font-weight: 400;
                    }
                    .flex-box {
                        display: flex;
                        justify-content: space-between;
                    }
                    .img-container {
                        position: relative;
                        margin-bottom: 40px;
                    }
                    .img-container img {
                        width: 100%;
                    }
                    .overlay-text {
                        position: absolute;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: #fff;
                        padding: 10px 20px;
                        width: 50%;
                        height: 25%;
                        text-align: center;
                        cursor: pointer;
                        transition: .2s;
                    }
                    .overlay-text:hover {
                        background-color: black;
                        color: white;
                    }
                    .overlay-text h5 {
                        margin-bottom: 2px;
                    }
                `}</style>
            </Shopkit>
        )
    }
}

export default HomePage