import { ILink } from "../../link/angular/api.model";

export interface IList {
    title           : string;
    titleTag        : string;
    titleClass      : string;
    link            : ILink;
    description     : string;
    details         : string;
    content         : object;
    reversed        : boolean;
    contentClass    : string;
    class           : string;
}