import { IChannelsData } from '../../channels/angular/api.model';
import { INavItems } from '../../tab/angular/api.model';

export interface ICardChannels {
    full?: ICardChannelsFull[];
    limited: IChannelsData[];
}

export interface ICardChannelsFull {
    tabContent: ICardChannelsFullTabContent;
    tabData: INavItems;
}

export interface ICardChannelsFullTabContent {
    ariaLabelledby: string;
    channelsList: IChannelsData[];
    class?: string;
    description?: string | HTMLElement;
    id: string;
}

export interface ICardContent {
    icon: string;
    label: string;
}

export interface ICardContentLists {
    channels: ICardChannels;
    content: ICardContent[];
    description: string;
    title: string;
}

export interface ICardDetailsColors {
    name: string;
    value: string;
}

export interface ICardImage {
    alt: string;
    badgeIconName?: string; // DEPRECATED
    src: string;
}

export interface ICardInputIncrement {
    ariaLabel: string;
    class: string;
    errorMessage: string;
    inputId: string;
    isDisabled: boolean;
    isReadOnly: boolean;
    max: number;
    min: number;
    value: number;
}

export interface ICardLink {
    class?: string;
    href: string;
    label: string;
}

export interface ICardTitle {
    category?: string;
    detail: string;
}
