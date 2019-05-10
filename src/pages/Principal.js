import React from 'react';
import NavPrincipal from '../components/NavPrincipal';
import CarouselPrincipal from '../components/CarouselPrincipal';

export default function Principal() {

    return (
      <div>
        <div className="row">
          <NavPrincipal/>
          <CarouselPrincipal/>
        </div>
      </div>
    );
}