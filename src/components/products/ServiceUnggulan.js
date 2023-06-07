import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShippingFast, faExchangeAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const ServiceUnggulan = () => {
  return (
    <div className="flex container-fluid pt-5">
    <div className="row px-xl-5 pb-3 flex justify-content-between">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="flex align-items-center bg-light mb-4 place-content-around" style={{ padding: '30px' }}>
          <FontAwesomeIcon icon={faCheck} className="text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Produk Berkualitas</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
          <FontAwesomeIcon icon={faShippingFast} className="text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Gratis Ongkos Kirim</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
          <FontAwesomeIcon icon={faExchangeAlt} className="text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Hari Pengembalian</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
          <FontAwesomeIcon icon={faPhoneVolume} className="text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Dukungan</h5>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ServiceUnggulan;
