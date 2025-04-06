import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 2 if sellIn is less than 11 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(13);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is increased by 1 if sellIn is more than 11 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 16, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
  });

  test("quality of 'Aged Brie' is increased by 2 if sellIn is less than 0 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(13);
  });

  test("quality of 'foo' stays same if sellIn is less than 0 and quality is less than 50", () => {
    const gildedRose = new Shop([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("sellIn of 'Backstage passes to a TAFKAL80ETC concert' is dicreased by 1 ", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 16, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(15);
  });

  test("quality of 'Backstage passes to a TAFKAL80ETC concert' is 0 if sellIn is less than 0 ", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 11)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  test("quality of 'foo' is decrease by 2 if sellIn is less than 0 and quality is more than 0", () => {
    const gildedRose = new Shop([new Item("foo", -1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});
