export const PriceCard = ({plans}) => {
    
    return ( 
        <section className="pricing-table">
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[0].type}</h5>
                    <h1>${plans[0].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[0].details["noOfusers"]}</p>
                    <p>{plans[0].details["storage"]}</p>
                    <p>{plans[0].details["noOfpubproje"]}</p>
                    <p>{plans[0].details["access"]}</p>
                    <p className="no">{plans[0].details["noOfpriproje"]}</p>
                    <p className="no">{plans[0].details["phone"]}</p>
                    <p className="no">{plans[0].details["subDomain"]}</p>
                    <p className="no">{plans[0].details["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[1].type}</h5>
                    <h1>${plans[1].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[1].details["noOfusers"]}</p>
                    <p>{plans[1].details["storage"]}</p>
                    <p>{plans[1].details["noOfpubproje"]}</p>
                    <p>{plans[1].details["access"]}</p>
                    <p>{plans[1].details["noOfpriproje"]}</p>
                    <p>{plans[1].details["phone"]}</p>
                    <p>{plans[1].details["subDomain"]}</p>
                    <p className="no">{plans[1].details["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
            <div className="price-card-container">
                <div className="price-card-header">
                    <h5>{plans[2].type}</h5>
                    <h1>${plans[2].price} <span className="per-time">/month</span></h1>
                </div>
                <div className="price-card-body">
                    <p>{plans[2].details["noOfusers"]}</p>
                    <p>{plans[2].details["storage"]}</p>
                    <p>{plans[2].details["noOfpubproje"]}</p>
                    <p>{plans[2].details["access"]}</p>
                    <p>{plans[2].details["noOfpriproje"]}</p>
                    <p>{plans[2].details["phone"]}</p>
                    <p>{plans[2].details["subDomain"]}</p>
                    <p>{plans[2].details["report"]}</p>
                    <button><h3>Button</h3></button>
                </div>
            </div>
        </section>
     );
    
}

