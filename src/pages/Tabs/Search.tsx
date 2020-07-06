import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonSlides, IonSlide, IonList, IonItem, IonLabel, IonInput, IonModal, IonSearchbar } from '@ionic/react';
import { notifications, heart, locationSharp, homeOutline, checkmarkSharp, closeOutline } from 'ionicons/icons';
import './Search.scss';

const slideOpts = {
  initialSlide: 1,
  slidesPerView: 1.25,
  centeredSlides: true,
  spaceBetween: 15,
  speed: 400
};

const product = [
  {
    id: 1,
    name: 'Contemporary Home',
    image: 'assets/product/contemporary-home.jpg',
  },
  {
    id: 2,
    name: 'Luxury House',
    image: 'assets/product/luxury-house.jpg',
  },
  {
    id: 3,
    name: 'Modern House',
    image: 'assets/product/modern-house.jpg',
  },
  {
    id: 4,
    name: 'New Comfortable Cottage',
    image: 'assets/product/new-comfortable-cottage.jpg',
  },
  {
    id: 5,
    name: 'Pool Villa',
    image: 'assets/product/pool-villa.jpg',
  }
];

const location = [
  {
    id: 1,
    name: 'Jakarta Utara',
  },
  {
    id: 2,
    name: 'Jakarta Timur',
  },
  {
    id: 3,
    name: 'Jakarta Barat',
  },
  {
    id: 4,
    name: 'Jakarta Pusat',
  },
  {
    id: 5,
    name: 'Bekasi',
  },
  {
    id: 6,
    name: 'Tangerang',
  }
];

const type = [
  {
    id: 1,
    name: 'House',
  },
  {
    id: 2,
    name: 'Town House',
  },
  {
    id: 3,
    name: 'Apartment',
  },
  {
    id: 4,
    name: 'Room',
  }
];

const status = [
  {
    id: 1,
    name: 'Rent',
  },
  {
    id: 2,
    name: 'Buy',
  },
  {
    id: 3,
    name: 'Auction',
  }
];

// function hideTab() {
//   const tabBar = document.getElementById('tabs');
//   if (tabBar !== null) {
//     tabBar.style.display = 'none';
//   }
// }

export const Search: React.FC = () => {
  const [openLocation, locationModal] = useState(false);
  const [openType, typeModal] = useState(false);
  const [openStatus, statusModal] = useState(false);
  
  return (
    <IonPage>
      <IonHeader> 
        <IonToolbar>
          <IonTitle>REAL ESTATE FINDER</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={notifications}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={heart}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main-wrapper">
          <div className="slides">
          <IonSlides pager={true} options={slideOpts}>
            {
              product.map((data, i) => {
                return(
                  <IonSlide key={data.id}>
                    <img src={data.image} alt={data.name}/>
                  </IonSlide>
                )
              })
            }
          </IonSlides>
          </div>

          <div className="list-item">
            <IonList>
              <IonItem onClick={(e) => locationModal(true)}>
                <IonIcon icon={locationSharp} slot="start"></IonIcon>
                <IonLabel position="floating">Picked Location</IonLabel>
                <IonInput value="Jakarta Selatan"></IonInput>
              </IonItem>
              <IonItem onClick={(e) => typeModal(true)}>
                <IonIcon icon={homeOutline} slot="start"></IonIcon>
                <IonLabel position="floating">Type of Property</IonLabel>
                <IonInput value="House"></IonInput>         
              </IonItem>
              <IonItem onClick={(e) => statusModal(true)}>
                <IonIcon icon={checkmarkSharp} slot="start"></IonIcon>
                <IonLabel position="floating">Status</IonLabel>
                <IonInput value="Rent"></IonInput>         
              </IonItem>        
            </IonList>
          </div>       

          <IonButton routerLink="/find/list-item" className="fit-block" shape="round" expand="block">Find</IonButton>
        </div>

      </IonContent>

      {/* Modal Location */}
      <IonModal isOpen={openLocation} cssClass='list-location'>
        <IonHeader> 
          <IonToolbar>
            <IonButtons slot="start" onClick={() => locationModal(false)} class="closed">
              <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
            </IonButtons>
            <IonButtons slot="start" class="search">
              <IonSearchbar placeholder="Type keyword here..."></IonSearchbar>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="bg-white">
            <div className="main-wrapper">
                <div className="list-location">            
                    <IonList>
                        <IonTitle>Most people find:</IonTitle>
                        {
                          location.map((data, i) => {
                            return(
                              <IonItem key={data.id}>
                                <IonIcon icon={locationSharp}></IonIcon>
                                <IonLabel onClick={() => locationModal(false)}>{data.name}</IonLabel>
                            </IonItem>
                            )
                          })
                        }                        
                    </IonList>
                </div>
            </div>
        </IonContent>
      </IonModal>

      {/* Modal Type */}
      <IonModal isOpen={openType} cssClass='auto-height'>
        <IonHeader> 
          <IonToolbar>
            <IonButtons slot="start" onClick={() => typeModal(false)} class="closed">
              <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
            </IonButtons>
            <IonButtons slot="start" class="title-modal">
              <IonTitle><span>Type of Property</span></IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
          <div className="inner-content">
            <div className="main-wrapper">
              <div className="list-modal">
                <IonList lines="none">
                  {
                    type.map((data, i) => {
                      return (
                        <IonItem key={data.id}>
                          <IonLabel onClick={() => typeModal(false)}>{data.name}</IonLabel>
                        </IonItem>
                      )
                    })
                  }
                </IonList>
              </div>
            </div>
          </div>          
      </IonModal>

      {/* Modal Status */}
      <IonModal isOpen={openStatus} cssClass='auto-height'>
        <IonHeader> 
          <IonToolbar>
            <IonButtons slot="start" onClick={() => statusModal(false)} class="closed">
              <IonIcon slot="icon-only" icon={closeOutline}></IonIcon>
            </IonButtons>
            <IonButtons slot="start" class="title-modal">
              <IonTitle><span>Type of Property</span></IonTitle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
          <div className="inner-content">
            <div className="main-wrapper">
              <div className="list-modal">
                <IonList lines="none">
                  {
                    status.map((data, i) => {
                      return (
                        <IonItem key={data.id}>
                          <IonLabel onClick={() => statusModal(false)}>{data.name}</IonLabel>
                        </IonItem>
                      )
                    })
                  }
                </IonList>
              </div>
            </div>
          </div>     
      </IonModal>
    </IonPage>
  );
};

export default Search;
