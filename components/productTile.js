import React from 'react';
import { BuyButton } from '@moltin/react-shopkit';
/*
<BuyButton id={this.props.id}>
    {({ addToCart }) => <button onClick={addToCart}>Add To Cart</button>}
</BuyButton>
*/

const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
  client_id: process.env.CLIENT_ID
});

class ProductTile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="container p-4">
                    <img className="card-img-top" src={this.props.imgSource} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h6 className="card-title">{this.props.brand.brandName}</h6>
                    <p className="card-subtitle mb-2 text-muted">{this.props.name}</p>
                    <p className="card-text">${this.props.price.toString().slice(0, -2).concat(`.${this.props.price.toString().slice(-2)}`)}</p>
                </div>
                <style jsx>{`
                    .card {
                        cursor: pointer;
                        transition: .4s;
                        transform-origin: 50% 20%;
                    }
                    .card:hover {
                        transform: scale(1.15);
                        z-index: 5;
                        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
                    }
                    .card-body {
                        white-space: nowrap;
                    }
                    .card-body h6, .card-body p {
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    img.card-img-top {
                        display: block;
                        margin: 0 auto;
                        max-width: 215px;
                    }
                    .card .container {
                        height: 263px;
                        width: 288px;
                    }
                    @media (max-width: 991.98px) {
                        .card .container {
                            height: 203px;
                            width: 208px;
                        }
                    }
                    @media (max-width: 767.98px) {
                        .card {
                            margin-bottom: 20px;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default ProductTile