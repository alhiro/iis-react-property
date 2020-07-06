import React from 'react';
import { IonContent, IonPage, IonToolbar, IonButtons, IonButton, IonIcon, IonSlides, IonSlide, IonFooter, IonGrid, IonRow, IonCol, IonText, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBackButton, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonInput, IonAvatar } from '@ionic/react';
import './detail.scss';
import { heart, chatboxOutline } from 'ionicons/icons';

const slideOpts = {
  initialSlide: 0,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 15,
  speed: 400
};

const slideRelated = {
  initialSlide: 0,
  slidesPerView: 1.25,
  centeredSlides: false,
  spaceBetween: 15,
  speed: 400
};

const product = {
  id: 1,
  title: 'Rumah Tipe 68 Jalan Petukangan Jakarta Selatan, Budi Hasian',
  room: 2,
  bath: 1,
  area: '250m',
  price: 800000000,
  images: [
    {image: 'assets/product/luxury-house.jpg'},
    {image: 'assets/product/contemporary-home.jpg'},
    {image: 'assets/product/modern-house.jpg'},
    {image: 'assets/product/new-comfortable-cottage.jpg'},
    {image: 'assets/product/pool-villa.jpg'}
  ]
}

const related = [
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

export const Detail: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="list-product bg-white">
        <IonToolbar slot="fixed" className="ion-transparent">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/find/list-item"></IonBackButton>
          </IonButtons>
        </IonToolbar>

        <div className="slides">
          <IonIcon className="favorite" icon={heart}></IonIcon>
          <IonSlides pager={true} options={slideOpts}>
            {
              product.images.map((data, i) => {
                return (
                  <IonSlide key={i}>
                    <img src={data.image} alt="images" />
                  </IonSlide>
                )
              })
            }
          </IonSlides>
        </div>

        <div className="list-detail ion-padding-horizontal ">
          <div className="description">
            <IonCardHeader>
              <IonCardSubtitle>{product.room} ROOMS &#8226; {product.bath} BATHROOM &#8226; {product.area}</IonCardSubtitle>
              <IonCardTitle>{product.title}</IonCardTitle>
            </IonCardHeader>
          </div>

          <IonSegment value="detail" className="segment">
            <IonSegmentButton value="detail" className="no-ripple">
              <IonLabel>Detail</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="map" className="no-ripple">
              <IonLabel>Map</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="loan" className="no-ripple">
              <IonLabel>Loan</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <div className="list-item">
            <IonList>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Type of Property</IonLabel>
                <IonInput value="House"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Status</IonLabel>
                <IonInput value="Rent"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Certification</IonLabel>
                <IonInput value="SHM"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Area</IonLabel>
                <IonInput value="250M"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Building Size</IonLabel>
                <IonInput value="300M"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Full Furnished</IonLabel>
                <IonInput value="Yes"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Garage</IonLabel>
                <IonInput value="Yes"></IonInput>
              </IonItem>
              <IonItem className="ion-no-padding">
                <IonLabel position="floating">Carport</IonLabel>
                <IonInput value="Not Available"></IonInput>
              </IonItem>
            </IonList>
          </div>
        </div>
        <IonGrid class="loan">
            <IonRow>
                <IonCol size-sm="7" size="7">
                    <IonText>See loan options. Start from</IonText>
                    <IonLabel>Rp 1.2 Juta / <small>Bulan</small></IonLabel>
                </IonCol>                
                <IonCol size-sm="5" size="5" class="ion-text-center">
                    <IonButton shape="round" expand="block">Loan</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        <IonList class="contact">
            <IonItem class="ion-no-padding" lines="none">
                <IonAvatar>
                    <img src="assets/user/avatar.jpg" alt="profile"/>
                </IonAvatar>
                <IonLabel>
                    <h3>Sharul M &#8226; Landlord</h3>
                    <small>Last online: 1 jam lalu</small>
                </IonLabel>
            </IonItem>
        </IonList>

        <div className="list-item list-related">
          <IonText>Property near Jakarta Selatan</IonText>
          <IonSlides options={slideRelated}>
            {
              related.map((item, i) => {
                return (
                  <IonSlide key={i}>
                    <div className="related">
                      <div className="slides">
                        <IonIcon className="favorite" icon={heart}></IonIcon>
                        <IonSlides pager={true} options={slideOpts}>
                          {
                            related[i].images.map((data, i) => {
                              return (
                                <IonSlide key={i}>
                                  <img src={data.image} alt={item.title} />
                                </IonSlide>
                              )
                            })
                          }
                        </IonSlides>
                      </div>
                      <div className="description">
                        <IonCardHeader>
                          <IonCardSubtitle>
                            {item.room} ROOMS &#8226; {item.bath} BATHROOM &#8226; {item.area}
                          </IonCardSubtitle>
                          <IonCardTitle >{item.title}</IonCardTitle>
                          <IonCardSubtitle>{item.price}</IonCardSubtitle>
                        </IonCardHeader>
                      </div>
                    </div>
                  </IonSlide>
                )
              })
            }
          </IonSlides>
        </div>                  
      </IonContent>

      <IonFooter>
        <IonGrid>
          <IonRow>
            <IonCol size-sm="4" size="4">
              <IonText><small>Price start from:</small></IonText>
              <IonText>Rp 800 Juta</IonText>
            </IonCol>

            <IonCol size-sm="8" size="8" className="ion-text-center">
              <IonButton expand="block" routerLink="/find/chatting">
                <IonIcon slot="icon-only" icon={chatboxOutline} color="light"></IonIcon>
                    Contact Landlord
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>

    </IonPage>
  );
};

export default Detail;
