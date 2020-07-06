import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonButton, IonIcon, IonSlides, IonSlide, IonSearchbar, IonFooter, IonGrid, IonRow, IonCol, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBackButton } from '@ionic/react';
import './listItem.scss';
import { funnelOutline, optionsOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

const slideOpts = {
  initialSlide: 1,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 15,
  speed: 400
};

const product = [
  {
    id: 1,
    title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Selatan, Budi Hasian',
    room: 2,
    bath: 1,
    area: '250m',
    price: 800000000,
    images: [
      {image: 'assets/product/contemporary-home.jpg'},
      {image: 'assets/product/luxury-house.jpg'},
      {image: 'assets/product/modern-house.jpg'},
      {image: 'assets/product/new-comfortable-cottage.jpg'},
      {image: 'assets/product/pool-villa.jpg'}
    ]
  },
  {
    id: 2,
    title: 'Rumah Tipe 69 Jalan Petukangan Jakarta Selatan, Budi Hasian',
    room: 2,
    bath: 1,
    area: '250m',
    price: 900000000,
    images: [
      {image: 'assets/product/luxury-house.jpg'},
      {image: 'assets/product/contemporary-home.jpg'},
      {image: 'assets/product/modern-house.jpg'},
      {image: 'assets/product/new-comfortable-cottage.jpg'},
      {image: 'assets/product/pool-villa.jpg'}
    ]
  },
  {
    id: 3,
    title: 'Rumah Tipe 70 Jalan Petukangan Jakarta Selatan, Budi Hasian',
    room: 2,
    bath: 1,
    area: '250m',
    price: 1000000000,
    images: [
      {image: 'assets/product/contemporary-home.jpg'},
      {image: 'assets/product/modern-house.jpg'},
      {image: 'assets/product/luxury-house.jpg'},
      {image: 'assets/product/new-comfortable-cottage.jpg'},
      {image: 'assets/product/pool-villa.jpg'}
    ]
  },
  {
    id: 4,
    title: 'Rumah Tipe 71 Jalan Petukangan Jakarta Selatan, Budi Hasian',
    room: 2,
    bath: 1,
    area: '250m',
    price: 11000000000,
    images: [
      {image: 'assets/product/contemporary-home.jpg'},
      {image: 'assets/product/new-comfortable-cottage.jpg'},
      {image: 'assets/product/modern-house.jpg'},
      {image: 'assets/product/luxury-house.jpg'},
      {image: 'assets/product/pool-villa.jpg'}
    ]
  },
  {
    id: 5,
    title: 'Rumah Tipe 72 Jalan Petukangan Jakarta Selatan, Budi Hasian',
    room: 2,
    bath: 1,
    area: '250m',
    price: 1120000000,
    images: [
      {image: 'assets/product/contemporary-home.jpg'},
      {image: 'assets/product/pool-villa.jpg'},
      {image: 'assets/product/modern-house.jpg'},
      {image: 'assets/product/new-comfortable-cottage.jpg'},
      {image: 'assets/product/luxury-house.jpg'}
    ]
  }
];

// function showTab() {
//   const tabBar = document.getElementById('tabs');
//   if (tabBar !== null) {
//       tabBar.style.display = 'flex';
//   }
// }

export const listItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border"> 
        <IonToolbar className="padding-bar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/home"></IonBackButton>  
          </IonButtons>         
          <IonButtons className="list-search">
            <IonSearchbar placeholder="Rent house at Jakarta Selatan..."></IonSearchbar>
          </IonButtons>          
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-horizontal list-product bg-white">
        <div className="border-line"></div>
        <IonText>5 Homes found at <b>Jakarta Selatan</b></IonText>
        {
          product.map((item, i) => {
            return(
              <div className="list-detail" key={i}>
                <div className="slides">        
                  <IonSlides pager={true} options={slideOpts}>
                    {
                      product[i].images.map((data, i) => {
                        return(
                          <IonSlide key={i}>
                            <Link to="/find/detail">
                              <img src={data.image} alt={item.title}/>
                            </Link>                              
                          </IonSlide>
                        )
                      })
                    }
                  </IonSlides>
                </div>
                <div className="description">
                    <IonCardHeader>
                        <IonCardSubtitle>{item.room} ROOMS &#8226; {item.bath} BATHROOM &#8226; {item.area} </IonCardSubtitle>
                        <IonCardTitle><a href="/detail-item">{item.title}</a></IonCardTitle>
                        <IonCardSubtitle>{item.price}</IonCardSubtitle>
                    </IonCardHeader>
                </div>
              </div> 
            )
          })
        }
      </IonContent>

      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="6" size="6" class="ion-text-center">
              <IonButton expand="full" class="ion-text-wrap min-max-width no-ripple transparent">
                <IonIcon slot="icon-only" icon={funnelOutline}></IonIcon>
                    Filter
                </IonButton>
            </IonCol>

            <IonCol size-sm="6" size="6" class="ion-text-center">
              <IonButton expand="full" class="ion-text-wrap min-max-width no-ripple transparent">
                <IonIcon slot="icon-only" icon={optionsOutline}></IonIcon>
                    Sort
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>

    </IonPage>
  );
};

export default listItem;
