import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardGroup, MDBCardTitle,MDBRow, MDBCol } from 'mdb-react-ui-kit';



// className='row-cols-md-3 row-cols-sm-12 row-cols-xs-12'
export default function Products(props) {
  const menu = props.menu;
  console.log(menu);
  const forYogurt = menu?.map((prod)=>{
          return(<MDBCol>
            <MDBCardGroup>
            <MDBCard key = {prod.id}className='my-3'>
              <MDBCardImage
                className='img-fluid d-block'
                src= {prod.image}
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle className='text-center'> {prod.name}</MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            </MDBCardGroup>
          </MDBCol>
  )});

  return (

    <MDBRow className="row-cols-1 row-cols-md-3">
       {forYogurt} 
    </MDBRow>
    
  );
}