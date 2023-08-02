import { IChannelsData } from '../../channels/angular/api.model';
import { INavItems } from '../../tab/angular/api.model';

export interface IChannels {
    full?: IChannelsFull[];
    limited: IChannelsData[];
}

export interface IChannelsFull {
    tabContent: IChannelsFullTabContent;
    tabData: INavItems;
}

export interface IChannelsFullTabContent {
    ariaLabelledby: string;
    channelsList: IChannelsData[];
    class?: string;
    description?: string | HTMLElement;
    id: string;
}

export interface IContent {
    icon: string;
    label: string;
}

export interface IContentLists {
    channels: IChannels;
    content: IContent[];
    description: string;
    title: string;
}

export interface IDetailsColors {
    name: string;
    value: string;
}

export interface IImage {
    alt: string;
    badgeIconName?: string;
    src: string;
}

export interface IInputIncrement {
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

export interface ILink {
    class?: string;
    href: string;
    label: string;
}

export interface ITitle {
    category?: string;
    detail: string;
}
