// Type definitions for jquery-alertable 1.0.2
// Project: https://github.com/claviska/jquery-alertable
// Definitions by: Steven Robertson <https://github.com/stever>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQueryStatic {
    alertable: Alertable;
}

interface Alertable {
    alert(message: string, options?: AlertableOptions): JQueryPromise<void>;
    confirm(message: string, options?: AlertableOptions): JQueryPromise<void>;
    prompt(message: string, options?: AlertableOptions): JQueryPromise<void>;
    defaults: AlertableOptions;
}

interface AlertableOptions {
    container?: string | undefined;
    html?: boolean | undefined;
    cancelButton?: string | undefined;
    okButton?: string | undefined;
    overlay?: string | undefined;
    prompt?: string | undefined;
    modal?: string | undefined;
    hide?: Function | undefined;
    show?: Function | undefined;
}
