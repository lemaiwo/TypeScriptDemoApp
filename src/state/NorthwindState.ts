import Supplier from "../model/Supplier";
import NorthwindService from "../service/NorthwindService";
import BaseState from "./BaseState";

export type nwdata = {
    supplier: Supplier
}

/**
 * @namespace be.elia.pm.gridtool.state
 */
export default class GridToolState extends BaseState<NorthwindService,nwdata> {
    protected service: NorthwindService;
    public data: nwdata;

    constructor(service: NorthwindService) {
        super(service);
        this.service = service;
        this.data = {
            supplier:new Supplier()
        }
        this.updateModel();
    }
    public async getSupplier(id:number){
        const supplierEntity = await this.getService().getSupplierById(id);
        this.getData().supplier = new Supplier(supplierEntity.data);
        this.updateModel();
        return this.getData().supplier;
    }
    public async saveSupplier(){
        const supplier = this.getData().supplier;
        const supplierEntity = await this.getService().updateSupplier(supplier.getJSON())
        
        return this.getSupplier(supplier.getId());
    }
}