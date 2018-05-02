import { Component, OnInit } from "@angular/core";
import foods from "../foods";
import { FilterPipe } from "../filter.pipe";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.css"]
})
export class FoodListComponent implements OnInit {
  foods: Array<Object>;
  dailyList: Array<Object> = [];
  show: boolean = false;
  total: number = 0;
  constructor() {}

  toggle() {
    this.show ? (this.show = false) : (this.show = true);
  }
  addFood(name, calories, image) {
    this.foods.push({ name: name, calories: calories, image: image });
  }
  addToDaily(food, quantity) {
    if (this.dailyList.indexOf(food) === -1) {
      food.quantity = parseInt(quantity.value);
      food.total = quantity.value * food.calories;
      this.dailyList.push(food);
      this.dailyList.forEach(e => {
        console.log(e["total"]);
        this.total += e["total"];
      });
    } else {
      let index = this.dailyList.indexOf(food);
      food.quantity = parseInt(quantity.value);

      this.dailyList[index]["quantity"] = food.quantity;
      this.dailyList[index]["total"] = food.quantity * food.calories;
      this.total = 0;
      this.dailyList.forEach(e => {
        console.log(e["total"]);
        this.total += e["total"];
      });
      if (food.quantity === 0) {
        this.dailyList.splice(index, 1);
      }
    }
  }
  ngOnInit() {
    this.foods = foods;
  }
}
