import { AnchorHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ClassAttributes } from 'react';
import { ComponentProps } from 'react';
import { Context } from 'react';
import { default as default_2 } from 'react-select';
import { default as default_3 } from 'react-select/creatable';
import { DetailedHTMLProps } from 'react';
import { GroupBase } from 'react-select';
import { HTMLAttributes } from 'react';
import { ImgHTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { JSX as JSX_3 } from 'react';
import { NavLinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { ReactNode } from 'react';
import { ReactSwitchProps } from 'react-switch';
import { RefAttributes } from 'react';
import { SerializedStyles } from '@emotion/utils';
import { SerializedStyles as SerializedStyles_2 } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';
import { TFunction } from 'i18next';
import { Theme } from '@emotion/react';
import { To } from 'react-router-dom';

export declare interface Alert {
    title: string;
    message: string;
    actions: AlertAction[];
}

declare interface AlertAction {
    label: string;
    type?: AlertActionType;
    onClick?: () => void;
}

declare enum AlertActionType {
    Primary = "primary",
    Secondary = "secondary"
}

declare type AlertContext = {
    showAlert: (alert: Alert) => void;
};

declare const AlertContext: Context<AlertContext>;

export declare function AlertProvider(props: PropsWithChildren): JSX_2.Element;

export declare const Anchor: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
}, DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;

export declare const AnchorLink: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & NavLinkProps & RefAttributes<HTMLAnchorElement>, {}, {}>;

export declare const Avatar: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & {
size?: number;
color?: string;
}, DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;

declare type Breakpoint = {
    pixelValue: number;
    size: string;
    whenActive: BreakpointQuery;
    whenInactive: BreakpointQuery;
};

export declare type BreakpointName = 'compact';

declare type BreakpointQuery = (style: SerializedStyles_2) => SerializedStyles_2;

export declare const Button: {
    Primary: <C extends ComponentOption>(props: {
        asComponent?: C;
    } & ComponentProps<{
        readonly button: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
        readonly anchor: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        } & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
        readonly link: StyledComponent<NavLinkProps & RefAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
    }[C]> & {
        theme?: Theme;
        as?: React.ElementType;
    } & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & {
        theme?: Theme;
    } & {
        disabled?: boolean;
        small?: boolean;
    } & {
        action?: "neutral" | "destructive";
    }) => JSX_2.Element;
    Secondary: <C extends ComponentOption>(props: {
        asComponent?: C;
    } & ComponentProps<{
        readonly button: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
        readonly anchor: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        } & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
        readonly link: StyledComponent<NavLinkProps & RefAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
    }[C]> & {
        theme?: Theme;
        as?: React.ElementType;
    } & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & {
        theme?: Theme;
    } & {
        disabled?: boolean;
        small?: boolean;
    }) => JSX_2.Element;
    Tertiary: <C extends ComponentOption>(props: {
        asComponent?: C;
    } & ComponentProps<{
        readonly button: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        }, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
        readonly anchor: StyledComponent<{
            theme?: Theme;
            as?: React.ElementType;
        } & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
        readonly link: StyledComponent<NavLinkProps & RefAttributes<HTMLAnchorElement> & {
            theme?: Theme;
        }, {}, {}>;
    }[C]> & {
        theme?: Theme;
        as?: React.ElementType;
    } & ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & {
        theme?: Theme;
    } & {
        disabled?: boolean;
        small?: boolean;
    }) => JSX_2.Element;
};

export declare const Card: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & {
focus?: boolean;
glossBorder?: boolean;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare function Cell(props: PropsWithChildren<IProps>): JSX_2.Element;

declare type CellFocus = 'active' | 'blurred' | 'selected';

export declare function Checkbox({ checked, onChange, disabled, label, id, name, className }: CheckboxProps): JSX_2.Element;

declare interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    id?: string;
    name?: string;
    className?: string;
}

declare type ComponentOption = 'button' | 'anchor' | 'link';

export declare function ContactModal({ t, pressLink, ...props }: Omit<ComponentProps<typeof Modal>, 'title'> & Omit<ComponentProps<typeof ContactPage>, 'showDescription'>): JSX_2.Element;

export declare function ContactPage({ t, pressLink, showDescription, }: {
    t: TFunction;
    pressLink: JSX.Element;
    showDescription?: boolean;
}): JSX_2.Element;

