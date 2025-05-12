import { Quantity } from "../value-objects/Quantity";
import { SKU } from "../value-objects/SKU";

export interface ProductInventoryEventsPort {
  emitProductInventoryReserved(sku: SKU, qty: Quantity): Promise<void>;
}
