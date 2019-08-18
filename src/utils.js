export const formatting = function (number2Format) {
    return (Math.round(number2Format * 100) / 100).toFixed(2);
};

