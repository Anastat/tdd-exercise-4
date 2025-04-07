const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].sellIn = this.items[i].sellIn - 1;

      // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      if (this.items[i].name == SULFURAS) {
        continue;
      }

      switch (this.items[i].name) {
        case AGED_BRIE:
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality + 2;
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
          break;
        case BACKSTAGE_PASSES:
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = 0;
          } else if (this.items[i].sellIn < 10 && this.items[i].sellIn >= 5) {
            this.items[i].quality = this.items[i].quality + 2;
          } else if (this.items[i].sellIn < 5) {
            this.items[i].quality = this.items[i].quality + 3;
          } else {
            this.items[i].quality = this.items[i].quality + 1;
          }
          break;
        default:
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - 2;
          } else {
            this.items[i].quality = this.items[i].quality - 1;
          }
      }

      if (this.items[i].quality > 50) { // The Quality of an item is never more than 50
        this.items[i].quality = 50
      } else if (this.items[i].quality < 0) { // The Quality of an item is never negative
        this.items[i].quality = 0
      }
    }

    return this.items;
  }
}
