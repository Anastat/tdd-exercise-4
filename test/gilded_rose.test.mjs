import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  test("shop has an empty list of items when initiated", () => {
    const gildedRose = new Shop();
    const items = gildedRose.items;
    expect(items.length).to.equal(0);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 1 if sellIn is 11 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 1 if sellIn is less than 11 and quality is 49", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 2 if sellIn is less than 6 and quality is 48", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
    expect(items[0].sellIn).to.equal(4);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 2 if sellIn is 6 and quality is 47", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });

  test("quality of 'Aged Brie' is increased by 2 if sellIn is less than 0 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(13);
  });

  test("quality of 'Aged Brie' is same if sellIn is less than 0 and quality is 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  test("quality of 'foo' stays same if sellIn is less than 0 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("sellIn of 'Backstage passes to a TAFKAL80ETC concert' is dicreased by 1 and quality is increase by 3 if sellIn is 5 and quality is 11", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(14);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is 0 if sellIn is less than 0 ", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("quality of 'foo' is decreased by 2 if sellIn is less than 0 and quality is greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("quality of 'foo' is decreased by 1 if sellIn is greater than 0 and quality is greater than 0", () => {
    const gildedRose = new Shop([new Item("foo", 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  test("quality of 'Sulfuras, Hand of Ragnaros' stays same if sellIn is less than 0 and quality is 80", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
    expect(items[0].sellIn).to.equal(-2);
  });

  test("quality of 'Conjured' is decreased by 4 if sell by date has passed", () => {
    const gildedRose = new Shop([new Item("Conjured", 0, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(41);
  });

  test("quality of 'Conjured' is decreased by 2 if sell by date is more than 0", () => {
    const gildedRose = new Shop([new Item("Conjured", 1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(28);
  });
});
