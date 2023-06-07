/** @odoo-module */

import { Component } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";

export class SyncNotification extends Component {
    static template = "point_of_sale.SyncNotification";

    setup() {
        this.pos = usePos();
    }
    get sync() {
        return this.pos.globalState.synch;
    }
    onClick() {
        if (this.pos.globalState.synch.status !== "connected") {
            this.pos.globalState.showOfflineWarning = true;
        }
        this.pos.globalState.push_orders({ show_error: true });
    }
}
