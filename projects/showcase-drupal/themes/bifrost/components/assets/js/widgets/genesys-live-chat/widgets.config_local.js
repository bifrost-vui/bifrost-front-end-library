/*!
 * widgets
 * @version: 9.0.007.08
 * @license: Genesys Telecom Labs
 * @Modules Present: cx-bus,cx-app,cx-overlay,cx-toaster,cx-window-manager,cx-remote,cx-calendar,cx-console,cx-channel-selector,cx-call-us,cx-callback,cx-callback-service,cx-cobrowse,cx-chat-deflection,cx-gwe,cx-engage,cx-knowledge-center-service,cx-send-message,cx-send-message-service,cx-sidebar,cx-search,cx-webchat,cx-webchat-service-legacy-controller,cx-webchat-service-transport-controller,pure-engage-v3-rest-transport,cx-webchat-service,cx-offers,cx-clicktocall,cx-clicktocall-service,cx-buster,cx-richmedia-bridge
 */

if (!window._genesys) window._genesys = {};
if (!window._gt) window._gt = [];

window._genesys.widgets = {
  console: {
    open: false
  },
  channelselector: {
    ewtRefreshInterval: 10,
    channels: [
      {
        enable: true,
        clickCommand: 'CallUs.open',
        displayName: 'Contactez-nous',
        i18n: 'CallusTitle',
        // icon: 'call-outgoing',
        html: '<img src="/images/icons/livechat/call.svg">',
        ewt: {
          display: true,
          queue: 'callus_ewt_test_eservices',
          availabilityThresholdMin: 300,
          availabilityThresholdMax: 480,
          hideChannelWhenThresholdMax: false
        }
      },
      {
        enable: true,
        clickCommand: 'WebChat.open',
        displayName: 'Clavardage',
        i18n: 'ChatTitle',
        // icon: 'chat',
        html: '<img src="/images/icons/livechat/chat.svg">',
        ewt: {
          display: true,
          queue: 'chat_ewt_test_eservices',
          availabilityThresholdMin: 300,
          availabilityThresholdMax: 480,
          hideChannelWhenThresholdMax: false
        }
      },
      {
        enable: true,
        clickCommand: 'SendMessage.open',
        displayName: 'Courriel',
        i18n: 'EmailTitle',
        // icon: 'email',
        html: '<img src="/images/icons/livechat/email.svg">',
      },
      {
        enable: true,
        clickCommand: 'Callback.open',
        displayName: 'Appeler moi',
        i18n: 'CallbackTitle',
        // icon: 'call-incoming',
        html: '<img src="/images/icons/livechat/call-incoming.svg">',
        ewt: {
          display: true,
          queue: 'callback_ewt_test_eservices',
          availabilityThresholdMin: 300,
          availabilityThresholdMax: 480,
          hideChannelWhenThresholdMax: false
        }
      },
      {
        enable: true,
        name: 'storeLocator',
        clickCommand: 'StoreLocator.open',
        displayName: 'Store locator',
        i18n: 'storeLocatorTitle',
        // icon: '',
        html: '<img src="/images/icons/livechat/store-locator.svg">',
      }
    ]
  },
  main: {
    debug: true,
    theme: "light",
    lang: "en",
    i18n: {
      // Language Code
      "en": {
        "sidebar": {
          "SidebarTitle": "Need help?",
          "ChannelSelectorName": "Live Assistance",
          "ChannelSelectorTitle": "Get assistance from one of our agents right away",
          "SearchName": "Search",
          "SearchTitle": "Search",
          "OffersName": "Offers",
          "OffersTitle": "Offers",
          "CallUsName": "Call Us",
          "CallUsTitle": "Call Us details",
          "CallbackName": "Callback",
          "CallbackTitle": "Receive a Call",
          "SendMessageName": "Send Message",
          "SendMessageTitle": "Send Message",
          "WebChatName": "Live Chat",
          "WebChatTitle": "Live Chat",
          "ClickToCallName": "Click To Call",
          "ClickToCallTitle": "Click to Call"
        },
        "calendar": {
          "CalendarDayLabels": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "CalendarMonthLabels": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
          ],
          "CalendarLabelToday": "Today",
          "CalendarLabelTomorrow": "Tomorrow",
          "CalendarTitle": "Schedule a Call",
          "CalendarOkButtonText": "Okay",
          "CalendarError": "Unable to fetch availability details.",
          "CalendarClose": "Cancel"
        },
        // Widget name
        "webchat": {

          // Localized strings
          "ChatStarted": "Chat Started",
          "ChatEnded": "Chat Ended",
          "ChatFailed": "There was a problem starting the chat session. Please Retry.",

          // Customer Defined Strings - Match & Replace messages received from chat server
          "SYS0001": "An Agent will be with you shortly"
        },

        "sendmessage": {

          // Localized strings
          "SendMessageButton": "Send Message",
          "EmailFormFirstname": "First Name",
          "EmailFormLastname": "Last Name",

          //Errors
          "ErrorServerNotAvailable": "Unable to reach server. Please try again.",
          "ErrorAttachfileSizeMax": "Total size of attachments exceeds limit: "
        },
        "webchat": {
          "ChatButton": "Chat",
          "ChatStarted": "Chat Started",
          "ChatEnded": "Chat Ended",
          "AgentNameDefault": "Agent",
          "AgentConnected": "<%Agent%> Connected",
          "AgentDisconnected": "<%Agent%> Disconnected",
          "SupervisorNameDefault": "Supervisor",
          "SupervisorConnected": "<%Agent%> Connected",
          "SupervisorDisconnected": "<%Agent%> Disconnected",
          "AgentTyping": "...",
          "AgentUnavailable": "Sorry. There are no agents available. Please try later",
          "ChatTitle": "Live Chat",
          "ChatEnd": "X",
          "ChatClose": "X",
          "ChatMinimize": "Min",
          "ChatFormFirstName": "First Name",
          "ChatFormLastName": "Last Name",
          "ChatFormNickname": "Nickname",
          "ChatFormEmail": "Email",
          "ChatFormSubject": "Subject",
          "ChatFormPhoneNumber": "Phone",
          "ChatFormPlaceholderFirstName": "Required",
          "ChatFormPlaceholderLastName": "Required",
          "ChatFormPlaceholderNickname": "Optional",
          "ChatFormPlaceholderEmail": "Optional",
          "ChatFormPlaceholderSubject": "Optional",
          "ChatFormPlaceholderRequired": "Required",
          "ChatFormSubmit": "Start Chat",
          "ChatFormCancel": "Cancel",
          "ChatFormClose": "Close",
          "ChatInputPlaceholder": "Type your message here",
          "ChatInputSend": "SEND",
          "ChatEndQuestion": "Are you sure you want to end this chat session?",
          "ChatEndCancel": "Cancel",
          "ChatEndConfirm": "End chat",
          "ConfirmCloseWindow": "Are you sure you want to close chat?",
          "ConfirmCloseCancel": "Cancel",
          "ConfirmCloseConfirm": "Close",
          "ActionsDownload": "Download transcript",
          "ActionsEmail": "Email transcript",
          "ActionsPrint": "Print transcript",
          "ActionsCobrowseStart": "Start Co-browse",
          "ActionsSendFile": "Send File",
          "ActionsCobrowseStop": "Exit Co-browse",
          "ActionsVideo": "Invite to Video Chat",
          "ActionsTransfer": "Transfer",
          "ActionsInvite": "Invite",
          "InstructionsTransfer": "Open this link on another device to transfer your chat session</br></br><%link%>",
          "InstructionsInvite": "ShowSurveyAcceptare this link with another person to add them to this chat session</br></br><%link%>",
          "InviteTitle": "Need help?",
          "InviteBody": "Let us know if we can help out.",
          "InviteReject": "No thanks",
          "InviteAccept": "Start chat",
          "ChatError": "There was a problem starting the chat session. Please Retry.",
          "ChatErrorButton": "OK",
          "DownloadButton": "Download",
          "FileSent": "has sent:",
          "FileTransferRetry": "Retry",
          "FileTransferError": "OK",
          "FileTransferCancel": "Cancel",
          "RestoreTimeoutTitle": "Chat ended",
          "RestoreTimeoutBody": "Your previous chat session has timed out. Would you like to start a new one?",
          "RestoreTimeoutReject": "No thanks",
          "RestoreTimeoutAccept": "Start chat",
          "EndConfirmBody": "Would you really like to end your chat session?",
          "EndConfirmAccept": "End chat",
          "EndConfirmReject": "Cancel",
          "SurveyOfferQuestion": "Would you like to participate in a survey?",
          "ShowSurveyAccept": "Yes",
          "ShowSurveyReject": "No",
          "UnreadMessagesTitle": "unread",
          "AriaYouSaid": "You said",
          "AriaSaid": "said",
          "AriaSystemSaid": "System said",
          "AriaMinimize": "Live Chat minimize",
          "AriaMaximize": "Live Chat Maximize",
          "AriaClose": "Live chat close",
          "DayLabels": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thur",
            "Fri",
            "Sat"
          ],
          "MonthLabels": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec"
          ],
          "todayLabel": "Today",
          "ChatFormCustomerDEP": "Department",
          "DeptChooseOne": "Choose a department",
          "DeptSAC": "Service",
          "DeptSTC": "Support",
          "ChatFormProduct": "Product / Category",
          "ProductChooseOne": "Choose a product / categy",
          "ClubIllico": "Club illico",
          "EspaceClient": "Customer centre / videotron.com",
          "Facturation": "Invoicing",
          "illicoTV": "illico Digital TV and illico.tv",
          "Internet": "Internet",
          "TMO": "Mobile Telephony",
          "TPC": "Residential Telephony",
          "TVanalogue": "Analog Television",
          "Errors": {
            "102": "First name is required",
            "103": "Last name is required",
            "161": "Please enter your name",
            "201": "The file could not be sent.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>The maximum number of attached files would be exceeded (<%MaxFilesAllowed%>)</p>",
            "202": "The file could not be sent.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>Upload limit and/or maximum number of attachments would be exceeded (<%MaxAttachmentsSize%>)</p>",
            "203": "The file could not be sent.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>File type is not allowed.</p>",
            "204": "We're sorry but your message is too long. Please write a shorter message",
            "240": "We're sorry but we cannot start a new chat at this time. Please try again later",
            "364": "Invalid email address",
            "ChatUnavailable": "We're sorry but we cannot start a new chat at this time. Please try again later",
            "CriticalFault": "Your chat session has ended unexpectedly due to an unknown issue. We apologize for the inconvenience",
            "StartFailed": "There was an issue starting your chat session. Please verify your connection and that you submitted all required information properly, then try again",
            "MessageFailed": "Your message was not received successfully. Please try again",
            "RestoreFailed": "We're sorry but we were unable to restore your chat session due to an unknown error",
            "TransferFailed": "Unable to transfer chat at this time. Please try again later",
            "FileTransferSizeError": "The file could not be sent.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>File size is larger than the allowed size (<%MaxSizePerFile%>)</p>",
            "InviteFailed": "Unable to generate invite at this time. Please try again later",
            "ChatServerWentOffline": "Messages are currently taking longer than normal to get through. We're sorry for the delay",
            "RestoredOffline": "Messages are currently taking longer than normal to get through. We're sorry for the delay",
            "Disconnected": "<div style='text-align:center'>Connection lost</div>",
            "Reconnected": "<div style='text-align:center'>Connection restored</div>",
            "FileSendFailed": "The file could not be sent.<br/><strong><p class='filename' title='<%FilenameFull%>'><%FilenameTruncated%></p></strong><p class='cx-advice'>There was an unexpected disconnection. Try again?</p>",
            "Generic": "<div style='text-align:center'>An unexpected error occurred</div>"
          }
        },
        "callback": {
          "CallbackTitle": "Receive a Call",
          "CancelButtonText": "Cancel",
          "ConfirmButtonText": "Confirm",
          "CallbackPlaceholderRequired": "Required",
          "CallbackPlaceholderOptional": "Optional",
          "CallbackFirstName": "First Name",
          "CallbackLastName": "Last Name",
          "CallbackPhoneNumber": "Phone",
          "CallbackQuestion": "When should we call you?",
          "CallbackEmail": "Email",
          "CallbackDayLabels": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "CallbackMonthLabels": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          "CallbackConfirmDescription": "You're booked in!",
          "CallbackNumberDescription": "We will call you at the number provided:",
          "CallbackNotes": "Notes",
          "CallbackDone": "Close",
          "CallbackOk": "Okay",
          "CallbackCloseConfirm": "Are you sure you want to cancel arranging this callback?",
          "CallbackNoButtonText": "No",
          "CallbackYesButtonText": "Yes",
          "CallbackWaitTime": "Wait Time",
          "CallbackWaiTimeText": "min wait",
          "CallbackOptionASAP": "As soon as possible",
          "CallbackOptionPickDateTime": "Pick date & time",
          "CallbackPlaceholderCalendar": "Select Date & Time",
          "AriaMinimize": "Callback minimize",
          "AriaMaximize": "Callback Maximize",
          "AriaClose": "Callback close",
          "CallbackCustomerDEP": "Department",
          "DeptChooseOne": "Choose a department",
          "DeptSAC": "Service",
          "DeptSTC": "Support",
          "CallbackProduct": "Product / Category",
          "ProductChooseOne": "Choose a product / categy",
          "ClubIllico": "Club illico",
          "EspaceClient": "Customer centre / videotron.com",
          "Facturation": "Invoicing",
          "illicoTV": "illico Digital TV and illico.tv",
          "Internet": "Internet",
          "TMO": "Mobile Telephony",
          "TPC": "Residential Telephony",
          "TVanalogue": "Analog Television",
          "Errors": {
            "501": "Invalid parameters cannot be accepted, please check the supporting server API documentation for valid parameters.",
            "503": "Missing apikey, please ensure it is configured properly.",
            "1103": "Missing apikey, please ensure it is configured properly.",
            "7030": "Please enter a valid phone number.",
            "7036": "Callback to this number is not possible. Please retry with another phone number.",
            "7037": "Callback to this number is not allowed. Please retry with another phone number.",
            "7040": "Please configure a valid service name.",
            "7041": "Too many requests at this time.",
            "7042": "Office closed. Please try scheduling with in the office hours.",
            "unknownError": "Something went wrong, we apologize for the inconvenience. Please check your connection settings and try again.",
            "phoneNumberRequired": "Phone number is required."
          }
        }
      },
      "fr": {
        "sidebar": {
          "SidebarTitle": "Besoin d'aide?",
          "ChannelSelectorName": "Live Assistance",
          "ChannelSelectorTitle": "Get assistance from one of our agents right away",
          "SearchName": "Search",
          "SearchTitle": "Search",
          "OffersName": "Offers",
          "OffersTitle": "Offers",
          "CallUsName": "Call Us",
          "CallUsTitle": "Call Us details",
          "CallbackName": "Appeler moi",
          "CallbackTitle": "Recevoir un appel",
          "SendMessageName": "Send Message",
          "SendMessageTitle": "Send Message",
          "WebChatName": "Clavardage",
          "WebChatTitle": "Clavardage",
          "ClickToCallName": "Click To Call",
          "ClickToCallTitle": "Click to Call"
        },
        "calendar": {
          "CalendarDayLabels": [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi"
          ],
          "CalendarMonthLabels": [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jui",
            "Aou",
            "Sept",
            "Oct",
            "Nov",
            "Déc"
          ],
          "CalendarLabelToday": "Aujourd'hui",
          "CalendarLabelTomorrow": "Demain",
          "CalendarTitle": "Planifier un appel",
          "CalendarOkButtonText": "Okay",
          "CalendarError": "Impossible d'obtenir les disponibilités.",
          "CalendarClose": "Annuler"
        },
        "webchat": {
          "ChatButton": "Clavardage",
          "ChatStarted": "Clavardage démarré",
          "ChatEnded": "Clavardage terminé",
          "AgentNameDefault": "Agent",
          "AgentConnected": "<%Agent%> Connecté",
          "AgentDisconnected": "<%Agent%> Déconnecté",
          "SupervisorNameDefault": "Superviseur",
          "SupervisorConnected": "<%Agent%> Connecté",
          "SupervisorDisconnected": "<%Agent%> Déconnecté",
          "AgentTyping": "...",
          "AgentUnavailable": "Sorry. There are no agents available. Please try later",
          "ChatTitle": "Clavardage",
          "ChatEnd": "X",
          "ChatClose": "X",
          "ChatMinimize": "Min",
          "ChatFormFirstName": "Prénom",
          "ChatFormLastName": "Nom",
          "ChatFormNickname": "Surnom",
          "ChatFormEmail": "Email",
          "ChatFormSubject": "Suject",
          "ChatFormPhoneNumber": "Téléphone",
          "ChatFormPlaceholderFirstName": "Requis",
          "ChatFormPlaceholderLastName": "Requis",
          "ChatFormPlaceholderNickname": "Optionnel",
          "ChatFormPlaceholderEmail": "Optionnel",
          "ChatFormPlaceholderSubject": "Optionnel",
          "ChatFormPlaceholderRequired": "Requis",
          "ChatFormSubmit": "Démarrer",
          "ChatFormCancel": "Annuler",
          "ChatFormClose": "Fermer",
          "ChatInputPlaceholder": "Tapez votre message ici",
          "ChatInputSend": "Envoyer",
          "ChatEndQuestion": "Êtes-vous sûr de vouloir mettre fin à cette session de discussion?",
          "ChatEndCancel": "Annuler",
          "ChatEndConfirm": "Fermer",
          "ConfirmCloseWindow": "Êtes-vous sûr de vouloir fermer la discussion?",
          "ConfirmCloseCancel": "Annuler",
          "ConfirmCloseConfirm": "Fermé",
          "ActionsDownload": "Télécharger la transcription",
          "ActionsEmail": "Transcription courriel",
          "ActionsPrint": "Imprimer la transcription",
          "ActionsCobrowseStart": "Démarrer la co-navigation",
          "ActionsSendFile": "Envoyer le fichier",
          "ActionsCobrowseStop": "Quitter Co-navigation",
          "ActionsVideo": "Inviter au clavardage vidéo",
          "ActionsTransfer": "Transfert",
          "ActionsInvite": "Invité",
          "InstructionsTransfer": "Ouvrez ce lien sur un autre appareil pour transférer votre session de discussion</br></br><%link%>",
          "InstructionsInvite": "ShowSurveyAcceptare this link with another person to add them to this chat session</br></br><%link%>",
          "InviteTitle": "Besoin d'aide?",
          "InviteBody": "Faites-nous savoir si nous pouvons aider.",
          "InviteReject": "Non merci",
          "InviteAccept": "Démarrer clavardage",
          "ChatError": "Un problème est survenu lors du démarrage de la session de discussion. Veuillez réessayer.",
          "ChatErrorButton": "OK",
          "DownloadButton": "Télécharger",
          "FileSent": "a envoyé:",
          "FileTransferRetry": "Réessayez",
          "FileTransferError": "OK",
          "FileTransferCancel": "Annuler",
          "RestoreTimeoutTitle": "Clavardage terminé",
          "RestoreTimeoutBody": "Votre session de discussion précédente a expiré. Voulez-vous en créer un nouveau?",
          "RestoreTimeoutReject": "Non merci",
          "RestoreTimeoutAccept": "Démarrer clavardage",
          "EndConfirmBody": "Voulez-vous vraiment terminer votre session de chat?",
          "EndConfirmAccept": "Mettre fin au chat",
          "EndConfirmReject": "Annuler",
          "SurveyOfferQuestion": "Voulez-vous participer à un sondage?",
          "ShowSurveyAccept": "Oui",
          "ShowSurveyReject": "Non",
          "UnreadMessagesTitle": "non lu",
          "AriaYouSaid": "Tu as dit",
          "AriaSaid": "dit",
          "AriaSystemSaid": "Système dit",
          "AriaMinimize": "Clavardage minimiser",
          "AriaMaximize": "Clavardage Maximisé",
          "AriaClose": "Clavardage fermé",
          "DayLabels": [
            "Dim",
            "Lun",
            "Mar",
            "Mer",
            "Jeu",
            "Ven",
            "Sam"
          ],
          "MonthLabels": [
            "Jan",
            "Fév",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jui",
            "Aou",
            "Sept",
            "Oct",
            "Nov",
            "Déc"
          ],
          "todayLabel": "Aujourd'hui",
          "ChatFormCustomerDEP": "Département",
          "DeptChooseOne": "Choisir un département",
          "DeptSAC": "Service",
          "DeptSTC": "Problème",
          "ChatFormProduct": "Produit / Catégorie",
          "ProductChooseOne": "Choisir un produit / catégorie",
          "ClubIllico": "Club illico",
          "EspaceClient": "Espace client / videotron.com",
          "Facturation": "Facturation",
          "illicoTV": "illico télé numérique et illico.tv",
          "Internet": "Internet",
          "TMO": "Téléphonie mobile",
          "TPC": "Téléphonie résidentielle",
          "TVanalogue": "Télévision analogue",
          "Errors": {
            "102": "Le prénom est requis",
            "103": "Le nom est requis",
            "161": "S'il vous plaît entrez votre nom",
            "201": "Le fichier n'a pas pu être envoyé.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>Le nombre maximum de fichiers attachés serait dépassé (<%MaxFilesAllowed%>)</p>",
            "202": "Le fichier n'a pas pu être envoyé.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>La limite de téléchargement et / ou le nombre maximal de pièces jointes serait dépassé (<%MaxAttachmentsSize%>)</p>",
            "203": "Le fichier n'a pas pu être envoyé.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>Le type de fichier n'est pas autorisé.</p>",
            "204": "Nous sommes désolés, mais votre message est trop long. S'il vous plaît écrivez un message plus court",
            "240": "Nous sommes désolés, mais nous ne pouvons pas commencer une nouvelle discussion pour le moment. Veuillez réessayer plus tard",
            "364": "Adresse courriel invalide",
            "ChatUnavailable": "Nous sommes désolés, mais nous ne pouvons pas commencer une nouvelle discussion pour le moment. Veuillez réessayer plus tard",
            "CriticalFault": "Votre session de discussion a pris fin de manière inattendue en raison d'un problème inconnu. Nous nous excusons pour le dérangement",
            "StartFailed": "Un problème est survenu lors du démarrage de votre session de discussion. Veuillez vérifier votre connexion et vous assurer que vous avez correctement soumis toutes les informations requises, puis réessayez.",
            "MessageFailed": "Votre message n'a pas été reçu avec succès. Veuillez réessayer",
            "RestoreFailed": "Nous sommes désolés, mais nous n'avons pas pu restaurer votre session de discussion en raison d'une erreur inconnue.",
            "TransferFailed": "Impossible de transférer le chat pour le moment. Veuillez réessayer plus tard",
            "FileTransferSizeError": "Le fichier n'a pas pu être envoyé.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>La taille du fichier est supérieure à la taille autorisée (<%MaxSizePerFile%>)</p>",
            "InviteFailed": "Impossible de générer une invitation pour le moment. Veuillez réessayer plus tard",
            "ChatServerWentOffline": "Les messages prennent actuellement plus de temps que la normale pour passer. Nous sommes désolés pour le retard",
            "RestoredOffline": "Les messages prennent actuellement plus de temps que la normale pour passer. Nous sommes désolés pour le retard",
            "Disconnected": "<div style='text-align:center'>Connexion perdue</div>",
            "Reconnected": "<div style='text-align:center'>Connexion rétablie</div>",
            "FileSendFailed": "Le fichier n'a pas pu être envoyé.<br/><strong><p class='filename' title='<%FilenameFull%>'><%FilenameTruncated%></p></strong><p class='cx-advice'>Il y a eu une déconnexion imprévue. Réessayer?</p>",
            "Generic": "<div style='text-align:center'>une erreur inattendue est apparue</div>"
          }
        },
        "callback": {
          "CallbackTitle": "Recevoir un appel",
          "CancelButtonText": "Annuler",
          "ConfirmButtonText": "Confirmer",
          "CallbackPlaceholderRequired": "Requis",
          "CallbackPlaceholderOptional": "Optionel",
          "CallbackFirstName": "Prénom",
          "CallbackLastName": "Nom",
          "CallbackPhoneNumber": "Téléphone",
          "CallbackQuestion": "Quand voulez-vous être appelé?",
          "CallbackEmail": "Courriel",
          "CallbackDayLabels": [
            "Dimanche",
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi",
            "Samedi"
          ],
          "CallbackMonthLabels": [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Jun",
            "Jui",
            "Aou",
            "Sep",
            "Oct",
            "Nov",
            "Déc"
          ],
          "CallbackConfirmDescription": "Votre demande est enregistré.",
          "CallbackNumberDescription": "Nous allons vous appeler au numéro spécifé :",
          "CallbackNotes": "Notes",
          "CallbackDone": "Fermer",
          "CallbackOk": "Okay",
          "CallbackCloseConfirm": "êtes vous sure de vouloir annuler votre demande d'appel?",
          "CallbackNoButtonText": "Non",
          "CallbackYesButtonText": "Oui",
          "CallbackWaitTime": "Temps attente",
          "CallbackWaiTimeText": "minimum attente",
          "CallbackOptionASAP": "Dès que possible",
          "CallbackOptionPickDateTime": "Choisir une date et heure",
          "CallbackPlaceholderCalendar": "Choisir une date et heure",
          "AriaMinimize": "Rappel minimiser",
          "AriaMaximize": "Rappeler Maximiser",
          "AriaClose": "Rappel fermé",
          "CallbackCustomerDEP": "Département",
          "DeptChooseOne": "Choisir un département",
          "DeptSAC": "Service",
          "DeptSTC": "Problème",
          "CallbackProduct": "Produit / Catégorie",
          "ProductChooseOne": "Choisir un produit / catégorie",
          "ClubIllico": "Club illico",
          "EspaceClient": "Espace client / videotron.com",
          "Facturation": "Facturation",
          "illicoTV": "illico télé numérique et illico.tv",
          "Internet": "Internet",
          "TMO": "Téléphonie mobile",
          "TPC": "Téléphonie résidentielle",
          "TVanalogue": "Télévision analogue",
          "Errors": {
            "501": "Les paramètres non valides ne peuvent pas être acceptés. Consultez la documentation de l'API du serveur de support pour connaître les paramètres valides.",
            "503": "Apikey manquant, assurez-vous qu'il est correctement configuré.",
            "1103": "Missing apikey, please ensure it is configured properly.",
            "7030": "Veuillez spécifier un numéro de téléphone valide.",
            "7036": "Le rappel à ce numéro n'est pas possible. Veuillez réessayer avec un autre numéro de téléphone..",
            "7037": "Le rappel à ce numéro n'est pas autorisé. Veuillez réessayer avec un autre numéro de téléphone.",
            "7040": "Veuillez configurer un nom de service valide.",
            "7041": "Trop de demande en ce moment.",
            "7042": "Bureau fermé. S'il vous plaît essayez de planifier dans les heures de bureau.",
            "unknownError": "Quelque chose s'est mal passé, nous nous excusons pour le désagrément occasionné. Veuillez vérifier vos paramètres de connexion et réessayer.",
            "phoneNumberRequired": "Le numéro de téléphone est requis."
          }
        }
      }
    },
    timeFormat: 24,
    customStylesheetID: "genesys_widgets_custom",
    preload: []
  },
  stats: {
    ewt: {
      dataURL: "https://contact-lab.videotron.com/genesys/1/service/EWT",
      apikey: ""
    }
  },
  callback: {
    dataURL: "https://contact-lab.videotron.com/genesys/1/service/callback/RES_SAC_Service_AN_CallMeNow",
    apiVersion: "v1",
    callDirection: "USERTERMINATED",
    immediateCallback: true,
    scheduledCallback: false,
    serviceName: "",
    ewt: {
      display: false,
      queue: "INF_SCCC_VE_FR_General_VL_PIX_SIP_SW",
      threshold: "0",
      refreshInterval: "30",
      immediateCallback: {
        thresholdMin: null,
        thresholdMax: null
      }
    },
    countryCodes: false,
    apikey: "",
    form: {
      wrapper: "<table></table>",
      inputs: [
        {
          id: "cx_webchat_form_firstname",
          name: "firstname",
          maxlength: "100",
          placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
          label: "@i18n:webchat.ChatFormFirstName"
        },

        {
          id: "cx_webchat_form_lastname",
          name: "lastname",
          maxlength: "100",
          placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
          label: "@i18n:webchat.ChatFormLastName"
        },
        {
          id: "cx_form_callback_phone_number",
          name: "phonenumber",
          maxlength: "14",
          placeholder: "@i18n:callback.CallbackPlaceholderRequired",
          label: "@i18n:callback.CallbackPhoneNumber",

          onkeypress: function (event) {

            // To allow only number inputs
            return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
          }
        }
      ]
    }
  },
  webchat: {
    dataURL: "https://contact-lab.videotron.com/genesys/2/chat/customer-support",
    apikey: "",
    form: {
      wrapper: "<table></table>",
      inputs: [
        {
          id: "cx_webchat_form_firstname",
          name: "firstname",
          maxlength: "100",
          placeholder: "@i18n:webchat.ChatFormPlaceholderFirstName",
          label: "@i18n:webchat.ChatFormFirstName"
        },

        {
          id: "cx_webchat_form_lastname",
          name: "lastname",
          maxlength: "100",
          placeholder: "@i18n:webchat.ChatFormPlaceholderLastName",
          label: "@i18n:webchat.ChatFormLastName"
        },
        {
          id: "cx_webchat_form_email",
          name: "email",
          maxlength: "100",
          placeholder: "Requis",
          label: "@i18n:webchat.ChatFormEmail",
          type: "text",
          validateWhileTyping: false, // default is false
          validate: function (event, form, input, label, $, CXBus, Common) {
            if (input) {
              if (input.val())
                return true;
              else
                return false;
            }
            return false;
          }
        },
        {
          id: "cx_webchat_form_phone_number",
          name: "phonenumber",
          maxlength: "14",
          placeholder: "@i18n:webchat.ChatFormPlaceholderRequired",
          label: "@i18n:webchat.ChatFormPhoneNumber",

          onkeypress: function (event) {

            // To allow only number inputs
            return (event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 43)
          }
        },
        {
          id: "cx_form_webchat_customDEP",
          name: "customerDEPT",
          maxlength: "100",
          placeholder: "@i18n:webchat.ChatFormPlaceholderRequired",
          label: "@i18n:webchat.ChatFormCustomerDEP",
          type: "select",
          options: [
            {
              text: "@i18n:webchat.DeptSAC",
              value: "SAC"
            },
            {
              text: "@i18n:webchat.DeptSTC",
              value: "STC"
            }
          ],
          wrapper: "<tr><th>{label}</th><td>{input}</td></tr>"
        }
      ]
    },
    emojis: true,
    uploadsEnabled: false,
    confirmFormCloseEnabled: true,
    actionsMenu: true,
    maxMessageLength: 150,
    charCountEnabled: true,
    userData: {
      wDestination: "SAU"
    },
    cometD: {
      enabled: false
    },
    autoInvite: {
      enabled: true,
      timeToInviteSeconds: 5,
      inviteTimeoutSeconds: 300
    },
    chatButton: {
      enabled: false,
      effect: 'fade',
      openDelay: 0,
      effectDuration: 300,
      hideDuringInvite: true
    },
  },
  callus: {
    contacts: [
      {
        displayName: 'Payments',
        i18n: 'Number001',
        number: '1 202 555 0162'
      },
      {
        displayName: 'Local',
        i18n: 'Number002',
        number: '202 555 0134'
      },
      {
        displayName: 'International',
        i18n: 'Number003',
        number: '0647 555 0131'
      }
    ],
    hours: [
      '8am - 8pm Mon - Fri',
      '10am - 6pm Sat - Sun'
    ]
  },
  sidebar: {
    showOnStartup: true,
    position: "right",
    //  position: "left",
    expandOnHover: true,
    channels: [
      {
        name: "WebChat"
      },
      {
        name: "Callback"
      }
    ]
  }
};
(function (o) {
  var f = function () {
    var d = o.location;
    o.aTags = o.aTags || [];
    for (var i = 0; i < o.aTags.length; i++) {
      var oTag = o.aTags[i];
      var fs = d.getElementsByTagName(oTag.type)[0], e;
      if (d.getElementById(oTag.id)) return;
      e = d.createElement(oTag.type);
      e.id = oTag.id;
      if (oTag.type == "script") {e.src = oTag.path;}
      else {
        e.type = 'text/css';
        e.rel = 'stylesheet';
        e.href = oTag.path;
      }
      if (fs) {fs.parentNode.insertBefore(e, fs);} else {d.head.appendChild(e);}
    }
  }, ol = window.onload;
  if (o.onload) {
    typeof window.onload != "function" ? window.onload = f : window.onload = function () {
      ol();
      f();
    }
  } else f();
})({
  location: document,
  onload: false,
  aTags: [
    {type: "script", id: "genesys-cx-widget-script", path: "../../js/widgets/genesys-live-chat/widgets.min_local.js"},
    {type: "link", id: "genesys-cx-widget-styles", path: "../../css/widgets/genesys-live-chat/widgets.min_local.css"}
  ]
});
