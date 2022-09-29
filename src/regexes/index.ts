export enum Regexes {
    Email = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    Password = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
    Username = "^[a-zA-Z0-9_-]{3,16}$",
    HexColor = "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
    Base64 = "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$",
    Base64Url = "^(?:[A-Za-z0-9-_]{4})*(?:[A-Za-z0-9-_]{2}==|[A-Za-z0-9-_]{3}=|[A-Za-z0-9-_]{4})$",
    Base32 = "^(?:[A-Z2-7]{8})*(?:[A-Z2-7]{2}={6}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{7}=)?$",
    Base32Hex = "^(?:[A-V2-7]{8})*(?:[A-V2-7]{2}={6}|[A-V2-7]{4}={4}|[A-V2-7]{5}={3}|[A-V2-7]{7}=)?$",
    Base16 = "^(?:[A-F0-9]{2})*$",
    Base8 = "^(?:[0-7]{3})*$",
    Base2 = "^(?:[01]{8})*(?:[01]{1,7})?$",
    Base36 = "^[a-z0-9]+$",
    Base62 = "^[a-zA-Z0-9]+$",
    Base64Image = "^data:image\\/(?:png|jpg|jpeg|gif|webp|svg\\+xml);base64,",
    WebSocketUrl = "^wss?:\\/\\/(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z0-9-]+(?::[0-9]+)?(?:\\/[^\\s]*)?$",
    Url = "^https?:\\/\\/(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z0-9-]+(?::[0-9]+)?(?:\\/[^\\s]*)?$",
    Ip = "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",
    IpV4 = "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$",
    IpV6 = "^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$",
    MacAddress = "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
    Uuid = "^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
    UuidV3 = "^[0-9a-f]{8}-[0-9a-f]{4}-3[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
    UuidV4 = "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
    Emoji = "^(?:\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F\\uDE80-\\uDEFF]|\\uD83E[\\uDD00-\\uDDFF])+$",
    CreditCard = "^\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}$",
    CreditCardVisa = "^4[0-9]{12}(?:[0-9]{3})?$",
    CreditCardMastercard = "^5[1-5][0-9]{14}$",
    CreditCardAmericanExpress = "^3[47][0-9]{13}$",
    CreditCardDinersClub = "^3(?:0[0-5]|[68][0-9])[0-9]{11}$",
    CreditCardDiscover = "^6(?:011|5[0-9]{2})[0-9]{12}$",
    CreditCardJcb = "^(?:2131|1800|35\\d{3})\\d{11}$",
    CreditCardUnionPay = "^62[0-5]\\d{13,16}$",
    CreditCardMaestro = "^(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15}$",
    BitcoinAddress = "^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$",
    EthereumAddress = "^0x[a-fA-F0-9]{40}$",
    LitecoinAddress = "^L[a-km-zA-HJ-NP-Z1-9]{26,33}$",
    DogecoinAddress = "^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$",
    DashAddress = "^X[1-9A-HJ-NP-Za-km-z]{33}$",
    RippleAddress = "^[r][a-km-zA-HJ-NP-Z1-9]{24,34}$",
    BitcoinCashAddress = "^(bitcoincash:)?(q|p)[a-z0-9]{41}$",
    SolanaAddress = "^([A-HJ-NP-Za-km-z1-9]{43})$",
    PolygonAddress = "^0x[a-fA-F0-9]{40}$",
    ValidDate = "^\\d{4}-\\d{2}-\\d{2}$",
    ValidTime = "^\\d{2}:\\d{2}:\\d{2}$",
    ValidDateTime = "^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$",
    InternationalPhoneNumber = "/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i",
    UPIAddress = "^[a-zA-Z0-9\\+\\-\\.\\_\\@]{1,50}$",
}

