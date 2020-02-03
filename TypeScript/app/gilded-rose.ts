export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemType = {
  backstage: "Backstage passes to a TAFKAL80ETC concert",
  agedBrie: "Aged Brie",
  sulfuras: "Sulfuras, Hand of Ragnaros"
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let currentItem: Item;
    for (let i = 0; i < this.items.length; i++) {
      currentItem = this.items[i];
      if (
        currentItem.name != itemType.agedBrie &&
        currentItem.name != itemType.backstage
      ) {
        if (currentItem.quality > 0) {
          if (currentItem.name != itemType.sulfuras) {
            currentItem.quality = currentItem.quality - 1;
          }
        }
      } else {
        if (currentItem.quality < 50) {
          currentItem.quality = currentItem.quality + 1;
          if (currentItem.name == itemType.backstage) {
            if (currentItem.sellIn < 11) {
              if (currentItem.quality < 50) {
                currentItem.quality = currentItem.quality + 1;
              }
            }
            if (currentItem.sellIn < 6) {
              if (currentItem.quality < 50) {
                currentItem.quality = currentItem.quality + 1;
              }
            }
          }
        }
      }
      if (currentItem.name != itemType.sulfuras) {
        currentItem.sellIn = currentItem.sellIn - 1;
      }
      if (currentItem.sellIn < 0) {
        if (currentItem.name != itemType.agedBrie) {
          if (currentItem.name != itemType.backstage) {
            if (currentItem.quality > 0) {
              if (currentItem.name != itemType.sulfuras) {
                currentItem.quality = currentItem.quality - 1;
              }
            }
          } else {
            currentItem.quality = currentItem.quality - currentItem.quality;
          }
        } else {
          if (currentItem.quality < 50) {
            currentItem.quality = currentItem.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
