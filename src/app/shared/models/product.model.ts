/**
 * Created by andrei on 30.07.2017.
 */
export class Product {
  constructor(
    public title: string,
    public id: number,
    public img: string,
    public text: string,
    public price: number = 50) {}
}