declare function Contents(props: {
    children: ReactNode;
    width?: number;
    align?: 'left' | 'right';
}): JSX_2.Element;

declare type DefaultLeftItems = {
    blogPath: To;
    researchPath: To;
    aboutPath: To;
    contactPath: To;
    onContactModal: () => void;
    t: TFunction;
};

export declare const dismissAction: (label: string) => {
    label: string;
    type: AlertActionType;
};

export declare function FavIcon(props: {
    host: string;
    size?: number;
}): JSX_2.Element;

declare function FitLineRound(props: {
    children: string;
    baseSize: keyof typeof RoundSizes;
}): JSX_2.Element;

export declare function getTextWidth(text: string, fontSize: number, fontWeight?: number, fontFamily?: string): number;

export declare const Heading: {
    Huge: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
    Large: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & {
    inset?: boolean;
    }, DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
    Regular: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
};

export declare const HideUntil: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & {
breakpoint: BreakpointName;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare function Icon(props: PropsWithChildren<IIconStyleProps & {
    name?: keyof typeof icons;
}>): JSX_2.Element;

declare const icons: {
    OneSec: JSX_2.Element;
    Suggestions: JSX_2.Element;
    Settings: JSX_2.Element;
    Play: JSX_2.Element;
    Add: JSX_2.Element;
    Spinner: JSX_2.Element;
    CaretDown: JSX_2.Element;
    XMark: JSX_2.Element;
    Check: JSX_2.Element;
    CircleCheck: JSX_2.Element;
    CircleCheckRegular: JSX_2.Element;
    CircleXmarkRegular: JSX_2.Element;
    CircleInfo: JSX_2.Element;
    Share: JSX_2.Element;
    Clock: JSX_2.Element;
    Calendar: JSX_2.Element;
    Hand: JSX_2.Element;
    Search: JSX_2.Element;
    ChevronRight: JSX_2.Element;
    ChevronLeft: JSX_2.Element;
    Click: JSX_2.Element;
    Ellipsis: JSX_2.Element;
    Edit: JSX_2.Element;
    Trash: JSX_2.Element;
    BarChart: JSX_2.Element;
    Smiley: JSX_2.Element;
    Science: JSX_2.Element;
    Paperclip: JSX_2.Element;
    Account: JSX_2.Element;
    SignOut: JSX_2.Element;
    ReIntervention: JSX_2.Element;
    Wallet: JSX_2.Element;
    UserRegular: JSX_2.Element;
    Globe: JSX_2.Element;
    AppStore: JSX_2.Element;
    GooglePlay: JSX_2.Element;
    Question: JSX_2.Element;
    Bars: JSX_2.Element;
    Block: JSX_2.Element;
};

declare interface IContentProps {
    title?: string | JSX_3.Element;
    style?: React.CSSProperties;
    disableCloseIcon?: boolean;
}

declare interface IIconStyleProps {
    size?: number;
    color?: string;
}

export declare const Input: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & {
theme?: Theme;
}, {}, {}>;

declare interface IOneSecFixedTheme {
    spaces: {
        minimal: string;
        standard: string;
        double: string;
        maximal: string;
    };
    sizes: {
        sidebarWidth: string;
        cardRadius: string;
        pageWidth: string;
    };
    breakpoints: {
        [key in BreakpointName]: Breakpoint;
    };
}

export declare interface IOneSecTheme extends IOneSecFixedTheme {
    name: 'light' | 'dark';
    colors: {
        background: {
            absolute: string;
            main: string;
            card: string;
            overlay: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            highlight: string;
            tint: IOneSecTintColors;
        };
        tint: IOneSecTintColors;
        hairline: string;
    };
    hairlineBorder: string;
    transparentHairlineBorder: string;
    cardShadow: string;
    modalShadow: string;
    modalBackdrop: string;
    mixins: {
        glossBorder: SerializedStyles_2;
    };
}

export declare interface IOneSecTintColors {
    purple: string;
    yellow: string;
    red: string;
    blue: string;
    green: string;
}

declare interface IOpenProps {
    open: boolean;
    onClose: () => void;
}

declare interface IProps {
    title: string;
    leftIcon?: keyof typeof icons;
    focus?: CellFocus;
    selectable?: boolean;
    onClick?: () => void;
}

export declare const Label: {
    Regular: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & {
    inset?: boolean;
    }, DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
    Small: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
};

export declare function LineChart(props: {
    data: {
        label: string;
        value: number;
    }[];
    formatY?: (value: number | string) => string;
}): JSX_2.Element;

export declare const Logotype: () => JSX_2.Element;

export declare function Modal(props: PropsWithChildren<IContentProps & IOpenProps>): JSX_2.Element;

export declare function NavigationBar(props: NavigationBarProps): JSX_2.Element;

declare type NavigationBarProps = PropsWithChildren<{
    logoLinkTo?: To;
    append?: React.ReactNode;
    leftItems: NavigationItem[] | DefaultLeftItems;
    rightItems: NavigationItem[];
    secondaryItems?: SecondaryNavigationItem[];
    hamburgerMenuHeight?: number;
}>;

declare type NavigationButton = {
    type: 'button';
    onClick: () => void;
};

declare function NavigationItem(props: {
    item: NavigationItem;
}): JSX_2.Element;

declare type NavigationItem = (NavigationLink | NavigationButton) & {
    id: string;
    label: string;
};

declare type NavigationLink = {
    type: 'link';
    to: To;
};

export declare const oneSecFontFaceCss: SerializedStyles;

export declare const PageContainer: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare function PageSection(props: PropsWithChildren<{
    label?: string | JSX_3.Element;
    footer?: string | JSX_3.Element;
    paddingTop?: number;
}>): JSX_2.Element;

export declare const Paragraph: {
    Regular: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
    Small: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
};

export declare const PlainLink: StyledComponent<NavLinkProps & RefAttributes<HTMLAnchorElement> & {
theme?: Theme;
}, {}, {}>;

export declare const Popover: {
    Wrapper: typeof Wrapper;
    Contents: typeof Contents;
    ActionCell: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    }, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
};

