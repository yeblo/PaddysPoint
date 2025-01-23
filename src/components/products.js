import React, { useState } from 'react';
import Products from './allProducts';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer
} from 'mdb-react-ui-kit';
import { food, juices, pastries, salad, specialJuices, yogurt,hotshot,parfait } from './menu'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import NavBar from './navbar';
import Footer from './footer';


export default function Product() {
  const [basicActive, setBasicActive] = useState('tab2');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
    <NavBar/>
      <MDBContainer>
        <h1 className='py-5 text-center menu-title'>Explore Our Menu</h1>
        <MDBTabs pills className='mb-3 justify-content-center'>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
              Fruit Juices
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
              Special Juices
            </MDBTabsLink>
          </MDBTabsItem>
          {/* <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
              Yogurt
            </MDBTabsLink>
          </MDBTabsItem> */}
          {/* <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
              Salad
            </MDBTabsLink>
          </MDBTabsItem> */}
          {/* <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
              Pastries
            </MDBTabsLink>
          </MDBTabsItem> */}
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'}>
              Hot Shot
            </MDBTabsLink>
          </MDBTabsItem>
          {/* <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab7')} active={basicActive === 'tab7'}>
              Food
            </MDBTabsLink>
          </MDBTabsItem> */}
          {/* <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab8')} active={basicActive === 'tab8'}>
              Parfait
            </MDBTabsLink>
          </MDBTabsItem> */}
        </MDBTabs>

        <MDBTabsContent>
          {/* <MDBTabsPane show={basicActive === 'tab1'}>
            
              <Products menu={yogurt} />
           
          </MDBTabsPane> */}
          <MDBTabsPane show={basicActive === 'tab2'}>
          <Products menu={juices} />
            </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'tab3'}>
          <Products menu={specialJuices} />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'tab6'}> 
            <Products menu={hotshot} />
          </MDBTabsPane>
          {/* <MDBTabsPane show={basicActive === 'tab4'}> <Products menu={salad} />
          </MDBTabsPane> */}
          {/* <MDBTabsPane show={basicActive === 'tab5'}> <Products menu={pastries} /></MDBTabsPane> */}
          
          {/* <MDBTabsPane show={basicActive === 'tab7'}> <Products menu={food} /></MDBTabsPane> */}
          {/* <MDBTabsPane show={basicActive === 'tab8'}> <Products menu={parfait} /></MDBTabsPane> */}

        </MDBTabsContent>
      </MDBContainer>
      <Footer/>
    </>
  );
}