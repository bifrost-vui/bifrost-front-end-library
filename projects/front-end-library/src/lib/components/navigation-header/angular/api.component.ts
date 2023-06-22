import { Component, Input } from '@angular/core';
import {
    IAccount,
    IAccountLink,
    IDefaultMenuItem,
    IHeaderLogo,
    IMenuItem,
    ITopBar,
    ITopBarMenuItem,
    ITopBarSection,
} from './api.model';
import { ILogo } from '../../../components/logo/angular/api.model';

@Component({
    selector: '',
})
export class AccountAPI implements IAccount {
    /** <span style="color: red;">__Required__</span> */
    @Input() firstName: string;
    /** <span style="color: red;">__Required__</span> */
    @Input() lastName: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See IAccountLink <a href="#iaccountlink-api" target="_self">API</a>
     *  and <a href="#iaccountlink-format" target="_self">expected format</a>.
     */
    @Input() links: IAccountLink[];
}

@Component({
    selector: '',
})
export class AccountLinkAPI implements IAccountLink {
    /** <span style="color: red;">__Required__</span> */
    @Input() href: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See [Icons - Interface List](/?path=/story/components-icon--drupal-interface) for icon names.
     */
    @Input() icon: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() subtitle?: string;
    /** <span style="color: red;">__Required__</span> */
    @Input() title: string;
}

@Component({
    selector: '',
})
export class DefaultMenuItemAPI implements IDefaultMenuItem {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * String of classes injected to this menu link.
     * <br><br>
     * For example, in Drupal, this is set in a `Class`
     * text field in the menu item edition form.
     */
    @Input() class?: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If there is no `href`, it will be a `<button>` instead of a `<a>`.
     */
    @Input() href?: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If the menu item is active, meaning that:
     * - the current page is the page this menu item goes to,
     * - or the current page is a children / sub-page of that menu item.
     */
    @Input() isActive?: boolean = false;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * The active menu item is:
     * - `true` = a clickable link
     * - `false` = a non-clickable string of text
     */
    @Input() isActiveLinkClickable?: boolean = true;
    /** <span style="color: red;">__Required__</span> */
    @Input() label: string;
    /** <span style="color: orange;">__Optional__</span> */
    @Input() rel?: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If the active menu item is a non-clickable string of text,
     * then this prop will put a non-visible message before this menu item
     * for screen readers to read. This is for accessibility purpose.
     */
    @Input() unclickableActiveMenuItemScreenReaderMessage?: string;
}

@Component({
    selector: '',
})
export class HeaderLogoAPI implements IHeaderLogo {
    /** <span style="color: red;">__Required__</span> */
    @Input() href: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See Logo Component [API](/?path=/docs/components-logo--drupal).
     */
    @Input() name: 'videotron' | 'business';
}

@Component({
    selector: '',
})
export class MenuItemAPI implements IMenuItem {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * CSS hexadecimal color code, ex.: `#FF0000`, that will
     * put custom color style on this menu item link.
     * <br><br>
     * For example, in Drupal, this is set in a `Color`
     * text field in the menu item edition form.
     * <br><br>
     * __Note__: In Storybook mock data, because of an issue,
     * you can't put the `#` before the color. It will make the
     * app crash.
     */
    @Input() color?: string;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * If this menu items have children to form a sub-menu,
     * the prop `subItems` will be an array of objects using this current
     * <a href="#imenuitem-api" target="_self">API</a> (IMenuItem).
     */
    @Input() subItems?: IMenuItem[];

    // These following props are already available in "DefaultMenuItemAPI"

    /** @ignore */
    @Input() class?: string;
    /** @ignore */
    @Input() href?: string;
    /** @ignore */
    @Input() isActive?: boolean = false;
    /** @ignore */
    @Input() isActiveLinkClickable?: boolean = true;
    /** @ignore */
    @Input() label: string;
    /** @ignore */
    @Input() rel?: string;
}

@Component({
    selector: '',
})
export class TopBarAPI implements ITopBar {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * __Left side__ of the top navigation bar
     * <br><br>
     * See ITopBarSection <a href="#itopbarsection-api" target="_self">API</a>
     *  and <a href="#itopbarsection-format" target="_self">expected format</a>.
     */
    @Input() left?: ITopBarSection;
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * __Right side__ of the top navigation bar
     * <br><br>
     * See ITopBarSection <a href="#itopbarsection-api" target="_self">API</a>
     *  and <a href="#itopbarsection-format" target="_self">expected format</a>.
     */
    @Input() right?: ITopBarSection;
}

@Component({
    selector: '',
})
export class TopBarMenuItemAPI implements ITopBarMenuItem {
    // These following props are already available in "DefaultMenuItemAPI"

    /** @ignore */
    @Input() class?: string;
    /** @ignore */
    @Input() href?: string;
    /** @ignore */
    @Input() isActive?: boolean = false;
    /** @ignore */
    @Input() isActiveLinkClickable?: boolean = true;
    /** @ignore */
    @Input() label: string;
    /** @ignore */
    @Input() rel?: string;
}

@Component({
    selector: '',
})
export class TopBarSectionAPI implements ITopBarSection {
    /**
     * <span style="color: orange;">__Optional__</span>
     * <br><br>
     * This is a description of the following menu for screen readers to read.
     * This is for accessibility purpose only.
     */
    @Input() description?: string;
    /**
     * <span style="color: red;">__Required__</span>
     * <br><br>
     * See ITopBarMenuItem <a href="#itopbarmenuitem-api" target="_self">API</a>
     *  and <a href="#itopbarmenuitem-format" target="_self">expected format</a>.
     */
    @Input() items: ITopBarMenuItem[];
}
