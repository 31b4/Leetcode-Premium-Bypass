

class FirebaseAnalyticsManager{  
    constructor( ){ 
        if(FirebaseAnalyticsManager._instance) { 
            throw new Error("Firebase Analytics Manager Have been instantiated")
        }
        this.GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect';
        this.MEASUREMENT_ID = `G-9B493T8583`;
        this.API_SECRET = `Q-G1HeKRTtGyXkBh9aKL7Q`;
        this.SESSION_EXPIRATION_IN_MIN = 30;
        this.enableAnalytics = false; 
    }

    async getOrCreateClientId() {
        if(!this.enableAnalytics) return;
        const result = await chrome.storage.local.get('clientId');
        let clientId = result.clientId;
        if (!clientId) {
          clientId = self.crypto.randomUUID();
          await chrome.storage.local.set({clientId});
        }
        return clientId;
    }

    async fireModifiedButtonClickedEvent(id, buttonType, buttonName) {
        if(!this.enableAnalytics) return;
        fetch(
            `${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`,
            {
                method: 'POST',
                body: JSON.stringify({
                client_id: await this.getOrCreateClientId(), 
                events: [
                    {
                    name: 'button_clicked',
                    params: {
                        id: id,
                        type:buttonType, 
                        name: buttonName
                    },
                    },
                ],
                }),
            }
            );
    }


    async fireUnlockedDataEvent(dataType) { 
        if(!this.enableAnalytics) return;
        fetch(
            `${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`,
            {
                method: 'POST',
                body: JSON.stringify({
                client_id: await this.getOrCreateClientId(), 
                events: [
                    {
                    name: 'data_unlocked',
                    params: {
                        type: dataType
                    },  
                    },
                ],
                }),
            }
            );
    }

    async fireErrorEvent(url, error, unlocker){ 
        if(!this.enableAnalytics) return;
        fetch(
            `${this.GA_ENDPOINT}?measurement_id=${this.MEASUREMENT_ID}&api_secret=${this.API_SECRET}`,
            {
                method: 'POST',
                body: JSON.stringify({
                client_id: await this.getOrCreateClientId(), 
                events: [
                    {
                    name: 'unlock_error',
                    params: {
                        error_type: error, 
                        url: url, 
                        unlocker_name : unlocker
                    },  
                    },
                ],
                }),
            }
            );
    }
}   






let analyticsManager = new FirebaseAnalyticsManager() 
export{ analyticsManager}