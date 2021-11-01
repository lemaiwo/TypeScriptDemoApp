import { SuppliersEntity } from "../service/NorthwindService";
import Address from "./Address";
import BaseObject from "./BaseObject";

/**
 * @namespace be.wl.TypeScriptDemoApp.model
 */
export default class Supplier extends BaseObject {
    private id: number;
    private name: string;
    private concurrency: number;
    private address:Address;

    constructor(data?: SuppliersEntity) {
        super();

        if (data) {
            this.id = data.ID;
            this.name = data.Name;
            this.concurrency = data.Concurrency;
            this.address = new Address(data.Address);
        }
    }
    public getId():number{
        return this.id;
    }
    public getJSON(): SuppliersEntity {
        return {
            ID: this.id,
            Name: this.name,
            Concurrency: this.concurrency,
            Address:this.address.getJSON()
        };
    }
}