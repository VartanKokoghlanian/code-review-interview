const K = "K";

/**
 * Created by thomas on 02/12/2019.
 * This class is a basket
 */

export class BasketInformations {
    // The product of the basket
    static map: Map<string, number> = new Map<string, number>()

    addProductToBasket(product: string, price: number) {
        BasketInformations.map.set(product, price)
    }

    getBasketPrice(inCents: boolean): Number {
        var v = 0;
        for (let s of Array.from(BasketInformations.map.values())) {
            v += s;
        }
        return inCents ? new Number(v * 100) : Number(v)
    }
}