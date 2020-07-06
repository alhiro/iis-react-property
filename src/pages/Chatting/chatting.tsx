import React from 'react';
import { IonContent, IonPage, IonToolbar, IonButtons, IonIcon, IonFooter, IonText, IonBackButton, IonInput, IonButton, IonTitle } from '@ionic/react';
import './chatting.scss';
import { ellipsisVertical, sendSharp } from 'ionicons/icons';

export const Chatting: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="block-bar">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/find/detail"></IonBackButton>
        </IonButtons>
        <IonTitle><span className="title"><b></b> Shahrul M</span></IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonContent className="bg-white">
        <IonText>
          <div className="message">
            <div className="body">
              <div className="image">
                <img src="assets/user/sleep.png" alt="status" />
              </div>
              <div className="information">
                <h4>Landlord Offline</h4>
                <p>
                  Lorem ipsum dolor sit amet consecteur adipsing elit
                    </p>
              </div>
            </div>
          </div>
        </IonText>
      </IonContent>

      <IonFooter className="send-message">
        <IonToolbar mode="md">
          <IonButtons>
            <IonInput placeholder="Type message..."></IonInput>
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon slot="icon-only" icon={sendSharp}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Chatting;
