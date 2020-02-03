import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

/**
 * foo  "std" quality > 0 sellin > 0
 * foo "degraded" quality = 0 sellin > 0
 * foo 'outdated' quality > 0 sellin <= 0
 * foo 'useless' quality = 0 sellin <= 0
 *
 * aged brie 'std' quality < 50  sellin > 0
 * aged brie 'good' quality =50 sellin any
 * aged brie 'fast-good' quality < 50 sellin <= 0
 *
 * sulfuras quality 80 sellin <= 0
 * sulfuras quality 80 sellin > 0
 *
 * Backstage 'good' asses quality > 0 sellin > 10
 * Backstage 'good' asses quality = 50 sellin > 10
 * Backstage 'fast-good' passes quality > 0  0 < sellin < 10
 * Backstage 'fast-good' passes quality  50  0 < sellin < 10
 * Backstage 'useless' passes quality > 0  sellin <= 0
 * Backstage 'useless' passes quality = 50 sellin <= 0
 */
describe("Gilded Rose", function() {

  it("case -1", function() {
    const emptyRose = new GildedRose();
    const value = emptyRose.items.length;
    expect(value).to.equal(0);
  });
  const gildedRose = new GildedRose([
    new Item("foo", 12, 23), // std foo
    new Item("foo", 12, 0), // degraded foo
    new Item("foo", 0, 4), // outdated foo
    new Item("foo", -1, 0), // useless foo
    new Item("Aged Brie", 1, 0),
    new Item("Aged Brie", 0, 50),
    new Item("Aged Brie", 1, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 12, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 12, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 7, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 7, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Sulfuras, Hand of Ragnaros", 10, 80),
    new Item("Aged Brie", 0, 25)
  ]);
  const items = gildedRose.updateQuality();

  it("case 0", function() {
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(22);
  });
  it("case 1", function() {
    expect(items[1].name).to.equal("foo");
    expect(items[1].sellIn).to.equal(11);
    expect(items[1].quality).to.equal(0);
  });
  it("case 2", function() {
    expect(items[2].name).to.equal("foo");
    expect(items[2].sellIn).to.equal(-1);
    expect(items[2].quality).to.equal(2);
  });
  it("case 3", function() {
    expect(items[3].name).to.equal("foo");
    expect(items[3].sellIn).to.equal(-2);
    expect(items[3].quality).to.equal(0);
  });
  it("case 4", function() {
    expect(items[4].name).to.equal("Aged Brie");
    expect(items[4].sellIn).to.equal(0);
    expect(items[4].quality).to.equal(1);
  });
  it("case 5", function() {
    expect(items[5].name).to.equal("Aged Brie");
    expect(items[5].sellIn).to.equal(-1);
    expect(items[5].quality).to.equal(50);
  });
  it("case 6", function() {
    expect(items[6].name).to.equal("Aged Brie");
    expect(items[6].sellIn).to.equal(0);
    expect(items[6].quality).to.equal(50);
  });
  it("case 7", function() {
    expect(items[7].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[7].sellIn).to.equal(11);
    expect(items[7].quality).to.equal(1);
  });

  it("case 8", function() {
    expect(items[8].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[8].sellIn).to.equal(11);
    expect(items[8].quality).to.equal(50);
  });
  it("case 9.0", function() {
    expect(items[9].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[9].sellIn).to.equal(6);
    expect(items[9].quality).to.equal(2);
  });
  it("case 10", function() {
    expect(items[10].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(items[10].sellIn).to.equal(6);
    expect(items[10].quality).to.equal(50);
  });
  it("case 11", function() {
    expect(items[11].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(items[11].sellIn).to.equal(4);
    expect(items[11].quality).to.equal(3);
  });
  it("case 12", function() {
    expect(items[12].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(items[12].sellIn).to.equal(4);
    expect(items[12].quality).to.equal(50);
  });
  it("case 13", function() {
    expect(items[13].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(items[13].sellIn).to.equal(-1);
    expect(items[13].quality).to.equal(0);
  });
  it("case 14", function() {
    expect(items[14].name).to.equal(
      "Backstage passes to a TAFKAL80ETC concert"
    );
    expect(items[14].sellIn).to.equal(-1);
    expect(items[14].quality).to.equal(0);
  });
  it("case 15", function() {
    expect(items[15].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[15].sellIn).to.equal(0);
    expect(items[15].quality).to.equal(80);
  });
  it("case 16", function() {
    expect(items[16].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[16].sellIn).to.equal(10);
    expect(items[16].quality).to.equal(80);
  });
  it("case 17", function() {
    expect(items[17].name).to.equal("Aged Brie");
    expect(items[17].sellIn).to.equal(-1);
    expect(items[17].quality).to.equal(27);
  });
});
