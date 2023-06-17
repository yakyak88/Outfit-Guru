const colorMatchRates = {
    pink: { red: 10, green: 10, blue: 80, black: 60, white: 80, pink: 100 },
    red: { pink: 10, green: 10, blue: 60, black: 70, white: 80, red: 100 },
    green: { pink: 10, red: 10, blue: 10, black: 80, white: 80, green: 100 },
    blue: { pink: 80, red: 60, green: 10, black: 80, white: 70, blue: 100 },
    black: { pink: 60, red: 70, green: 80, blue: 80, white: 100, black: 100 },
    white: { pink: 80, red: 80, green: 80, blue: 70, black: 100, white: 100 },
};

const sizeMatchRates = {
    shoes: {
        shirt: {
            36: { S: 90, M: 75, L: 45, XL: 20, XXL: 10 },
            37: { S: 90, M: 80, L: 50, XL: 25, XXL: 10 },
            39: { S: 85, M: 85, L: 50, XL: 25, XXL: 15 },
            43: { S: 30, M: 75, L: 85, XL: 60, XXL: 40 },
            45: { S: 10, M: 50, L: 70, XL: 90, XXL: 85 },
            46: { S: 5, M: 15, L: 45, XL: 75, XXL: 90 },
        },
        pants: {
            36: {
                30: 90,
                31: 75,
                32: 45,
                34: 25,
                35: 25,
                36: 20,
                39: 15,
                42: 15,
                43: 10,
                48: 5,
            },
            37: {
                30: 90,
                31: 80,
                32: 50,
                34: 25,
                35: 10,
                36: 10,
                39: 10,
                42: 10,
                43: 10,
                48: 10,
            },
            39: {
                30: 85,
                31: 85,
                32: 50,
                34: 25,
                35: 15,
                36: 15,
                39: 15,
                42: 15,
                43: 15,
                48: 15,
            },
            43: {
                30: 50,
                31: 75,
                32: 85,
                34: 60,
                35: 40,
                36: 40,
                39: 40,
                42: 40,
                43: 40,
                48: 40,
            },
            45: {
                30: 80,
                31: 80,
                32: 50,
                34: 25,
                35: 15,
                36: 15,
                39: 15,
                42: 15,
                43: 15,
                48: 15,
            },
            46: {
                30: 80,
                31: 80,
                32: 50,
                34: 25,
                35: 15,
                36: 15,
                39: 15,
                42: 15,
                43: 15,
                48: 15,
            },
        },
    },
    shirt: {
        shoes: {
            S: { 36: 90, 37: 90, 39: 85, 43: 50, 45: 80, 46: 80 },
            M: { 36: 75, 37: 80, 39: 85, 43: 75, 45: 80, 46: 80 },
            L: { 36: 45, 37: 50, 39: 50, 43: 85, 45: 50, 46: 50 },
            XL: { 36: 20, 37: 25, 39: 25, 43: 60, 45: 25, 46: 25 },
            XXL: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
        },
        pants: {
            S: {
                30: 90,
                31: 75,
                32: 45,
                34: 20,
                35: 10,
                36: 10,
                39: 10,
                42: 10,
                43: 10,
                48: 10,
            },
            M: {
                30: 90,
                31: 80,
                32: 50,
                34: 25,
                35: 10,
                36: 10,
                39: 10,
                42: 10,
                43: 10,
                48: 10,
            },
            L: {
                30: 85,
                31: 85,
                32: 50,
                34: 25,
                35: 15,
                36: 15,
                39: 15,
                42: 15,
                43: 15,
                48: 15,
            },
            XL: {
                30: 20,
                31: 25,
                32: 25,
                34: 35,
                35: 40,
                36: 40,
                39: 55,
                42: 80,
                43: 75,
                48: 70,
            },
            XXL: {
                30: 10,
                31: 10,
                32: 30,
                34: 45,
                35: 50,
                36: 55,
                39: 60,
                42: 75,
                43: 80,
                48: 75,
            },
        },
    },
    pants: {
        shoes: {
            30: { 36: 90, 37: 90, 39: 85, 43: 50, 45: 80, 46: 80 },
            31: { 36: 75, 37: 80, 39: 85, 43: 75, 45: 80, 46: 80 },
            32: { 36: 45, 37: 50, 39: 50, 43: 85, 45: 50, 46: 50 },
            34: { 36: 20, 37: 25, 39: 25, 43: 60, 45: 25, 46: 25 },
            35: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
            36: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
            39: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
            42: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
            43: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
            48: { 36: 10, 37: 10, 39: 15, 43: 40, 45: 15, 46: 15 },
        },
        shirt: {
            30: { S: 90, M: 90, L: 85, XL: 50, XXL: 80 },
            31: { S: 75, M: 80, L: 85, XL: 75, XXL: 80 },
            32: { S: 45, M: 50, L: 50, XL: 85, XXL: 50 },
            34: { S: 20, M: 25, L: 25, XL: 60, XXL: 25 },
            35: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
            36: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
            39: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
            42: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
            43: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
            48: { S: 10, M: 10, L: 15, XL: 40, XXL: 15 },
        },
    },
};

const getColorRecommendation = (item1, item2) => {
    return colorMatchRates[item1.color][item2.color];
};
const getSizeRecommendation = (item1, item2) => {
    return sizeMatchRates[item1.type]?.[item2.type]?.[item1.size]?.[item2.size];
};

export const getFirstRecommendation = (item1, item2) => {
    return (
        (getColorRecommendation(item1, item2) +
            getSizeRecommendation(item1, item2)) /
        2
    );
};

export const getSecondRecommendation = (item1, item2, item3) => {
    const first = getFirstRecommendation(item1, item2);
    const second = getFirstRecommendation(item1, item3);
    const third = getFirstRecommendation(item2, item3);

    return (first + second + third) / 3;
};
