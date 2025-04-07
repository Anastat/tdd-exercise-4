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
      if (this.items[i].name == SULFURAS) {
        continue;
      }

      if (this.items[i].name == AGED_BRIE) {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      } else if (this.items[i].name == BACKSTAGE_PASSES) {
        if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) {
          this.items[i].quality = this.items[i].quality + 2;
        } else if (this.items[i].sellIn <= 5) {
          this.items[i].quality = this.items[i].quality + 3;
        } else {
          this.items[i].quality = this.items[i].quality + 1;
        }
        this.items[i].quality = this.items[i].quality > 50 ? 50 : this.items[i].quality;
      } else {
        if (this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }

      this.items[i].sellIn = this.items[i].sellIn - 1;

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == AGED_BRIE) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        } else {
          if (this.items[i].name == BACKSTAGE_PASSES) {
            this.items[i].quality = 0;
          } else {
            if (this.items[i].quality > 0) {
              this.items[i].quality = this.items[i].quality - 1;
            }
          }
        }
      }
    }

    return this.items;
  }
}
