export const RandomMargin = (base, width, height) => {
    const numberSquares = Math.floor(width / 46);
    const numberSquaresH = Math.floor(height / 46);
    const extraMarginSize = width % 46;
    const extraMarginSizeH = height % 46;
    const marginSizeDivided = extraMarginSize / numberSquares / 2;
    const marginSizeDividedH = extraMarginSizeH / numberSquaresH / 2;
    const style = { margin: `${base + marginSizeDividedH}px ${base + marginSizeDivided}px` };
    return style;
}