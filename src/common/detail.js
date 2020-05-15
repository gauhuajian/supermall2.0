export class Goods {
    constructor(columns, itemInfo, shopInfo) {
        this.title = itemInfo.title;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = shopInfo.services;

    }
}

export class ShopInfo {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.goods = shopInfo.cGoods;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
    }
}

export class DetailInfo {
    constructor(detailInfo) {
        this.desc = detailInfo.desc
        this.key = detailInfo.detailImage[0].key
        this.images = detailInfo.detailImage[0].list
    }
}

export class ItemParams {
    constructor(ItemParams) {
        this.rule = ItemParams.rule.tables
        this.info = ItemParams.info.set
    }
}

export class Rate {
    constructor(rate) {
        this.content = rate.list[0].content;
        this.created = rate.list[0].created;
        this.style = rate.list[0].style;
        this.users = rate.list[0].user;
    }
}

export class SkuInfo {
    constructor(skuInfo) {
        this.color = skuInfo.props[0].list
        this.size = skuInfo.props[1].list
        this.defaultPrice = skuInfo.defaultPrice
        this.image = skuInfo.skus[0].img
        this.skus = skuInfo.skus
        this.totalStock = skuInfo.totalStock
        this.title = skuInfo.title
    }
}