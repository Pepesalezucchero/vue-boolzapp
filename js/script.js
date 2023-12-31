/*
Milestone 1:
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
e dall’interlocutore (bianco) assegnando due classi CSS diverse.
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
visualizzare nome e immagine di ogni contatto.

Milestone 2:
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for,
visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato.

Milestone 3:
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter”
il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio,
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4:
Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina).

Milestone 5 - (opzionale):
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette
di cancellare il messaggio selezionato.
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.
*/

//creo i dati di lavoro
const { createApp } = Vue;

createApp({
    data() {
        return {
            //indice per selezionare i singoli contatti
            singleContact: 0,

            //quello che verrà inserito scrivendo nell'input di chat
            chatMessage: "",
            error: false,

            //variabile per filtrare i contatti tramite la searchbar
            searchContact:'',

            //array dei contatti
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {
        //funzione per ottenere l'ultimo messaggio di un contatto
        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage.message;
        },
        //funzione che mi permette di scrivere nella chat
        addChat() {
            //funzionante se quello che si scrive ha una lunghezza di più di 0 lettere
            if (this.chatMessage.length > 0) {
                this.contacts[this.singleContact].messages.push({message: this.chatMessage, status: 'sent'});
                this.chatMessage = "";
                this.error = false;
                // Simulazione della "ok" dopo un secondo
                setTimeout(() => {
                    this.contacts[this.singleContact].messages.push({message: "Ok", status: 'received'});
                }, 1000);
            //appunto, se non è lungo almeno 1 lettera il messaggio, non viene scritto nulla
            } else {
            this.error = true;
            }
        }
    },

    mounted() {
        console.log(this.contacts);
    },

}).mount('#app');