export declare const Round: {
    Huge: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
    theme?: Theme;
    }, {}, {}>;
    Large: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
    theme?: Theme;
    }, {}, {}>;
    Regular: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
    theme?: Theme;
    }, {}, {}>;
    Small: StyledComponent<    {
    theme?: Theme;
    as?: React.ElementType;
    } & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
    theme?: Theme;
    }, {}, {}>;
    FitLine: typeof FitLineRound;
};

declare const RoundSizes: {
    Huge: number;
    Large: number;
    Regular: number;
    Small: number;
};

declare function SecondaryNavigationItem(props: {
    item: SecondaryNavigationItem;
}): JSX_2.Element;

declare type SecondaryNavigationItem = NavigationItem & {
    icon?: keyof typeof icons;
    active?: boolean;
};

export declare function Select<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: (ComponentProps<typeof default_2<Option, IsMulti, Group>> & {
    allowCreation?: false;
}) | (ComponentProps<typeof default_3<Option, IsMulti, Group>> & {
    allowCreation?: true;
})): JSX_2.Element;

export declare const Separator: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & {
transparent?: boolean;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare const ShowUntil: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & {
breakpoint: BreakpointName;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare function Switch(props: ReactSwitchProps): JSX_2.Element;

export declare function Tag(props: PropsWithChildren<{
    color?: ComponentProps<typeof TagLabel>['color'];
    variant?: ComponentProps<typeof TagLabel>['variant'];
    large?: boolean;
}>): JSX_2.Element;

declare const TagLabel: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & {
theme?: Theme;
} & {
color: keyof IOneSecTintColors | "gray" | "outline";
variant: "default" | "tonal" | "outline";
large?: boolean;
}, {}, {}>;

export declare function ThemeProvider(props: PropsWithChildren<{
    darkMode?: boolean;
}>): JSX_2.Element;

export declare function ThemeProviderWebsite(props: PropsWithChildren<{
    darkMode?: boolean;
}>): JSX_2.Element;

export declare const TransparentInput: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
} & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & {
theme?: Theme;
}, {}, {}>;

export declare const TwoGrid: StyledComponent<    {
theme?: Theme;
as?: React.ElementType;
}, DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

export declare function useAlert(): AlertContext;

export declare function useBreakpoint(breakpoint: BreakpointName): boolean;

export declare function useModalOpen(): {
    modalProps: IOpenProps;
    open: () => void;
};

declare function Wrapper(props: {
    children: ReactNode;
}): JSX_2.Element;

export { }


declare module '@emotion/react' {
    interface Theme extends IOneSecTheme {
    }
}
